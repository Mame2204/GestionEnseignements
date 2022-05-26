import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-modif-compte-enseignant',
  templateUrl: './modif-compte-enseignant.component.html',
  styleUrls: ['./modif-compte-enseignant.component.css']
})
export class ModifCompteEnseignantComponent implements OnInit {

  public id:any;
  @Input() user:any;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.id = params['par1'];
    });
    }

  ngOnInit(): void {
      //console.log("TEST id modif"+this.id)
      this.http.get('http://localhost:8888/search/'+this.id).subscribe(
        value => {
          //console.log("TEST"+JSON.stringify(value));
        if(Object.keys(value).length==0)
          this.router.navigate(['/connexion']);
        else {
          this.user=value;
          //console.log("TEST"+JSON.stringify(value));
          //this.router.navigate(['/modifCompte']);
        }
    },
    error => console.log(error),);

    }

    onUpdateButtonClicked(id: string, nom: string, prenom: string, statut: string, heureMin: string, nbHeureDechargeable: string, email: string, password: string) {

        //this.router.navigate(['/connexion']);
        this.http.get('http://localhost:8888/updateUser?id='+id+'&nom='+nom+'&prenom='+prenom+'&statut='+statut+'&heureMin='+heureMin+'&nbHeureDechargeable='+nbHeureDechargeable+'&email='+email+'&Mdp='+password, {
          withCredentials: true}).subscribe(
          value => console.log(JSON.stringify(value)),
          error => console.log(error)
          //this.router.navigate(['/gestComptes']);
         );
    }

}

