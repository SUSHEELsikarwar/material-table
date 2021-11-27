import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TableColumn} from "./TableColumn";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserDetailService} from '../services/user-detail-service.service'
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('fadeInUpButton', [
      transition('void => *', [
        style({ opacity: 1, transform: 'translateY(-30%)' }),
        animate("250ms ease-in"),
      ]),
    ]),
  ],
})
export class TableComponent implements OnInit, AfterViewInit {

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @ViewChild(MatPaginator, {static: false}) matPaginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) matSort: MatSort;

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[];
  @Input() rowActionIcon: string;
  @Input() paginationSizes: number[] = [15,30,45,100];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Input() isClientSideData;

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  public config = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
    maxSize: 5
  };

  p ;
  pageIndex = 0;
  orders;
  subscription;
  isFirstTimeLoading = true;
  isFavouriteState = false

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    console.log("tableData",data);
    this.setTableDataSource(data);
  }

  constructor(private userDetaiilService: UserDetailService, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute);
    this.isFavouriteState= this.activatedRoute.snapshot.data?.isFavourite;
  }

  ngOnInit(): void {
    console.log(this.tableColumns);
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...columnNames]
    } else {
      this.displayedColumns = columnNames;
    }

    if (!this.isClientSideData) {
      this.getData();
    }
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
  }


  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
    console.log(this.tableDataSource);
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    sortParameters.active = this.tableColumns.find(column => column.name === sortParameters.active).field;
    console.log(sortParameters);
    this.tableDataSource.sortData(this.tableDataSource.filteredData, sortParameters as any);
    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }

  getData () {
  this.isFirstTimeLoading = true;
  this.subscription = this.userDetaiilService.getConfig()
    .subscribe((data:any)  => {
      setTimeout(() => {
        this.tableData = data;
        this.isFirstTimeLoading = false;
      }, 800);
    });
  }

  markFavourite(rowData) {
    if (this.isClientSideData && rowData.isFavourite) {
        this.tableData = this.userDetaiilService.deleteFavourite(rowData);
        return
    }
    rowData.isFavourite = !rowData.isFavourite;
    this.userDetaiilService.setFavourites(rowData);
    console.log("favourite", rowData);
  }


  ngOnDestroy () {
    this.subscription?.unsubscribe();
  }

}
