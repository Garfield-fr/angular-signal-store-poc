import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { OpenLibraryStore } from './store/open-library.store';
import { Search } from './search';
import { Book } from './book';
import { Divider } from 'primeng/divider';
import { PaginatorComponent, PaginatorConfig } from '../../shared/component/paginator';
import { deepComputed } from '@ngrx/signals';

@Component({
  selector: 'app-books',
  imports: [Search, Book, Divider, PaginatorComponent],
  templateUrl: './books.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Books implements OnDestroy {
  protected store = inject(OpenLibraryStore);

  protected paginatorConfig: Signal<PaginatorConfig> = deepComputed(() => ({
    first: this.store.pager.firstRecord(),
    rows: this.store.pager.rows(),
    total: this.store.total()
  }));

  ngOnDestroy(): void {
    this.store.reset();
  }
}
