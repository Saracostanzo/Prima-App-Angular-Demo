import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./modules/dashboard/pages/home/home.component";
import { ProjectDashboardComponent } from "./modules/project/pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from "./modules/project/pages/project-detail/project-detail.component";

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'projects',
      loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule),
    },
    { path: '**',   redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
