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

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/search').subscribe(
      value => { 
        
        this.globlaString=value;
        //this.globlaString;
        console.log(this.globlaString);
        
        //this.reloadComponent(); 
        //this.refresh();
  },
  error => console.log(error),);
  //this.refresh();
  }

  reloadComponent(){  
    this.ngOnInit();
  }

  refresh(){
    window.location.reload();
  }


}
