import { Component, OnInit, ViewChild } from "@angular/core";
import { UserDetailService } from "../services/user-detail-service.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"],
})
export class DataTableComponent implements OnInit {
  displayedColumns;

    constructor(private userDetailService: UserDetailService) {

    }
  ngOnInit() {
    this.getColumnDefs();
  }


  getColumnDefs () {
    this.displayedColumns = this.userDetailService.getColumnDefs();
  }

  onRowClicked(row) {
    console.log("Row clicked: ", row);
  }


}
