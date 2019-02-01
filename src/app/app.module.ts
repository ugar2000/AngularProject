import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestangularModule, Restangular } from 'ngx-restangular';
import {HttpClientModule} from '@angular/common/http';
import { MaterialAppModule } from './ngmaterial.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('');
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    MaterialAppModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }