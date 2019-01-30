import { Component, ViewChild } from '@angular/core';
import { calc } from './services/calc.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputdata: string;
  title = 'itsNewProject';


  @ViewChild('inputdata') _inputdata;
  constructor(private cAlc: calc) { }



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
