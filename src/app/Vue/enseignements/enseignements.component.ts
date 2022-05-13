import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-enseignements',
  templateUrl: './enseignements.component.html',
  styleUrls: ['./enseignements.component.css']
})
export class EnseignementsComponent implements OnInit {
  public id:any;
  public newVal:any;
  public ValueName: string="";
  public UEName: string="";
  public selectedObj:any;
  @Input() allUEs:any; //= {
    @Input() Formations:any;

    titleF = "Formations";
  formations = [
    { id: 1, name: "Licence" },
    { id: 2, name: "Master Info" },
    { id: 3, name: "Master Miage" }
  ];
  // selected = [{ id: 1, name: "Licence" }];

    

    public selectedValueObj(name: any) {
      this.ValueName = (name.srcElement || name.target).value;
      for (let i = 0; i < this.formations.length; i++) {
        if (this.formations[i].name == this.ValueName) {
          this.selectedObj = this.formations[i];
          //console.log("Contenu choix "+this.selectedObj);
        }
      }
      this.http.get('http://localhost:8888/listUEs/'+this.ValueName).subscribe(
        value => {
          console.log("Test valueName" +this.ValueName);
          console.log(JSON.stringify(value));
          //if(Object.keys(value).length==0)
          this.router.navigate(['/enseignements']);
          //else 
            this.allUEs=value;
          }
      ,
      error => console.log(error),
      
     );
    }

    

  


  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['par1'];
    });
  }

  ngOnInit(): void {
    //console.log("TEST "+this.ValueName)
  this.http.get('http://localhost:8888/listUEs').subscribe(
        value => {
          if(Object.keys(value).length==0)
          this.router.navigate(['/accueil']);
          else 
            this.allUEs=value;
          }
      ,
      error => console.log(error),
      
     );
  }

  listSemestre(e:any){
    this.http.get('http://localhost:8888/listSemestre').subscribe(
        value => {
          if(Object.keys(value).length==0)
          this.router.navigate(['/accueil']);
          else 
            this.allUEs=value;
          }
      ,
      error => console.log(error),
      
     );
  }

  listFormation(e:any){
    this.http.get('http://localhost:8888/listFormation', {
      withCredentials: true}).subscribe(
        value => {
          if(Object.keys(value).length==0)
          this.router.navigate(['/accueil']);
          else 
            this.allUEs=value;
          }
      ,
      error => console.log(error),
      
     );
  }

  

  // update(e:any){
  //   this.selected = e.target.value
  // }



}
