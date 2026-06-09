import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { AppServices } from '../../../../core/services/app/app-services';
import { ActivatedRoute } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexStates,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  grid: ApexGrid;
  states: ApexStates;
};

@Component({
  selector: 'app-technical',
  standalone: true,
  imports: [CommonModule, ChartComponent],
  templateUrl: './technical.html',
  styleUrl: './technical.css',
})
export class Technical implements OnInit {
  timeframes: string[] = ['DAILY', 'WEEKLY', 'MONTHLY'];
  activeTimeframe: string = 'DAILY';

  // State Signals
  rawData = signal<any[]>([]);
  selectedIndex = signal<number | null>(null);

  // Reactive Computed Data
  // This automatically switches between the selected day OR the 5-day sum
  activeData = computed(() => {
    const data = this.rawData();
    const index = this.selectedIndex();

    // If a specific bar is clicked, return that day's data
    if (index !== null && data[index]) {
      return {
        totalVolume: data[index].totalVolume,
        deliveryVolume: data[index].deliveryVolume,
        startDate: data[index].startDate,
      };
    }

    // Default: Return the sum of all 5 days
    return {
      totalVolume: data.reduce((acc, item) => acc + item.totalVolume, 0),
      deliveryVolume: data.reduce((acc, item) => acc + item.deliveryVolume, 0),
      startDate: null, // Null indicates we are viewing the total sum
    };
  });

  // UI display signals (auto-format the active data)
  formattedTradedTotal = computed(() =>
    new Intl.NumberFormat('en-IN').format(this.activeData().totalVolume),
  );
  formattedDeliveryTotal = computed(() =>
    new Intl.NumberFormat('en-IN').format(this.activeData().deliveryVolume),
  );

  deliveryPercentage = computed(() => {
    const total = this.activeData().totalVolume;
    if (total === 0) return '0.00';
    return ((this.activeData().deliveryVolume / total) * 100).toFixed(2);
  });

  selectedLabel = computed(() => {
    const date = this.activeData().startDate;
    if (!date) return 'LAST 5 DAYS';

    // Format to match screenshot: "5 JUN, 26"
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString('en-IN', { month: 'short' }).toUpperCase();
    const year = d.getFullYear().toString().slice(-2);

    return `${day} ${month}, ${year}`;
  });

  chartOptions: ChartOptions = {
    series: [],
    chart: {
      type: 'bar',
      height: 250,
      toolbar: { show: false },
    },
    xaxis: {
      categories: [],
    },
    plotOptions: {},
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    // Add the missing properties here to satisfy TypeScript
    colors: ['#8271d4', '#4fa5e3'],
    legend: { show: false },
    grid: { show: false },
    states: {
      active: {
        allowMultipleDataPointsSelection: false,
        filter: { type: 'none' },
      },
    },
  };

  constructor(
    private appSer: AppServices,
    private route: ActivatedRoute,
  ) {
    this.setTimeframe('DAILY');
  }

  ngOnInit(): void {}

  chartInit(data: any[]) {
    data = data.reverse();
    this.chartOptions = {
      series: [
        {
          name: 'Total traded volume',
          data: data.map((item) => item.totalVolume),
        },
        {
          name: 'Delivery volume',
          data: data.map((item) => item.deliveryVolume),
        },
      ],
      chart: {
        type: 'bar',
        height: 220,
        toolbar: { show: false },
        events: {
          // Listen for bar clicks
          dataPointSelection: (event: any, chartContext: any, config: any) => {
            // ApexCharts gives us the index of the clicked bar
            const index = config.dataPointIndex;

            // If user clicks the exact same bar again, toggle it off (deselect)
            if (this.selectedIndex() === index) {
              this.selectedIndex.set(null);
            } else {
              this.selectedIndex.set(index);
            }
          },
        },
      },
      colors: ['#8271d4', '#4fa5e3'],
      plotOptions: {
        bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 },
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      grid: { show: false },
      yaxis: { show: false },
      xaxis: {
        categories: data.map((item) =>
          new Date(item.startDate).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
          }),
        ),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: '#64748b', fontSize: '12px' } },
      },
      // This state config ensures unselected bars fade out automatically
      states: {
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
          },
        },
      },
    };
  }

  setTimeframe(tf: string): void {
    this.activeTimeframe = tf;
    const searchId = this.route.parent?.snapshot.paramMap.get('id');

    this.appSer.getDeliveryVolumePercentage(searchId!, tf).subscribe({
      next: (res) => {
        if (!res || !res.data) return;
        this.rawData.set(res.data);
        this.chartInit(res.data);
      },
    });
  }
}
