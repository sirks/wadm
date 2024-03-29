import { NgModule, ModuleWithProviders } from "@angular/core";
import { TranslateModule } from "ng2-translate/ng2-translate";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { AppState } from "./app.state";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
  declarations: [

  ],
  exports: [ TranslateModule ],
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ AppState, AuthGuard ]
    };
  }
}
