import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable({
    providedIn: 'root'
  })

  export class calc{
  constructor(public restangular: Restangular) {}


  postcalculate(inputdata) {
    return this.restangular.one('TestSpring/MyServlet2').post(undefined, undefined, {"inputdata" : inputdata});
    //return this.restangular.one('TestSpring/MyServlet2').get({"inputdata" : inputdata});
  } 
}