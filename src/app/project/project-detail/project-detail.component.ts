import { Component, Input , OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Project } from '@app/models/Project';
import { Observable, switchMap } from 'rxjs';
import { ProjectService } from '../project.service';

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
