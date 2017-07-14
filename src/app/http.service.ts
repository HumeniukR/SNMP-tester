import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {SnmpData} from "./snmp-data";
import {Observable} from "rxjs/Observable";
import  {Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(private  http: Http) { }

  postData(obj: SnmpData){
    const body = JSON.stringify(obj);

    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    console.log(body)
    return this.http.post('http://localhost:3000/api/agent/', body, { headers: headers })
      .map((resp:Response) => resp.json())
      .catch((error:any) =>{return Observable.throw(error);});
  }
}
