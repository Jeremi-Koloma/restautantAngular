import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FiltrageTableDataSource, FiltrageTableItem } from './filtrage-table-datasource';

@Component({
  selector: 'app-filtrage-table',
  templateUrl: './filtrage-table.component.html',
  styleUrls: ['./filtrage-table.component.css']
})
export class FiltrageTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<FiltrageTableItem>;
  dataSource: FiltrageTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  constructor() {
    this.dataSource = new FiltrageTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
