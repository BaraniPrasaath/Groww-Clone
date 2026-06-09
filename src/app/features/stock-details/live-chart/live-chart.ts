import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexTooltip,
} from 'ng-apexcharts';
import { Candle } from '../../../../models/ChartResponse';
import { AppServices } from '../../../core/services/app/app-services';
import { Stocks } from '../../user/orders/component/stocks/stocks';
import { StockStore } from '../../../shared/services/Store/stock-store';
import { ActivatedRoute } from '@angular/router';
import { ContainerStockDetails } from '../container-stock-details/container-stock-details';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: string[];
};

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  searchId: string;
  nseScriptCode: string;
}

@Component({
  selector: 'app-live-chart',
  imports: [CommonModule, NgApexchartsModule, ContainerStockDetails],
  templateUrl: './live-chart.html',
  styleUrl: './live-chart.css',
})
export class LiveChart implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  nseCodeScript = signal('');
  bseCodeScript = signal('');
  displayName = signal('');
  displayLogo = signal('');
  changeVal = signal(0);
  changePerc = signal('');
  isNSE = signal(true);
  chartOption = signal('NSE');

  stockData = signal<Stock>({
    name: '',
    logo: '',
    price: '',
    change: '',
    changePercent: '',
    isPositive: false,
    searchId: '',
    nseScriptCode: '',
  });

  activeTimeframe = signal('1D');
  timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y', '3Y', '5Y', 'All'];

  chartRawData = signal<Candle[]>([]);

  constructor(
    private appSer: AppServices,
    private storeSer: StockStore,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.stockData.set(this.storeSer.getStocks()!);
    const searchId = this.route.snapshot.paramMap.get('id');
    console.log('search id: ', searchId);
    this.appSer.getCompanyDetails(searchId!).subscribe({
      next: (res) => {
        this.nseCodeScript.set(res.header.nseScriptCode);
        this.bseCodeScript.set(res.header.bseScriptCode);
        console.log(`[${this.nseCodeScript()}]`);
        this.displayName.set(res.header.displayName);
        this.displayLogo.set(res.header.logoUrl);
        this.onTimeframeChange('1D');
      },
    });
  }

  // Add this method to your LiveChart class
  private getChartDataForTimeframe(tf: string) {
    const symbol = this.isNSE() ? this.nseCodeScript() : this.bseCodeScript(); // Assuming you have the script code stored

    // Define mapping for endpoints
    const endpoints: { [key: string]: string } = {
      '1D': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/daily?intervalInMinutes=1&minimal=true`,
      '1W': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/weekly?intervalInMinutes=5&minimal=true`,
      '1M': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/monthly?intervalInMinutes=30&minimal=true`,
      '3M': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/monthly/v2?months=3&minimal=true`,
      '6M': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/monthly/v2?months=6&minimal=true`,
      '1Y': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/1y?intervalInDays=1&minimal=true`,
      '3Y': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/3y?intervalInDays=3&minimal=true`,
      '5Y': `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/5y?intervalInDays=5&minimal=true`,
      All: `chart/delayed/exchange/${this.chartOption()}/segment/CASH/${symbol}/all?noOfCandles=300`,
    };

    return endpoints[tf];
  }

  // Update your click handler
  onTimeframeChange(tf: string) {
    this.activeTimeframe.set(tf);
    const path = this.getChartDataForTimeframe(tf);

    // Call your service
    this.appSer.getCustomChartData(path).subscribe({
      next: (res) => {
        this.changeVal.set(Number(res.changeValue?.toFixed(2)) || 0);
        let rawPerc = res.changePerc || 0;

        // Example: If API returns 0.0146, this turns it into 1.46
        // Remove the * 100 if your API already returns the number 1.46
        let formattedPerc = (rawPerc * 100).toFixed(2);

        this.changePerc.set(
          this.changeVal() >= 0
            ? Number(formattedPerc).toFixed(2)
            : (Number(formattedPerc) * -1).toFixed(2),
        );
        this.chartRawData.set(res.candles);
        this.initChart();
      },
    });
  }

  onOptionClick() {
    this.isNSE.set(!this.isNSE());
    this.isNSE() ? this.chartOption.set('NSE') : this.chartOption.set('BSE');
    console.log(this.chartOption());
    this.onTimeframeChange(this.activeTimeframe());
  }

  private initChart(): void {
    // Convert epoch seconds to milliseconds for ApexCharts datetime formatting
    const formattedData = this.chartRawData().map((item) => [item[0] * 1000, item[1]]);

    this.chartOptions = {
      series: [
        {
          name: 'Price',
          data: formattedData,
        },
      ],
      chart: {
        type: 'area',
        height: 380,
        fontFamily: 'inherit',
        toolbar: { show: false }, // Hide the download/zoom toolbar to match design
        zoom: { enabled: false },
        defaultLocale: 'en',
        animations: { enabled: false },
      },
      colors: [this.changeVal() >= 0 ? '#00b074' : '#ED5533'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight', // "straight" matches Lightweight Charts default look
        width: 2,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.0,
          stops: [0, 100],
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          show: false,
          datetimeUTC: false, // CRITICAL: This ensures it uses local browser time (IST)
        },
        tooltip: { enabled: false },
      },
      yaxis: {
        show: false, // Hide y-axis labels entirely
      },
      grid: {
        show: true,
        borderColor: '#e2e8f0',
        strokeDashArray: 4, // Dashed lines
        xaxis: {
          lines: { show: false }, // Only show horizontal grid lines
        },
        yaxis: {
          lines: { show: true },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      tooltip: {
        theme: 'light',
        x: {
          // This ensures the tooltip matches IST format
          format: 'dd MMM yyyy, hh:mm TT',
        },
      },
    };
  }
}
