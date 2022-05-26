import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-enseignements-par-enseignant-vue-admin',
  templateUrl: './enseignements-par-enseignant-vue-admin.component.html',
  styleUrls: ['./enseignements-par-enseignant-vue-admin.component.css']
})

export class EnseignementsParEnseignantVueAdminComponent implements OnInit {

  public id:any;
  @Input() service:any;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['par1'];
    });
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/searchUES/'+this.id).subscribe(
      value => {
        this.service=value;
      },
      error => console.log(error),
    );
  }

  removeUE(Ref:string) {
    console.log("Suppresion de "+Ref)
    console.log("USER "+this.id);
    this.http.get('http://localhost:8888/ueDeleteAdmin?user='+this.id+'&ue='+Ref).subscribe(() => console.log("Suppresion OK"));
    this.refresh();
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
