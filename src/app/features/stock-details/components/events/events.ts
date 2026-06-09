import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServices } from '../../../../core/services/app/app-services';

interface EventItem {
  year: number;
  day: string;
  month: string;
  title: string;
  subtitle: string;
  actionText?: string;
  detailValue?: string;
  detailDesc?: string;
  hasDropdown: boolean;
  dateObj: Date;
}

interface YearGroup {
  year: number;
  items: EventItem[];
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrls: ['./events.css'],
})
export class Events implements OnInit {
  // Store all parsed events
  rawEvents = signal<EventItem[]>([]);

  // Toggle state for View More / View Less
  showAll = signal<boolean>(false);

  // Default number of items to show when collapsed
  readonly INITIAL_LIMIT = 3;

  // Computed signal to handle sorting, limiting, and grouping by year automatically
  groupedEvents = computed(() => {
    const all = this.rawEvents();
    const limit = this.showAll() ? all.length : this.INITIAL_LIMIT;
    const visibleEvents = all.slice(0, limit);

    const groups: YearGroup[] = [];
    visibleEvents.forEach((item) => {
      let group = groups.find((g) => g.year === item.year);
      if (!group) {
        group = { year: item.year, items: [] };
        groups.push(group);
      }
      group.items.push(item);
    });

    return groups;
  });

  constructor(
    private appSer: AppServices,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const searchId = this.route.parent?.snapshot.paramMap.get('id');
    if (!searchId) return;

    this.appSer.getCompanyDetails(searchId).subscribe((res: any) => {
      const gsin = res.header.growwCompanyId;
      this.appSer.getEvents(gsin).subscribe({
        next: (response: any) => {
          this.processEvents(response.events);
        },
      });
    });
  }

  private processEvents(events: any[]): void {
    const parsed: EventItem[] = events.map((e) => {
      const d = new Date(e.primaryDate);
      return {
        dateObj: d,
        year: d.getFullYear(),
        day: d.getDate().toString(),
        month: d.toLocaleString('default', { month: 'short' }),
        // Map "Rights" to "Rights Entitlement" to match UI design
        title: e.eventTitle === 'Rights' ? 'Rights Entitlement' : e.eventTitle,
        subtitle: e.eventType,
        actionText: e.corporateEventFilter === 'RESULTS' ? 'Check latest financial' : undefined,
        detailValue: e.eventDetail?.value,
        detailDesc: e.eventDetail?.description,
        hasDropdown: !!e.eventDetail,
      };
    });

    // Sort chronologically descending (newest dates first)
    parsed.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
    this.rawEvents.set(parsed);
  }

  toggleView(): void {
    this.showAll.set(!this.showAll());
  }
}
