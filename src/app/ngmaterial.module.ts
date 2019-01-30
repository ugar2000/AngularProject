import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
imports: [MatButtonModule, CommonModule, BrowserAnimationsModule, MatFormFieldModule],
exports: [MatButtonModule, CommonModule, BrowserAnimationsModule, MatFormFieldModule]
})
export class MaterialAppModule { }