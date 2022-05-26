import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-recapitulatif-vue-admin',
  templateUrl: './recapitulatif-vue-admin.component.html',
  styleUrls: ['./recapitulatif-vue-admin.component.css']
})
export class RecapitulatifVueAdminComponent implements OnInit {


  //public currentUserConnect:any;
  @Input() service:any;
  public id:any;

    constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.id = params['par1'];
    });
    }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/searchUEs/'+this.id).subscribe(
        value => {
        if(Object.keys(value).length==0)
          this.router.navigate(['/connexion']);
        else {
          this.service=value;
          //this.reloadComponent();
          //this.refresh();
        }
    },
    error => console.log(error),);
  }

}
