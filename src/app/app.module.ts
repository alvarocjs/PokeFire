import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PokeApiService } from './services/poke-api.service';
import { HttpClientModule } from '@angular/common/http';

import {HTTP} from '@ionic-native/http/ngx';

import {Camera} from '@ionic-native/camera/ngx';
import {PipesModule} from './pipes/pipes.module';

import { FirebaseX } from '@ionic-native/firebase-x/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, PokeApiService, HTTP, Camera, PipesModule, FirebaseX
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
