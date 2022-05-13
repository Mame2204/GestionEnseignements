import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionEnseignements';
  constructor(private authService: AuthService) {
    //this.authService.handleLoginCallback();
  }
  saveData() {
    sessionStorage.setItem('id', 'Rana Hasnain'); //passer id au parent app.component
}
getData(){
  return sessionStorage.getItem('id');
}
}
