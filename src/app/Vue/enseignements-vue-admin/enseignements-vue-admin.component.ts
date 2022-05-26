import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-enseignements-vue-admin',
  templateUrl: './enseignements-vue-admin.component.html',
  styleUrls: ['./enseignements-vue-admin.component.css']
})
export class EnseignementsVueAdminComponent implements OnInit {

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
  	@Input() allUEs:any; //= {
  	@Input() Formations:any;

  	//let regexp = new RegExp("/");

  	titleF = "Formations";
  	formations = [
  		{ id: 1, name: "Licence" },
  		{ id: 2, name: "Master Info" },
  		{ id: 3, name: "Master Miage" }
  	];
  	// selected = [{ id: 1, name: "Licence" }];


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
    //(name.srcElement || name.target).value;
  		this.UE_Choisi = (ueChoisi.srcElement || ueChoisi.target).value;//form_element;
  		console.log("UE1 "+this.UE_Choisi);
  	}

  //tester cette methode par ce qu'on arrive pas a recup user et uechoisi
  	ajoutEnseignement() {
  		console.log("UE "+this.UE_Choisi);
      		this.trouveUE(this.UE_Choisi);
      		console.log("USER "+this.id);
      		//this.http.get('http://localhost:8888/ajoutEnseignementAdmin/'+this.UE_Choisi).subscribe(
      		this.http.get('http://localhost:8888/ajoutEnseignementAdmin?ue='+this.UE_Choisi+'&user='+ this.id).subscribe(
      			value => {
      			if(Object.keys(value).length==0) {
                        //this.router.navigate(['/connexion']);
                        console.log("PAS BON");
                      }
                    else {
                    //console.log("BON "+value);
                      this.ue=value;
                      //this.refresh();
                    }
                    },
      			error => console.log(error),
          );

  	}


  	modifEnseignement(id: string, Formation:string, Semestre: string, Ref: string, Intitule: string, Statut: string, hCM: string, hTD: string, hTP: string, Effectif: string, grCM: string, grTD: string, grTP: string) {
    		var ue={};
    		this.http.get('http://localhost:8888/modifEnseignementAdmin?id='+id+'&Formation='+Formation+'&Semestre='+Semestre+'&Ref='+Ref+'&Intitule='+Intitule+'&Statut='+Statut+'&hCM='+hCM+'&hTD='+hTD+'&hTP='+hTP+'&Effectif='+Effectif+'&grCM='+grCM+'&grTD='+grTD+'&grTP='+grTP+'&user='+ this.id).subscribe(
    			value => {
    			if(Object.keys(value).length==0){
                    //this.router.navigate(['/connexion']);
                    console.log("PAS BON");}
                  else {
                  console.log("BON "+value);
                    this.ue=value;
                    //this.refresh();
                  }
                  },
    			error => console.log(error),
        );

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

  	trouveUE(id:any) {
  	  //id=this.UE_Choisi;
  	  console.log("REF UE "+id);
        this.http.get('http://localhost:8888/searchUEs2/'+id).subscribe(
          value => {
          if(Object.keys(value).length==0)
            //this.router.navigate(['/connexion']);
            console.log();
          else {
            this.ue=value;
            //this.refresh();
          }
      },
      error => console.log(error),);

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
