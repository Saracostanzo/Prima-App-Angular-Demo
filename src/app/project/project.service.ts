import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/log.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private HttpClient: HttpClient, private logService: LogService) { }

   getAll(): Observable<Project[]>{
    return this.HttpClient.get<Project[]>("http://localhost:3000/projects").pipe(
    tap((data) => this.logService.log(`getAll Eseguito, ${data}`))
    );
  }


  add(project:Project):Observable <Project>{
    const projectToAdd={
      ...project,
      code: Math.random().toString(36).replace("0"," ").substring(2,9),
      done:false,
      tasks:[],
    }
    return this.HttpClient.post<Project>("http://localhost:3000/projects" , projectToAdd)
    .pipe(
      tap((data) => this.logService.log(`Add Eseguito, ${data}`))
    );
  }


  get(id:Number):Observable <Project>{
    return this.HttpClient.get<Project>(`http://localhost:3000/projects , ${id}`).pipe(
      tap((data)=>this.logService.log(`Get Eseguito, ${data}`))
    )
    }

  }
