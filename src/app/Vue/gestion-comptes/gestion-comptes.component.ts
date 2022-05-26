import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-gestion-comptes',
  templateUrl: './gestion-comptes.component.html',
  styleUrls: ['./gestion-comptes.component.css']
})
export class GestionComptesComponent implements OnInit {
public currentUser: any;
@Input() allUser:any;
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

  removeUser(id:string) {
    console.log("Suppresion de "+id)
    this.http.get('http://localhost:8888/userDelete/'+id).subscribe(() => console.log("Suppresion OK"));
    //console.log("Suppresion de "+id)
    this.reloadComponent();

  }

 reloadComponent(){
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

  refresh(){
    window.location.reload();
  }

  trouveUser(id:string) {
    this.http.get('http://localhost:8888/search/'+id).subscribe(
      value => {
      if(Object.keys(value).length==0)
        this.router.navigate(['/connexion']);
      else {
        this.currentUser=value;
        this.refresh();
      }
  },
  error => console.log(error),);

  }


}
