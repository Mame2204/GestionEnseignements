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
	public UERef: string="";
	public user: any;
	public service: any;
	public UE_Choisi: any;
	public UEName: string="";
	public selectedObj:any;
	public ue: any;
	@Input() allUEs:any;
	@Input() Formations:any;

	titleF = "Formations";
	formations = [
		{ id: 1, name: "Licence" },
		{ id: 2, name: "Master Info" },
		{ id: 3, name: "Master Miage" }
	];

	constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.id = params['par1'];
		});
	}

	ngOnInit(): void {
	  this.http.get('http://localhost:8888/listUEs').subscribe(
			value => {
				if(Object.keys(value).length==0)
					this.router.navigate(['/accueil']);
				else
					this.allUEs=value;
			},
			error => console.log(error),
		);
	}

	public selectedValueObj(name: any) {
		this.ValueName = (name.srcElement || name.target).value;
		for (let i = 0; i < this.formations.length; i++) {
			if (this.formations[i].name == this.ValueName) {
				this.selectedObj = this.formations[i];
			}
		}
		this.http.get('http://localhost:8888/listUEs/'+this.ValueName).subscribe(
			value => {
			  console.log("Test valueName" +this.ValueName);
				console.log(JSON.stringify(value));
				this.router.navigate(['/enseignements']);
				this.allUEs=value;
			},
			error => console.log(error),
		);
	}

  public choixRef(ueChoisi:any){
		this.UE_Choisi = (ueChoisi.srcElement || ueChoisi.target).value;//form_element;
		console.log("UE1 "+this.UE_Choisi);
	}

	ajoutEnseignement() {
		console.log("UE "+this.UE_Choisi);
		this.trouveUE(this.UE_Choisi);
		this.http.get('http://localhost:8888/ajoutEnseignement/'+this.UE_Choisi).subscribe(
			value => {
        if(Object.keys(value).length==0) {
          console.log("PAS BON");
        } else {
          this.ue=value;
        }
      },
		  error => console.log(error),
    );
	}

	modifEnseignement(id: string, Formation:string, Semestre: string, Ref: string, Intitule: string, Statut: string, hCM: string, hTD: string, hTP: string, Effectif: string, grCM: string, grTD: string, grTP: string) {
  	this.http.get('http://localhost:8888/modifEnseignement?id='+id+'&Formation='+Formation+'&Semestre='+Semestre+'&Ref='+Ref+'&Intitule='+Intitule+'&Statut='+Statut+'&hCM='+hCM+'&hTD='+hTD+'&hTP='+hTP+'&Effectif='+Effectif+'&grCM='+grCM+'&grTD='+grTD+'&grTP='+grTP).subscribe(
  		value => {
  		  if(Object.keys(value).length==0) {
          console.log("PAS BON");
        } else {
          console.log("BON "+value);
          this.ue=value;
        }
      },
  		error => console.log(error),
    );
  }

	trouveUE(id:any) {
    this.http.get('http://localhost:8888/searchUEs2/'+id).subscribe(
      value => {
        if(Object.keys(value).length==0)
        {}
        else {
          this.ue=value;
        }
      },
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
			},
			error => console.log(error),
		);
  }

	listFormation(e:any){
		this.http.get('http://localhost:8888/listFormation').subscribe(
			value => {
				if(Object.keys(value).length==0)
					this.router.navigate(['/accueil']);
				else
					this.allUEs=value;
			},
			error => console.log(error),
		);
	}

}
