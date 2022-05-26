let http = require("http"); //chargement du module
let mongo = require('mongodb').MongoClient;
let urlmongo = "mongodb://localhost:27017/DB";
const express = require('express');
const cors = require('cors');
const session = require('express-session');
let mongoose = require('mongoose');
const app = express();
let url = require('url');
let urlp = require('url-parse');

// parser nécessaire pour récupérer les valeurs en mode POST
const bodyParser = require("body-parser");
app.use(cors({origin: ["http://localhost:4200"], credentials: true}));
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: false}));
app.use(bodyParser.json());
global.globalString="";
global.admin=false;
global.enseignant=false;
global.globalRole="";

app.get('/api', function(req, res){
	if (req.session.page_views){
		req.session.page_views++;
		res.send("You visited this page "+req.session.page_views+" times")
	}
	else {
		req.session.page_views=1;
		res.send("Welcome to this page for the first time!")
	}
});

app.get('/', (req, res) => {
	console.log("TEST");
	res.send('Page d\'inscription');
});

app.get('/inscription:email', (req, res) => {
		res.send('Ceci est la page '+req.params.emailInput);
});

app.get('/insertUser', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
	  if (err)
	    console.log("ERREUR");
		console.log("Connection insert ok !");
		var db = client.db("DB");
		var user = {
		  "HeureMin" : 192
		};
		console.log(req.url);
		user.Nom=url.parse(req.url,true).query.nom;
		user.Prenom=url.parse(req.url,true).query.prenom;
		user.Statut=url.parse(req.url,true).query.statut;
		user.NbHeureDechargeable=url.parse(req.url,true).query.nbHeureDechargeable;
		user.email=url.parse(req.url,true).query.email;
		user.Mdp=url.parse(req.url,true).query.Mdp;
		console.log(user)
		res.writeHead(200,{"Content-Type": "text/html"});
		db.collection('UTILISATEUR').insertOne(user, (err1, res1) => {
		  if(err1)
		    throw err1;
			console.log("insertion ok !");
		});
		db.collection('UTILISATEUR').find({"email":user.email}).forEach( function(x){db.collection('SERVICE').insertOne(x)});
	});
});

app.get('/ajoutEnseignement/:UE_Choisi', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection ok !");
		var db = client.db("DB");
		db.collection('UE').find({"Ref":req.params.UE_Choisi}).forEach( function(x){
		  db.collection('SERVICE').updateOne({"email": globalString},{$addToSet: { "UE" :x}}, (err1, res1) => {
    		if(err1) throw err1;
      });
      db.collection('UE').find({"Ref":req.params.UE_Choisi}).toArray((err1, res2) => {
        if(err1)
          throw err1;
        console.log(res2);
        console.log("Connexion search OK!");
        res.end(JSON.stringify(res2));
      });
		});
	});
});

app.get('/ajoutEnseignementAdmin', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
  		if (err)
  		  console.log("ERREUR");
  		console.log("ajoutEnseignementAdmin ok !");
  		var db = client.db("DB");
  		//var id = mongoose.Types.ObjectId(req.params.id);
      var ue=url.parse(req.url,true).query.ue;
      var user=mongoose.Types.ObjectId(url.parse(req.url,true).query.user);
  		//console.log("ID USER "+id);
  		db.collection('UE').find({"Ref":ue}).forEach( function(x){
  		db.collection('SERVICE').updateOne({"_id": user},{$addToSet: { "UE" :x}}, (err1, res1) => {
      		if(err1) throw err1;
      } );
      db.collection('UE').find({"Ref":req.params.UE_Choisi}).toArray((err1, res2) => {
          		 if(err1)
                  		    throw err1;
                  			console.log(res2);
                  			console.log("Connexion search OK!");
                  			res.end(JSON.stringify(res2));
  });

  		});
  	});
});

