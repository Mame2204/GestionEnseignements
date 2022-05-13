let http = require("http"); // chargement du module
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
    //app.use(bodyParser.urlencoded({extended: true}));
global.globalString="test";
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
  //}
});

app.get('/inscription:email', (req, res) => {
    res.send('Ceci est la page '+req.params.emailInput); 
});

    // définition d'une route POST
     app.get('/insertUser', (req, res) => {
        mongo.connect(urlmongo, (err, client) => {
          if (err) console.log("ERREUR");
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
        if(err1) throw err1;
        console.log("insertion ok !");
        
    } );
      });
  }); 

  // const validatePayloadMiddleare = (req, res, next) => {
  //   if (req.body) {
  //     next();
  //   } else {
  //     res.status(403).send({
  //       errorMessage: 'You need a payload'
  //     });
  //   }
  // };

  // app.post('/login', validatePayloadMiddleare, (req, res) =>{
  //   const user=
  // });

  

  app.get('/login', (req, res) => {
    mongo.connect(urlmongo, (err, client) => {
      if (err) console.log("ERREUR");
        console.log("Connection BD login ok !");
        var db = client.db("DB");
      var user = {
   };
   
   user.email=url.parse(req.url,true).query.email;
  user.Mdp=url.parse(req.url,true).query.Mdp;
  globalString=user.email;
  //req.session.user=url.parse(req.url,true).query.email;
  db.collection('UTILISATEUR').find({"email":user.email},{"Mdp":user.Mdp}).toArray((err1, res1) => {
    //req.session.user=user.email;
    //console.log("gfhhj"+req.session.user);
    //res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify(res1));
});
   });
  });

  
  app.get('/gestComptes', (req, res) => {
    mongo.connect(urlmongo, (err, client) => {
      if (err) console.log("ERREUR");
        console.log("Connection BD all compte ok !");
        var db = client.db("DB");
      var user = {
   };
  db.collection('UTILISATEUR').find().toArray((err1, res1) => {
    //console.log("var globale: "+globalString);
    console.log("Connexion OK!");
    //res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify(res1));
});
   });
  });

  app.get('/listUEs', (req, res) => {
    mongo.connect(urlmongo, (err, client) => {
      if (err) console.log("ERREUR");
        console.log("Connection BD all compte ok !");
        var db = client.db("DB");
      var user = {};
  db.collection('UE').find().toArray((err1, res1) => {
    //console.log("var globale: "+globalString);
    console.log("TEST1");
    //res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify(res1));
});
});
});
  

//   app.get('/listUEs/:Licence', (req, res) => { 
//     mongo.connect(urlmongo, (err, client) => {
//       if (err) console.log("ERREUR");
//         console.log("Connection BD all compte ok !");
//         var db = client.db("DB");
//       var user = {};
//   console.log("ca marche")
// db.collection('UE').find({"Formation":"Licence"}).toArray((err1, res1) => {
//   //console.log("var globale: "+globalString);
//   console.log("TEST2 ");
//   //res.setHeader('Access-Control-Allow-Origin','*');
//   res.end(JSON.stringify(res1));

//    });
//   });
// });

app.get('/listUEs/:ValueName', (req, res) => { 
  mongo.connect(urlmongo, (err, client) => {
    if (err) console.log("ERREUR");
      console.log("Connection BD all compte ok !");
      var db = client.db("DB");
    var user = {};
db.collection('UE').find({"Formation":req.params.ValueName}).toArray((err1, res1) => {
console.log("TEST2 "+req.params.ValueName);
res.end(JSON.stringify(res1));

 });
});
});

// app.get('/listUEs/:Master Miage', (req, res) => { 
//   mongo.connect(urlmongo, (err, client) => {
//     if (err) console.log("ERREUR");
//       console.log("Connection BD all compte ok !");
//       var db = client.db("DB");
//     var user = {};
// console.log("ca marche")
// db.collection('UE').find({"Formation":"Master Miage"}).toArray((err1, res1) => {
// //console.log("var globale: "+globalString);
// console.log("TEST2");
// //res.setHeader('Access-Control-Allow-Origin','*');
// res.end(JSON.stringify(res1));

