import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { Project } from '@app/models/Project';
import { LogService } from '@app/shared/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    },
  ];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  public projects$ = this.projectsSubject.asObservable();

  constructor(private logService: LogService, private http: HttpClient) { }

  getAll() {
    return this.http.get<Project[]>(`http://localhost:3000/projects`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient GetAll')),
      catchError(this.handleError)
    );
  }

  add(project: Project) {
    return this.http.post<Project>(`http://localhost:3000/projects`, project).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient Add')),
      catchError(this.handleError)
    );
  }

  get(id: number) {
    return this.http.get<Project>(`http://localhost:3000/projects/${id}`).pipe(
      retry(3),
      tap(() => this.logService.log('HttpClient Get')),
      catchError(this.handleError)
    );
  }


 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};
}
