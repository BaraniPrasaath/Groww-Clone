import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../core/services/app/app-services';
import { GlobalMarketResponse } from '../../../../../../models/GlobalMarketResponse';
import { forkJoin } from 'rxjs';

interface IndexRow {
  name: string;
  logoUrl: string;
  timestamp: string;
  lastTraded: string;
  dayChange: string;
  dayChangePercent: string;
  isPositive: boolean;
  high: string;
  low: string;
  open: string;
  prevClose: string;
}

@Component({
  selector: 'app-globe-indices',
  imports: [CommonModule],
  templateUrl: './globe-indices.html',
  styleUrl: './globe-indices.css',
})
export class GlobeIndices implements OnInit {
  indianTab = signal(true);
  globeUrl = 'https://miro.medium.com/v2/resize:fit:1200/0*-RA1J_MNRRR484So.png';
  indianUrl =
    'https://www.maps-of-india.com/wp-content/uploads/2016/03/india-location-world-map.jpg';
  logoUrl = 'https://assets-netstorage.groww.in/stock-assets/logos/GIFTNIFTYFLAG.png';
  worldMapUrl = signal(this.indianUrl);

  indianIndices = signal<IndexRow[]>([]);

  globalIndices = signal<IndexRow[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.globalIndices());
    });
  }

  ngOnInit(): void {
    this.loadIndianIndices();

    this.appSer.getGlobeIndices().subscribe({
      next: (res: GlobalMarketResponse) => {
        res.aggregatedGlobalInstrumentDto.forEach((item) => {
          const markets: IndexRow = {
            name: item.instrumentDetailDto.name,
            logoUrl: item.instrumentDetailDto.logoUrl,
            timestamp: new Date(item.livePriceDto.tsInMillis * 1000).toLocaleString(),
            lastTraded: item.livePriceDto.value.toFixed(2),
            dayChange: item.livePriceDto.dayChange.toFixed(2),
            dayChangePercent:
              '(' +
              (item.livePriceDto.dayChange > 0
                ? item.livePriceDto.dayChangePerc.toFixed(2)
                : (item.livePriceDto.dayChangePerc * -1).toFixed(2)) +
              '%)',
            isPositive: item.livePriceDto.dayChange > 0,
            high: item.livePriceDto.high.toFixed(2),
            low: item.livePriceDto.low.toFixed(2),
            open: item.livePriceDto.open.toFixed(2),
            prevClose: item.livePriceDto.close.toFixed(2),
          };
          this.globalIndices.update((d) => [...d, markets]);
        });
      },
    });
  }

  private loadIndianIndices() {
    forkJoin({
      meta: this.appSer.getIndianIndicesMeta(),
      live: this.appSer.getIndianIndicesLive(),
    }).subscribe({
      next: ({ meta, live }) => {
        const liveMap = {
          ...live.exchangeAggRespMap.NSE.indexLivePointsMap,
          ...live.exchangeAggRespMap.BSE.indexLivePointsMap,
        };

        const indices: IndexRow[] = meta.allAssets
          .map((asset: any) => {
            const key =
              asset.header.isin || asset.header.nseScriptCode || asset.header.bseScriptCode;

            const liveData = liveMap[key];

            if (!liveData) return null;

            return {
              name: asset.header.displayName,
              logoUrl: asset.header.logoUrl,
              timestamp: new Date(liveData.tsInMillis * 1000).toLocaleString(),

              lastTraded: liveData.value.toFixed(2),

              dayChange: liveData.dayChange.toFixed(2),

              dayChangePercent: '(' + Math.abs(liveData.dayChangePerc).toFixed(2) + '%)',

              isPositive: liveData.dayChange >= 0,

              high: liveData.high.toFixed(2),
              low: liveData.low.toFixed(2),
              open: liveData.open.toFixed(2),
              prevClose: liveData.close.toFixed(2),
            };
          })
          .filter(Boolean) as IndexRow[];

        this.indianIndices.set(indices);
      },
    });
  }

  activeTab() {
    this.indianTab.update((d) => !d);
    this.indianTab()
      ? this.worldMapUrl.update(() => this.indianUrl)
      : this.worldMapUrl.update(() => this.globeUrl);
  }

  get currentData(): IndexRow[] {
    return this.indianTab() ? this.indianIndices() : this.globalIndices();
  }
}
