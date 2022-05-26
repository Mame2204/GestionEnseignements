import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //@Input() globlaString:any;
  public globlaString:any;
  public allpeople:any;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/search').subscribe(
      value => {
        if(Object.keys(value).length==0){
                this.allpeople=true;
                //this.refresh();
                }
              else {
                this.globlaString=value;
                //this.refresh();
              }
  },
  error => console.log(error),);

  }

  deconnexion(){
    this.http.get('http://localhost:8888/deconnexion').subscribe(
          value => {
      },
      error => console.log(error),);
    this.globlaString="";
    //this.refresh();
  }

  reloadComponent(){
    this.ngOnInit();
  }

  refresh(){
    window.location.reload();
  }


}
