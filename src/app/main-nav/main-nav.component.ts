import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { trigger, transition, style, animate, group, query } from "@angular/animations";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"],
    animations: [
      trigger('routeState', [
        transition('*<=>*', [
          style({ opacity: 0 }),
          animate('0.4s', style({ opacity: 1 }))
        ]),
      ])
  ],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
