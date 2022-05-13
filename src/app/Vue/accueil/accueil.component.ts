import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public currentUser: any;
  public allUser:any;
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get('http://localhost:8888/search').subscribe(
      value => {
      if(Object.keys(value).length==0)
        this.router.navigate(['/connexion']);
      else {
        this.currentUser=value;
        //this.reloadComponent();
        //this.refresh();
      }
  },
  error => console.log(error),);

  }

  refresh(){
    window.location.reload();
  }



  onGestComptesClicked() {
    this.http.get('http://localhost:8888/gestComptes').subscribe(
        //value => {this.router.navigate(['/accueil']);}
        value => {
          console.log("TEST"+JSON.stringify(value));
          if(Object.keys(value).length==0)
          this.router.navigate(['/connexion']);
          else
            this.allUser=value;
            //this.router.navigate(['/accueil']);
          }
      ,
      error => console.log(error),

     );
  }

  removeUser(id:string) {
    console.log("c'est mon ID"+id);
    this.http.delete('http://localhost:8888/user/'+id).subscribe(
      value => (this.onGestComptesClicked())
      )

  }

}

