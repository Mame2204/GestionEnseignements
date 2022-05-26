import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SelectControlValueAccessor } from '@angular/forms';
//import { Console } from 'console';
//import { Url } from 'url';

@Component({
  selector: 'app-inscription',
  templateUrl: '././inscription.component.html',
  styleUrls: ['././inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void{
  }

  onSignupButtonClicked(nom: string, prenom: string, statut: string, heureMin: string, nbHeureDechargeable: string, email: string, password: string) {
      this.router.navigate(['/connexion']);
      this.http.get('http://localhost:8888/insertUser?nom='+nom+'&prenom='+prenom+'&statut='+statut+'&heureMin='+heureMin+'&nbHeureDechargeable='+nbHeureDechargeable+'&email='+email+'&Mdp='+password).subscribe(
        value => console.log(JSON.stringify(value)),
        error => console.log(error)
       );
  }

}
