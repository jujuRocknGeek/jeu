function RecuperationPlacement(x){
    var doc = document.getElementById(x);
    var accesParent = doc.parentNode; 
    var cellule = accesParent.cellIndex; 
    var ligne = accesParent.parentNode.rowIndex;
    return {ligne, cellule};
};

function LignesClic(incre){
    const nbTour = 3;
    let i;

    const tab = document.querySelector("table");
    let tabLign = tab.rows[RecuperationPlacement('xwing').ligne];
    let tabCell = tabLign.cells[RecuperationPlacement('xwing').cellule];
    let numlign = tabLign.rowIndex;
    let numCell = tabCell.cellIndex;

    for(i=1; i<=nbTour; i++){
    numlign += incre;
        /*nous cherchons si la cellule suivante est vide et si c'est vrai cette cellule est cliquable sinon 
        // il faut déterminer si cette cellule est occupée et par quoi*/

    if($('table  tr').eq(numlign).find('td').eq(numCell).html() == ""){

        $('table  tr').eq(numlign).find('td').eq(numCell).css('background', 'url(images/fondSWgrey.png)');

        $('table  tr').eq(numlign).find('td').eq(numCell).click(function(){
            $(this).append($("#xwing"));
            $('td').css('background', 'url(images/fondSW.png)');
            LignesClic(+1);
            LignesClic(-1);
           });
   }

    else if ($("tr:eq("+numlign+") td:eq("+numCell+")").html() == vaisseauIni.spriteXw || $("tr:eq("+numlign+") td:eq("+numCell+")").html() == vaisseauIni.spriteTie){
        alert("vaisseau");
        }

    else if (tab.rows[numlign].cells[numCell].children[0].classList.contains('asteroid')){
        return;
        }

    else if ($("tr:eq("+numlign+") td:eq("+numCell+")").children('#arm')){
    $("tr:eq("+numlign+") td:eq("+numCell+")").css('background', 'url(images/fondSWgrey.png)');

        }

    else{
        return;
        }

    }
};
    LignesClic(+1);
    LignesClic(-1);
    

    
    

     /* ce qu'il va falloir faire
     incrementer et decrementer les Lignes
     jusqu'a 3 fois
     lier a chaque incrémentation la cellule correspondante
     verifier si cette cellule est Vide
        si vide : placer notre vaisseaux
        si occuppe par arme: remplacer vaisseaux
        si occuppe par asteroid: stopper incrémentation 
        si occupé par joueur: combattre


        if(tab.rows[numlign].cells[numCell].innerHTML == ""){
        tab.rows[numlign].cells[numCell].style.background = " url(images/fondSWgrey.png) fixed";
        $(this).click(function(){
        $(this).append($("#xwing"));
       });
   }
        */
/*tab.rows[numlign].cells[numCell].children[0].classList.contains("arm1")||
    tab.rows[numlign].cells[numCell].children[0].classList.contains("arm2")||
    tab.rows[numlign].cells[numCell].children[0].classList.contains("arm3")||
    tab.rows[numlign].cells[numCell].children[0].classList.contains("arm4")||
    tab.rows[numlign].cells[numCell].children[0].classList.contains("arm5")){*/
    
