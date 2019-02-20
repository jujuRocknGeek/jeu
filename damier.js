//placement des vaisseaux
function randomPlace(vaisseau, tag, advers){
    let tab = document.getElementById('tabJeu').rows;
    let choixLigne = Math.floor(tab.length * Math.random());
    let colonne = tab[choixLigne].cells;
    let choixCellule = Math.floor(colonne.length * Math.random());
    colonne[choixCellule].innerHTML= vaisseau;
    // réinitialiser la page si vaisseaux cote à  cote
        let cellule = $(tag).parent('td').index();
        let ligne = $(tag).parent(cellule).parent('tr').index();
        if($(" tr:eq("+(ligne+1)+") td:eq("+cellule+"), tr:eq("+(ligne-1)+") td:eq("+cellule+"), tr:eq("+ligne+") td:eq("+(cellule+1)+"), tr:eq("+ligne+") td:eq("+(cellule-1)+")").children().attr("id") == advers){
         location.reload();
        } 
};


let cellule = $("#xwing").parent('td').index();
let ligne = $("#xwing").parent(cellule).parent('tr').index();
let choiceSel =["tr:eq("+(ligne+1)+") td:eq("+cellule+")", "tr:eq("+(ligne-1)+") td:eq("+cellule+")", "tr:eq("+ligne+") td:eq("+(cellule+1)+")", "tr:eq("+ligne+") td:eq("+(cellule-1)+")"];
let i;
    for(i=0; i<choiceSel.length; i++){
        if($(choiceSel[i]).children().attr("id") == "tie"){
        setTimeout(fightJ1, 700);
        }
    }


//fonction qui place les astéroides aléatoirements
function asteroidPlace(){

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
function armesPlace(){
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
function recuperationPlacement(x){
    var cellule = $(x).parent('td').index();
    var ligne = $(x).parent(cellule).parent('tr').index();
    return {ligne, cellule};
};
randomPlace(vaisseauIni.spriteXw, "#xwing", "tie");
randomPlace(vaisseauIni.spriteTie, "#tie", "xwing");
asteroidPlace();
armesPlace();