app.get('/modifEnseignementAdmin', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection ok !");
		var db = client.db("DB");
    var ue = {};
    		//console.log(req.url);
    		//var id = mongoose.Types.ObjectId(req.params.id);
    		user=mongoose.Types.ObjectId(url.parse(req.url,true).query.user);
    		ue.id=mongoose.Types.ObjectId(url.parse(req.url,true).query.Id);
    		ue.Formation=url.parse(req.url,true).query.Formation;
    		ue.Semestre=url.parse(req.url,true).query.Semestre;
    		ue.Ref=url.parse(req.url,true).query.Ref;
    		ue.Intitule=url.parse(req.url,true).query.Intitule;
    		ue.Statut=url.parse(req.url,true).query.Statut;
    		ue.hCM=url.parse(req.url,true).query.hCM;
        ue.hTD=url.parse(req.url,true).query.hTD;
        ue.hTP=url.parse(req.url,true).query.hTP;
        ue.Effectif=url.parse(req.url,true).query.Effectif;
        ue.grCM=url.parse(req.url,true).query.grCM;
        ue.grTD=url.parse(req.url,true).query.grTD;
        ue.grTP=url.parse(req.url,true).query.grTP;
    		//console.log("TEST VOIR "+ue.grCM)
    		db.collection('SERVICE').updateOne({"_id": user},{$pull: { "UE" :{"Ref": ue.Ref}}}, (err1, res1) => {
              if(err1)
        		    throw err1;
        			console.log("supp ok !");
        		});
		db.collection('SERVICE').updateOne({"_id": user},{$addToSet: { "UE" :ue}}, (err1, res1) => {
    		if(err1) throw err1;
    } );

	});
});

app.get('/modifEnseignement', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection ok !");
		var db = client.db("DB");
    var ue = {};
    		ue.id=mongoose.Types.ObjectId(url.parse(req.url,true).query.Id);
    		ue.Formation=url.parse(req.url,true).query.Formation;
    		ue.Semestre=url.parse(req.url,true).query.Semestre;
    		ue.Ref=url.parse(req.url,true).query.Ref;
    		ue.Intitule=url.parse(req.url,true).query.Intitule;
    		ue.Statut=url.parse(req.url,true).query.Statut;
    		ue.hCM=url.parse(req.url,true).query.hCM;
        ue.hTD=url.parse(req.url,true).query.hTD;
        ue.hTP=url.parse(req.url,true).query.hTP;
        ue.Effectif=url.parse(req.url,true).query.Effectif;
        ue.grCM=url.parse(req.url,true).query.grCM;
        ue.grTD=url.parse(req.url,true).query.grTD;
        ue.grTP=url.parse(req.url,true).query.grTP;
    		//console.log("TEST VOIR "+ue.grCM)
    		db.collection('SERVICE').updateOne({"email": globalString},{$pull: { "UE" :{"Ref": ue.Ref}}}, (err1, res1) => {
              if(err1)
        		    throw err1;
        			console.log("supp ok !");
        		});
		db.collection('SERVICE').updateOne({"email": globalString},{$addToSet: { "UE" :ue}}, (err1, res1) => {
    		if(err1) throw err1;
    } );

	});
});



app.get('/login', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection BD login ok !");
		var db = client.db("DB");
		var user = {};
	  user.email=url.parse(req.url,true).query.email;
	  user.Mdp=url.parse(req.url,true).query.Mdp;
	  globalString=user.email;
	  globalRole=user.Statut;
	  db.collection('UTILISATEUR').find({"email":user.email},{"Mdp":user.Mdp}).toArray((err1, res1) => {
		  res.end(JSON.stringify(res1));
    });
	});
});


app.get('/gestComptes', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
	  if (err)
	    console.log("ERREUR");
		console.log("Connection BD all compte ok !");
		var db = client.db("DB");
	  var user = {};
	  db.collection('UTILISATEUR').find().toArray((err1, res1) => {
		  console.log("Connexion OK!");
		  res.end(JSON.stringify(res1));
    });
	});
});


app.get('/listUEs', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
	  if (err)
	    console.log("ERREUR");
		console.log("Connection BD all compte ok !");
		var db = client.db("DB");
		var user = {};
	  db.collection('UE').find().toArray((err1, res1) => {
		  console.log("TEST1");
		  res.end(JSON.stringify(res1));
    });
  });
});


app.get('/listUEs/:ValueName', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection BD all compte ok !");
		var db = client.db("DB");
		var user = {};
    db.collection('UE').find({"Formation":req.params.ValueName}).toArray((err1, res1) => {
      console.log("TEST2 "+req.params.ValueName);
      res.end(JSON.stringify(res1));
    });
  });
});


app.get('/userDelete/:id', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection supp ok !");
		var db = client.db("DB");
		var id = mongoose.Types.ObjectId(req.params.id);
		db.collection('UTILISATEUR').deleteOne({"_id":id }, (err1, res1) => {
		  if(err1)
		    throw err1;
			console.log("supp ok !");
		});
  });
});


app.get('/ueDelete/:Ref', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection supp ok !");
		var db = client.db("DB");
		console.log("req.params.Ref "+req.params.Ref);


		db.collection('SERVICE').updateOne({"email": globalString},{$pull: { "UE" :{"Ref": req.params.Ref}}}, (err1, res1) => {
      if(err1)
		    throw err1;
			console.log("supp ok !");
		});
  });
});

