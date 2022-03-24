import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";
import { ProjectFormComponent } from "./component/project-form/project-form.component";
import { ProjectListComponent } from "./component/project-list/project-list.component";
import { ProjectDashboardComponent } from "./pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail.component";
import { ProjectRoutingModule } from "./project-routing.module";
import { ProjectComponent } from './pages/project.component';



@NgModule({
  declarations:[
    ProjectComponent,
    ProjectDashboardComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectFormComponent,
    ProjectComponent,
  ],
  imports:[
    ProjectRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,

  ]
})
export class ProjectModule {}
