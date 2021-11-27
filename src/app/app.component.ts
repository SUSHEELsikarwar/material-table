import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-material-table";
  private path: string = '../../assets/icons';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {
    this.matIconRegistry
    .addSvgIcon("home", this.setPath(`${this.path}/Home Icon.svg`))
    .addSvgIcon("add", this.setPath(`${this.path}/Favourites Icon.svg`))
    .addSvgIcon("starfilled", this.setPath(`${this.path}/Star Outlined.svg`))
    .addSvgIcon("star", this.setPath(`${this.path}/Star Filled.svg`))
    .addSvgIcon("back", this.setPath(`${this.path}/Back.svg`))
   }
   private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
   }
}
