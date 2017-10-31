import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DynamicService {

  constructor(private http: Http) {}

  getProperty() {
    return this.http
      .get('/config.json')
      .map(response => response.json());
  }
}
