import { Component, input, output } from '@angular/core';
import { Paginator, PaginatorState } from 'primeng/paginator';

export type PaginatorConfig = {
  first: number;
  rows: number;
  total: number;
}

@Component({
  selector: 'shared-paginator',
  imports: [Paginator],
  template: `
    <p-paginator
      alwaysShow="false"
      [first]="paginatorState().first"
      [rows]="paginatorState().rows"
      [totalRecords]="paginatorState().total"
      [rowsPerPageOptions]="[10, 20, 50]"
      (onPageChange)="pageChange.emit($event)" />
  `
})
export class PaginatorComponent {

  paginatorState = input.required<PaginatorConfig>();

  pageChange = output<PaginatorState>();
}
