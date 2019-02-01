import { Component, ViewChild, OnInit } from '@angular/core';
import { calc } from './services/calc.service';
import { first } from 'rxjs/operators';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  inputdata: string;
  title = 'itsNewProject';
  status = 'ONLINE';
  isConnected = true;




  @ViewChild('inputdata') _inputdata;
  constructor(private cAlc: calc, private connectionService: ConnectionService) {}
   
  
  ngOnInit(){
      this.connectionService.monitor().subscribe(isConnected => {
        this.isConnected = isConnected;
        if (this.isConnected) {
          this.status = "ONLINE";
        }
        else {
          this.status = "OFFLINE";
        }})
    }

  addItem(inputdata) {
    this.inputdata = inputdata;
    let s: string;
    for (let i = 0; i < this.inputdata.length; i++) {
      if (this.inputdata[i] === "+") {
        s = this.inputdata;
        this.inputdata = s.slice(0, i) + "P" + s.slice(i + 1);
      }
      if (this.inputdata[i] === "^") {
        s = this.inputdata;
        this.inputdata = s.slice(0, i) + "S" + s.slice(i + 1);
      }
    }
    this.cAlc.postcalculate(this.inputdata).pipe(first()).subscribe(resp => {
      console.log(resp.result);
      this._inputdata.nativeElement.value = resp.result;
    },
    error => {
      console.log(error);
    });

    
  }

  addNumberToLine(value) {
    if(!this._inputdata.nativeElement.value) {
      this._inputdata.nativeElement.value = '';
    }
    this._inputdata.nativeElement.value += value;
  }


  clear(){

    this._inputdata.nativeElement.value = ''

  }


}