app.get('/ueDeleteAdmin', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection supp ok !");
		var db = client.db("DB");
		//console.log("req.params.Ref "+req.params.Ref);
		user=mongoose.Types.ObjectId(url.parse(req.url,true).query.user);
    ue=url.parse(req.url,true).query.ue;

		db.collection('SERVICE').updateOne({"_id": user},{$pull: { "UE" :{"Ref": ue}}}, (err1, res1) => {
      if(err1)
		    throw err1;
			console.log("supp ok !");
		});
  });
});


app.get('/search/:id', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection search ok !");
	  var db = client.db("DB");
		var id = mongoose.Types.ObjectId(req.params.id);
		db.collection('UTILISATEUR').find({"_id":id}).toArray((err1, res1) => {
		  if(err1)
		    throw err1;
			console.log(res1);
			console.log("Connexion search OK!");
			res.end(JSON.stringify(res1));
	  });
	});
});


app.get('/search', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
	  console.log("Connection accueil ok !");
		var db = client.db("DB");
		db.collection('UTILISATEUR').find({"email":globalString}).toArray((err1, res1) => {
      if(err1)
        throw err1;
      console.log(res1);
      console.log("Connexion accueil OK!");
      res.end(JSON.stringify(res1));
	  });
	});
});

app.get('/deconnexion', (req, res) => {
	mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		globalString="";

	});
});


app.get('/search/:UERef_Choisi', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
    if (err)
      console.log("ERREUR");
    console.log("Connection accueil ok !");
    var db = client.db("DB");
    db.collection('UE').find({"Ref":req.params.UERef_Choisi}).toArray((err1, res1) => {
      if(err1)
        throw err1;
      console.log(res1);
      console.log("Connexion accueil OK!");
      res.end(JSON.stringify(res1));
    });
  });
});


app.get('/searchUEs/:id', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection search ok !");
	  var db = client.db("DB");
		var id = mongoose.Types.ObjectId(req.params.id);
		db.collection('SERVICE').find({"_id":id}).toArray((err1, res1) => {
		  if(err1)
		    throw err1;
			console.log(res1);
			console.log("Connexion search OK!");
			res.end(JSON.stringify(res1));
	  });
	});
});

app.get('/searchUEs2/:id', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection search ok !");
	  var db = client.db("DB");
		//var id = mongoose.Types.ObjectId(req.params.id);
		db.collection('UE').find({"Ref":req.params.id}).toArray((err1, res1) => {
		  if(err1)
		    throw err1;
			console.log(res1);
			console.log("Connexion search OK!");
			res.end(JSON.stringify(res1));
	  });
	});
});

app.get('/searchUEs/', (req, res) => {
  mongo.connect(urlmongo, (err, client) => {
		if (err)
		  console.log("ERREUR");
		console.log("Connection search ok !");
	  var db = client.db("DB");
		var id = mongoose.Types.ObjectId(req.params.id);
		db.collection('SERVICE').find({"email":globalString}).toArray((err1, res1) => {
		  if(err1)
		    throw err1;
			console.log(res1);
			console.log("Connexion search OK!");
			res.end(JSON.stringify(res1));
	  });
	});
});


app.get('/updateUser', (req, res) => {
		mongo.connect(urlmongo, (err, client) => {
			if (err) console.log("ERREUR");
				console.log("Connection ok !");
			var db = client.db("DB");
			var user = {};
			user._id=mongoose.Types.ObjectId(url.parse(req.url,true).query.id);
			user.Nom=url.parse(req.url,true).query.nom;
			user.Prenom=url.parse(req.url,true).query.prenom;
			user.Statut=url.parse(req.url,true).query.statut;
			user.HeureMin=url.parse(req.url,true).query.heureMin;
			user.NbHeureDechargeable=url.parse(req.url,true).query.nbHeureDechargeable;
			user.email=url.parse(req.url,true).query.email;
			user.Mdp=url.parse(req.url,true).query.Mdp;
	    db.collection('UTILISATEUR').updateOne({
	      "_id": user._id
	      },
	      {$set: {
	        "Nom" :user.Nom ,
	        "Prenom" :user.Prenom ,
	        "Statut" : user.Statut,
	        "HeureMin" : user.HeureMin,
	        "NbHeureDechargeable" : user.NbHeureDechargeable,
	        "email" : user.email,
	        "Mdp" : user.Mdp
	      }
	      }, (err1, res1) => {
		      if(err1) throw err1;
		        console.log("modif ok !");
          }
      );
    });
});


app.use((req, res, next) => {
	res.status(404).send('Page introuvable');
});


app.listen(8888, () => {
	console.log('Server running at http://localhost:8888/')
});
