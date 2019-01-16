function RandomPlace(x){
    let tab = document.getElementById('tabJeu').rows;
    let choixLigne = Math.floor(tab.length * Math.random());
    let colonne = tab[choixLigne].cells;
    let choixCellule = Math.floor(colonne.length * Math.random());
    colonne[choixCellule].innerHTML= x;
};

//fonction qui place les astéroides aléatoirements
function AsteroidPlace(){

//on initialise la boucle qui défini le nombre d'astroides à placer
   const nbAsteroid = 15;
   let x;
   const tab = document.getElementById('tabJeu').rows;
   for( x=1; x<nbAsteroid;){
//choix aléatoire du placement des astéroides sur le damier.
    let choixLigne = Math.floor(tab.length * Math.random());
    let colonne = tab[choixLigne].cells;
    let choixCellule = Math.floor(colonne.length * Math.random());
        if(colonne[choixCellule].innerHTML == ""){
    colonne[choixCellule].innerHTML= aT[Math.floor(aT.length * Math.random())];
    x++;
        }
        else{
            x=x;
        }
    }
};

//placement aléatoire des armes
function ArmesPlace(){
    let armes = [vaisseau1.spriteArme, vaisseau2.spriteArme, vaisseau3.spriteArme, vaisseau4.spriteArme]
    let i ;
    for(i=0; i<armes.length;){
    let tab = document.getElementById('tabJeu').rows;
    let choixLigne = Math.floor(tab.length * Math.random());
    let colonne = tab[choixLigne].cells;
    let choixCellule = Math.floor(colonne.length * Math.random());
        if(colonne[choixCellule].innerHTML == ""){
    colonne[choixCellule].innerHTML= armes[i];
    i++;
        }
        else{
         i=i;
        }
    }
};

// il faudra definir le debut du jeu le placement

RandomPlace(vaisseauIni.spriteXw);
RandomPlace(vaisseauIni.spriteTie);
AsteroidPlace();
ArmesPlace();



