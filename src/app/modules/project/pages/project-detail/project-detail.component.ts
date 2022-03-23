import { Component, Input , OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { ProjectService } from '@app/services/project.service';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project$!:Observable<Project>;

  constructor(private activatedRoute:ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.project$= this.activatedRoute.paramMap.pipe(
      switchMap((params:ParamMap)=>this.projectService.get(+params.get("id")!))
    )

  }

}
