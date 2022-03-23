import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@app/models/Project';
import { LogService } from '@app/services/log.service';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private HttpClient: HttpClient, private logService: LogService) { }

   getAll(): Observable<Project[]>{
    return this.HttpClient.get<Project[]>("http://localhost:3000/projects").pipe(
    tap((data) => this.logService.log(`getAll Eseguito, ${data}`)),
    retry(3),
    catchError(this.handleError)
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
      tap((data) => this.logService.log(`Add Eseguito, ${data}`)),
      retry(3),
      catchError(this.handleError)
    );

  }


  get(id:number):Observable <Project>{
    return this.HttpClient.get<Project>(`http://localhost:3000/projects/${id}`).pipe(
      tap((data)=>this.logService.log(`Get Eseguito, ${data}`)),
      retry(3),
      catchError(this.handleError)
    );
    }


  private handleError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error("An error occured:", error.error.message);
  }else{
    console.error(
      `backend returned code ${error.status}` +
      `body was : ${error.error}`
      )
  }
  return throwError('something bad happened; Please retry again later')
};
  }
