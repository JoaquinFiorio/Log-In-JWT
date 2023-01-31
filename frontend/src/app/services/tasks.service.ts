import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http : HttpClient) { }

  private URL = 'http://localhost:5000/api'

getTask(){
  return this.http.get<any>(this.URL + "/task");
}

getPrivateTask(){
  return this.http.get<any>(this.URL + "/private-task");
}

}
