import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@app/models/Project';
import { ProjectService } from '@app/services/project.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngprj-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit{

projects$!:Observable<Project[]>;

  constructor(private projectService :ProjectService , private router: Router) { }
  ngOnInit(): void {
   this.projects$ = this.projectService.getAll();
  }
   selectProject(project:Project){
    this.router.navigate(["/project","detail", project.id])
  }
  submitProjectForm(project:Project){
  this.projectService.add(project).subscribe(data=>
    this.projects$=this.projectService.getAll())
  }

}
