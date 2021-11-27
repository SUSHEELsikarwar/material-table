import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';

import { AppComponent } from "./app.component";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { DataTableComponent } from "./data-table/data-table.component";
import { RouterModule, Routes } from '@angular/router';
import { BookmarkFavouriteComponent } from './bookmark-favourite/bookmark-favourite.component';
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TableComponent  } from "./table/table.component";
import {  DataPropertyGetterPipe } from "./table/data-property-getter-pipe/data-property-getter.pipe";
import { MatSelectModule } from "@angular/material/select";
const appRoutes: Routes = [
  { path: '' , redirectTo:'/home',      pathMatch: 'full'},
  { path: 'home', component: DataTableComponent },

  {
    path: 'bookmark',
    component: BookmarkFavouriteComponent,
    data: {
      isFavourite: true
    }
  },
];


@NgModule({
  declarations: [AppComponent, MainNavComponent, DataTableComponent, BookmarkFavouriteComponent, TableComponent, DataPropertyGetterPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
      RouterModule.forRoot(
      appRoutes,
    ),
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule

  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
