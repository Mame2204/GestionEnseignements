import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-enseignements-suite',
  templateUrl: './enseignements-suite.component.html',
  styleUrls: ['./enseignements-suite.component.css']
})
export class EnseignementsSuiteComponent implements OnInit {
  public UE_Choisi:any;
    @Input() ue:any;
  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.UE_Choisi = params['par1'];
    });
    }

  ngOnInit(): void {
        this.http.get('http://localhost:8888/searchUEs2/'+this.UE_Choisi).subscribe(
          value => {
          if(Object.keys(value).length==0)
            //this.router.navigate(['/connexion']);
            console.log(value);
          else {
            this.ue=value;
            //this.refresh();
          }
      },
      error => console.log(error),);

      }

}
