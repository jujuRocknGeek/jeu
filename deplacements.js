'use strict';
// on recupère la place du vaisseau
function RecuperationPlacement(x){
    var doc = document.getElementById(x);
    var accesParent = doc.parentNode; 
    var cellule = accesParent.cellIndex; 
    var ligne = accesParent.parentNode.rowIndex;
    return {ligne, cellule};
};

// fonction qui selectionne les cases cliquables
function LignesClic(incre){
    const nbTour = 3;
    let i;
    let numlign = RecuperationPlacement('xwing').ligne;
    let numCell = RecuperationPlacement('xwing').cellule;

    for(i=1; i<=nbTour; i++){
    numlign += incre;
        /*nous cherchons si la cellule suivante est vide et si c'est vrai cette cellule est cliquable sinon 
        // il faut déterminer si cette cellule est occupée et par quoi*/

    if($("tr:eq("+numlign+") td:eq("+numCell+")").html() === ""){
        $("tr:eq("+numlign+") td:eq("+numCell+")").css('background', 'url(images/fondSWgrey.png) fixed');
        $(this).empty("#arm");
        $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
            $(this).append($("#xwing"));
            $('td').css('background', 'url(images/fondSW.png) fixed');
            LignesClic(1);
            LignesClic(-1);
           });
   }
    // case occuppée par le vaisseau ennemi
    else if ($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("id") === "xwing" || $("tr:eq("+numlign+") td:eq("+numCell+")").children().attr("id") === "tie"){

        }

    // case occuppée par un asteroide
    else if ($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "asteroid"){
        return;
        }

    // case occuppée par une arme
    else if ($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("id") === "arm"){
        $("tr:eq("+numlign+") td:eq("+numCell+")").css('background', 'url(images/fondSWgrey.png)');

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                //laisse sur place l'arme du vaisseau quand changement d'arme
                if($("#xwing").attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll("#xwing");}
                // defini le sprite du nouveau vaisseau équipé
                $(vaisseau1.spriteXw).replaceAll(".arm2");
                $('td').css('background', 'url(images/fondSW.png) fixed');
                LignesClic(1);
                LignesClic(-1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                //laisse sur place l'arme du vaisseau quand changement d'arme
                if($("#xwing").attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll("#xwing");}
                if($("#xwing").attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll("#xwing");}
                // defini le sprite du nouveau vaisseau équipé
                $(vaisseau2.spriteXw).replaceAll(".arm3");
                $('td').css('background', 'url(images/fondSW.png) fixed');
                LignesClic(1);
                LignesClic(-1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                //laisse sur place l'arme du vaisseau quand changement d'arme
                if($("#xwing").attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll("#xwing");}
                if($("#xwing").attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll("#xwing");}
                // defini le sprite du nouveau vaisseau équipé           
                $(vaisseau3.spriteXw).replaceAll(".arm4");
                $('td').css('background', 'url(images/fondSW.png) fixed');
                LignesClic(1);
                LignesClic(-1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){
            
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                //laisse sur place l'arme du vaisseau quand changement d'arme
                if($("#xwing").attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll("#xwing");}
                if($("#xwing").attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll("#xwing");}
                else if($("#xwing").attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll("#xwing");}
                // defini le sprite du nouveau vaisseau équipé           
                $(vaisseau4.spriteXw).replaceAll(".arm5");
                $('td').css('background', 'url(images/fondSW.png) fixed');
                LignesClic(1);
                LignesClic(-1);
            });
        }
    }

    else{
        return;
        }

    }
    
};
    LignesClic(1);
    LignesClic(-1);
    

    
    

     /* ce qu'il va falloir faire

     incrementer et decrementer les cellules
     empecher placement vaisseaux cote a cote
     

       si occupé par joueur: combattre{

       }
       resoudre bug selection cellules 
       prendre en compte l'arme initiale une fois placée sur damier
       resoudre bug quand arme remplacée, l'arme remisée est cliquable mais s'additionne avec vaisseau?

       definir a qui est le tour, joueur1 ou joueur 2{

       }
       design html

       */
       



    
