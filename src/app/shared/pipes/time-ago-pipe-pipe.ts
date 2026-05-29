import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgoPipe',
})
export class TimeAgoPipePipe implements PipeTransform {
  transform(value: string): string {
    const diffInMinutes = Math.floor((new Date().getTime() - new Date(value).getTime()) / (1000 * 60));
    return diffInMinutes < 60 ? `${diffInMinutes} min ago` : `${Math.floor(diffInMinutes / 60)} hours ago`;
  }
}