//  });
// });
// });

  

  
//   app.get('/selectOptionsFormations', (req, res) => {
//     mongo.connect(urlmongo, (err, client) => {
//       if (err) console.log("ERREUR");
//         console.log("Connection BD all compte ok !");
//         var db = client.db("DB");
//       var user = {};
//   db.UE.distinct("Formation", (err1, res1) => {
//     //console.log("var globale: "+globalString);
//     console.log("Connexion OK!");
//     //res.setHeader('Access-Control-Allow-Origin','*');
//     res.end(JSON.stringify(res1));
// });
//    });
//   });


app.get('/userDelete/:id', (req, res) => {
  console.log("Connection supp ok !");
  mongo.connect(urlmongo, (err, client) => {
    if (err) console.log("ERREUR");
      console.log("Connection supp ok !");
      var db = client.db("DB");
      var id = mongoose.Types.ObjectId(req.params.id);
      db.collection('UTILISATEUR').deleteOne({"_id":id }//);
      , (err1, res1) => {
        if(err1) throw err1;
        console.log("supp ok !");
        
    } );
 });
});

  app.get('/search/:id', (req, res) => {
      mongo.connect(urlmongo, (err, client) => {
        if (err) console.log("ERREUR");
          console.log("Connection search ok !");
          var db = client.db("DB");
          var id = mongoose.Types.ObjectId(req.params.id);
     db.collection('UTILISATEUR').find({"_id":id}).toArray((err1, res1) => {
      if(err1) throw err1;
      console.log(res1);
      console.log("Connexion search OK!");
      res.end(JSON.stringify(res1));
  });
     });
    });

    app.get('/search', (req, res) => {
      mongo.connect(urlmongo, (err, client) => {
        if (err) console.log("ERREUR");
          console.log("Connection accueil ok !");
          var db = client.db("DB");
          //console.log("test session "+globalString);
     db.collection('UTILISATEUR').find({"email":globalString}).toArray((err1, res1) => {
      if(err1) throw err1;
      console.log(res1);
      console.log("Connexion accueil OK!");
      res.end(JSON.stringify(res1));
  });
     });
    });

  //   app.get('/searchUE/:id', (req, res) => {
  //     mongo.connect(urlmongo, (err, client) => {
  //       if (err) console.log("ERREUR");
  //         console.log("Connection ok !");
  //         var db = client.db("DB");
  //         var id = mongoose.Types.ObjectId(req.params.id);
  //    db.collection('UE').find({"_id":id}).toArray((err1, res1) => {
  //     if(err1) throw err1;
  //     console.log(res1);
  //     console.log("Connexion search OK!");
  //     res.end(JSON.stringify(res1));
  // });
  //    });
  //   });


app.get('/updateUser', (req, res) => {
    mongo.connect(urlmongo, (err, client) => {
      if (err) console.log("ERREUR");
        console.log("Connection ok !");
        var db = client.db("DB");
        var user = {
         };
        user._id=mongoose.Types.ObjectId(url.parse(req.url,true).query.id);
        user.Nom=url.parse(req.url,true).query.nom;
        user.Prenom=url.parse(req.url,true).query.prenom;
        user.Statut=url.parse(req.url,true).query.statut;
        user.HeureMin=url.parse(req.url,true).query.heureMin;
        user.NbHeureDechargeable=url.parse(req.url,true).query.nbHeureDechargeable;
        user.email=url.parse(req.url,true).query.email;
        user.Mdp=url.parse(req.url,true).query.Mdp;
        
   //console.log(user)
  db.collection('UTILISATEUR').updateOne({"_id": user._id},{$set: { "Nom" :user.Nom , "Prenom" :user.Prenom , "Statut" : user.Statut, "HeureMin" : user.HeureMin, "NbHeureDechargeable" : user.NbHeureDechargeable, "email" : user.email, "Mdp" : user.Mdp}}, (err1, res1) => {
    if(err1) throw err1;
    console.log("modif ok !");
    
} );
  });
}); 


app.use((req, res, next) => { 
  res.status(404).send('Page introuvable');
});
app.listen(8888, () => {
  console.log('Server running at http://localhost:8888/')
});
