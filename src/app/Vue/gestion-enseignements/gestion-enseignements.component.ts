import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-gestion-enseignements',
  templateUrl: './gestion-enseignements.component.html',
  styleUrls: ['./gestion-enseignements.component.css']
})
export class GestionEnseignementsComponent implements OnInit {

  public allUser: any;
  public allEnseignements: any;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/gestComptes', {
      withCredentials: true}).subscribe(
        value => {
          if(Object.keys(value).length==0)
          this.router.navigate(['/connexion']);
          else
            this.allUser=value;
          }
      ,
      error => console.log(error),

     );
  }

  detailsUE(id: string) {
        this.http.get('http://localhost:8888/searchUEs/'+id).subscribe(
          value => {
          this.allEnseignements=value;
          },
          error => console.log(error),
         );
    }

    //ajoutEnseignementsEnseignantUE(id:string) {
    //}

}
