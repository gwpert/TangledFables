import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC3kSHXJQLyASdtU1HJVCbAtzDH6v9uwYQ",
  authDomain: "tangledfables.firebaseapp.com",
  databaseURL: "https://tangledfables.firebaseio.com",
  projectId: "tangledfables",
  storageBucket: "tangledfables.appspot.com",
  messagingSenderId: "491533736911",
  appId: "1:491533736911:web:a9adb7ba8ead757ce6d0ba",
  measurementId: "G-87LQLCP4B3"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
