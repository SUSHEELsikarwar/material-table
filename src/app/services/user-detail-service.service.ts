import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {uniqBy} from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://online-directory-test.herokuapp.com/users';
  favouriteData= [];

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getColumnDefs (): any[] {
    return [
      {
        name: 'First Name',
        field: 'first_name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Last Name',
        field: 'last_name',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Email',
        field: 'email',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Phone',
        field: 'phone_number',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Company',
        field: 'company_name',
        position: 'right',
        isSortable: true
      },
      {
        name: ' ',
        field: 'action',
        position: 'right',
        isSortable: false,
        isAction: true
      },
    ];
  }

  getFavourites() {
    console.log("get fav", this.favouriteData);
    return this.favouriteData;

  }

  setFavourites(favouriteData, emptyFirst?: boolean){
    if (emptyFirst) {
      this.favouriteData = [];
    }
    this.favouriteData = uniqBy([...this.favouriteData,...[favouriteData]], 'id');
    console.log("favourite set", this.favouriteData);
  }

  deleteFavourite(rowData): any[] {
    console.log(this.favouriteData.filter((item) => item.id !== rowData.id), "deleted after");
    this.favouriteData =this.favouriteData.filter((item) => item.id !== rowData.id);
    return this.favouriteData;
  }
}
