import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { programsRoutes } from "./programs-routes";
import { AllProgramsComponent } from "./all-programs.component";
import { SharedModule } from "../shared/shared.module";
import { ProgramService } from "./programm.service";
import { EditProgramComponent } from "./edit-program.component";

@NgModule({
  declarations: [
    AllProgramsComponent,
    EditProgramComponent
  ],
  providers: [
    ProgramService
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild([programsRoutes.moduleRoot]),
    SharedModule
  ]
})
export class ProgramModule {}
