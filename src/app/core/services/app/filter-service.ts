import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopMoversResponse } from '../../../../models/TopMoversResponse';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private http = inject(HttpClient);

  getTopMovers(index: string, moverType: string) {
    return this.http.get<TopMoversResponse>(
      'https://groww.in/bff/web/stocks/explore/web-pages/top_movers',
      {
        params: {
          indice: index,
          moverType,
          pageSize: 100,
        },
      },
    );
  }
}
