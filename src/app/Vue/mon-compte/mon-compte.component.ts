import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  public user: any;
  //public currentUser: any;
  @Input() currentUser:any;
  public currentUserConnect:any;
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


  trouveUser(id:string) {
    this.http.get('http://localhost:8888/search/'+id).subscribe(
      value => {
      if(Object.keys(value).length==0)
        this.router.navigate(['/connexion']);
      else {
        console.log(value);
        this.currentUser=value;
        this.reloadComponent();
      }
  },
  error => console.log(error),);

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

}
