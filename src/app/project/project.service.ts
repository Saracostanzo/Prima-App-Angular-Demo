import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects:Project[] = [
    {
      id: 1,
      code: "NHusYJl",
      name: "Progetto Alpha",
      description: "Lorem ipsum dolor sit amet.",
      start: new Date(2019,10,20),
      end: new Date (2019,10,25),
      priority: "medium",
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: "SJieYKl",
      name: "Progetto Beta",
      description: "Lorem ipsum dolor sit amet.",
      start:new Date (2019,4,10),
      end: new Date (2019,5,13),
      priority: "low",
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: "POjeGBs",
      name: "Progetto Gamma",
      description: "Lorem ipsum dolor sit amet.",
      start: new Date (2019,2,7),
      priority: "low",
      done: false,
      tasks: []
    },
  ];
  constructor() { }
  getAll():Project[]{
    return this.projects;
  }
  add(project:Project):void{
    this.projects.push({
      ...project,
    id:this.projects.length,
    code: Math.random().toString(36).replace("0"," ").substring(2,9),
    done:false,
    tasks:[],
  });
  }
  get(id:Number):Project{
    return this.projects.find(project=>project.id===id) as Project;
  }
}
