import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import {SnmpData} from './snmp-data';
import {sha1} from "@angular/compiler/src/i18n/digest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'SNMP-tester';
  out: string;

  snmpData: SnmpData = new SnmpData;
  done: boolean = false;
  showOut() {
  console.log('from app.component');
}
  constructor(private httpService: HttpService){}
  submit(snmpData){
    this.httpService.postData(snmpData)
      .subscribe((data) => {this.out = data.text; console.log(data.text);this.done = true;});
  }

}
