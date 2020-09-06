import { User } from './services/user.model';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TangledFables';
  
  constructor(public auth: AuthService) {

  };

  signIn(){
    this.auth.googleSignIn();
    
    if(this.auth.user$){

    }
}

}
