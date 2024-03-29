import { Component, OnInit } from "@angular/core";
import { TranslateService } from "ng2-translate/ng2-translate";
import { AppState } from "./shared/app.state";

@Component({
  selector: "my-app",
  template: `
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="col-md-12 text-center">
            <wheader></wheader>
          </div>
        </div>
        <main id="content" class="row-fluid">
          <div class="col-md-2">
            <main-menu *ngIf="appState.isLoggedIn"></main-menu>
          </div>
          <div class="col-md-10">
            <router-outlet></router-outlet>
          </div>
        </main>
        <div class="row-fluid">
          <div class="col-md-12 text-center">
            <wfooter></wfooter>
          </div>
        </div>
      </div>
`
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private appState: AppState) {}

  ngOnInit() {
    this.configureTranslator();
  }

  private configureTranslator() {
    this.translate.setDefaultLang("en");
    this.translate.use("en");
  }
}
