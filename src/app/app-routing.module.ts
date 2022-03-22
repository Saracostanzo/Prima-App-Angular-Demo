import { NgModule } from "@angular/core";
import{Routes , RouterModule}from "@angular/router";
import { HomeComponent } from "./dashboard/home/home.component";
import { ProjectContainerComponent } from "./project/project-container/project-component.container";
import { ProjectDetailComponent } from "./project/project-detail/project-detail.component";

const routers: Routes=[
  {path:"project/detail/:id", component: ProjectDetailComponent},
  {path:"home", component: HomeComponent },
  { path:"projects", component: ProjectContainerComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home"}
];
@NgModule({
imports:[
  RouterModule.forRoot(routers)
],
exports:[RouterModule]
})
 export class AppRoutingModule{}
