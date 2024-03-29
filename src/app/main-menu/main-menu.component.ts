import { Component } from "@angular/core";
import { programsRoutes } from "../programms/programs-routes";
import { fideboxRoutes } from "../fidebox/fidebox-routes";

@Component({
  selector: "main-menu",
  template: `
    <ul class="nav nav-pills nav-stacked">
        <li [routerLink]="programRoutes.moduleRoot.path" routerLinkActive="active">
          <a href="javascript:void(0)">
            <span class="glyphicon glyphicon-list"></span> {{"main-menu.menu.programs" | translate}}</a>
        </li>
        <li [routerLink]=[fideboxRoutes.moduleRoot.path] routerLinkActive="active">
          <a [href]="'/#/' + fideboxRoutes.moduleRoot.path">
            <span class="glyphicon glyphicon-off"></span>  {{"main-menu.menu.fidebox" | translate}}</a>
        </li>
    </ul>
  `
})
export class MainMenuComponent {
  private programRoutes;
  private fideboxRoutes;

  constructor(){
    this.programRoutes = programsRoutes;
    this.fideboxRoutes = fideboxRoutes;
  }
}
