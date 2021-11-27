import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../services/user-detail-service.service';

@Component({
  selector: 'app-bookmark-favourite',
  templateUrl: './bookmark-favourite.component.html',
  styleUrls: ['./bookmark-favourite.component.css']
})
export class BookmarkFavouriteComponent implements OnInit {

  displayedColumns;
  tableData;
  constructor(private userDetailService: UserDetailService) {
    this.getFavouriteData();
  }

  ngOnInit(): void {
    this.getColumnDefs();
  }



  getColumnDefs () {
    this.displayedColumns = this.userDetailService.getColumnDefs();
  }

  getFavouriteData () {
    this.tableData = this.userDetailService.getFavourites();
  }

}
