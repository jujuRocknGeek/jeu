function RandomPlace(x){
    let tab = document.getElementById('tabJeu').rows;
    let choixLigne = Math.floor(tab.length * Math.random());
    let colonne = tab[choixLigne].cells;
    let choixCellule = Math.floor(colonne.length * Math.random());
    colonne[choixCellule].innerHTML= x;
};
RandomPlace(vaisseauIni.spriteXw);
RandomPlace(vaisseauIni.spriteTie);


//fonction qui place les astéroides aléatoirements
function AsteroidPlace(){

//on initialise la boucle qui défini le nombre d'astroides à placer
   const nbAsteroid = 15;
   let x;
   const tab = document.getElementById('tabJeu').rows;
   for( x=0; x<nbAsteroid; x++){
//choix aléatoire du placement des astéroides sur le damier.
    let choixLigne = Math.floor(tab.length * Math.random());
    let colonne = tab[choixLigne].cells;
    let choixCellule = Math.floor(colonne.length * Math.random());
        if(colonne[choixCellule].innerHTML == ""){
    colonne[choixCellule].innerHTML= aT[Math.floor(aT.length * Math.random())];
        }
        else{
            let choixLigne = Math.floor(tab.length * Math.random());
            let colonne = tab[choixLigne].cells;
            let choixCellule = Math.floor(colonne.length * Math.random());
            colonne[choixCellule].innerHTML= aT[Math.floor(aT.length * Math.random())];
        }
    }
};

//placement aléatoire des armes
function ArmesPlace(){
    let armes = [vaisseau1.spriteArme, vaisseau2.spriteArme, vaisseau3.spriteArme, vaisseau4.spriteArme]
    let i ;
    for(i=0; i<armes.length; i++){
    let tab = document.getElementById('tabJeu').rows;
    let choixLigne = Math.floor(tab.length * Math.random());
    let colonne = tab[choixLigne].cells;
    let choixCellule = Math.floor(colonne.length * Math.random());
        if(colonne[choixCellule].innerHTML == ""){
    colonne[choixCellule].innerHTML= armes[i];
        }
        else{
          let choixLigne = Math.floor(tab.length * Math.random());
            let colonne = tab[choixLigne].cells;
            let choixCellule = Math.floor(colonne.length * Math.random());
            colonne[choixCellule].innerHTML= aT[Math.floor(aT.length * Math.random())];;
        }
    }
};

// il faudra definir le debut du jeu le placement
AsteroidPlace();
ArmesPlace();


