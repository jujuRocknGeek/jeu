'use strict';
// on recupère la place du vaisseau
function RecuperationPlacement(x){
    var cellule = $(x).parent('td').index();
    var ligne = $(x).parent(cellule).parent('tr').index();
    return {ligne, cellule};
};

// fonction qui selectionne les cases cliquables
function LignesClic(vaisseau, incre){ 
    const nbTour = 3;
    let i = 0;
    let numlign = RecuperationPlacement(vaisseau).ligne;
    let numCell = RecuperationPlacement(vaisseau).cellule;

    for(i=1; i<=nbTour; i++){

            numlign += incre;
            if(numlign>9 || numlign <0){
                return;
            }
        /*nous cherchons si la cellule suivante est vide et si c'est vrai cette cellule est cliquable sinon 
        // il faut déterminer si cette cellule est occupée et par quoi*/

    if($("tr:eq("+numlign+") td:eq("+numCell+")").html() === ""){

        $("tr:eq("+numlign+") td:eq("+numCell+")").css('background', 'url(images/fondSWgrey.png) fixed');

        $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
            $(".arm1").show();
            $(".arm2").show();
            $(".arm3").show();
            $(".arm4").show();
            $(".arm5").show();
            $(this).append($(vaisseau));
            console.log($(this).append($(vaisseau)));
            $('td').css('background', 'url(images/fondSW.png) fixed');
            $('td').off('click');
            LignesClic("#xwing", 1);
            LignesClic("#xwing", -1);
            LignesHorzClic("#xwing", 1);
            LignesHorzClic("#xwing", -1);
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
        $("tr:eq("+numlign+") td:eq("+numCell+")").css('background', 'url(images/fondSWgrey.png) fixed');

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm1"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship1")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseauIni.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){
            
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship1")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);};

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }

                $(this).append(vaisseau1.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseau2.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseau3.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseau4.spriteXw);
                $('td').off('click');
                $('td').css('background', 'url(images/fondSW.png) fixed');
                
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
            });
        }

    }

    else{
        return;
        }

    }
};

function LignesHorzClic(vaisseau, incre){ 
    const nbTour = 3;
    let i = 0;
    var x;
    let numlign = RecuperationPlacement(vaisseau).ligne;
    let numCell = RecuperationPlacement(vaisseau).cellule;

    for(i=1; i<=nbTour; i++){
            numCell += incre;
            if(numCell>9 || numCell<0){
                return;
            }

    
 
        /*nous cherchons si la cellule suivante est vide et si c'est vrai cette cellule est cliquable sinon 
        // il faut déterminer si cette cellule est occupée et par quoi*/

    if($("tr:eq("+numlign+") td:eq("+numCell+")").html() === ""){

        $("tr:eq("+numlign+") td:eq("+numCell+")").css('background', 'url(images/fondSWgrey.png) fixed');

        $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

            $(".arm1").show();
            $(".arm2").show();
            $(".arm3").show();
            $(".arm4").show();
            $(".arm5").show();
            $(this).append($(vaisseau));
            $('td').css('background', 'url(images/fondSW.png) fixed');
            $('td').off('click');
            LignesHorzClic("#xwing", 1);
            LignesHorzClic("#xwing", -1);
            LignesClic("#xwing", 1);
            LignesClic("#xwing", -1);   
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
        $("tr:eq("+numlign+") td:eq("+numCell+")").css('background', 'url(images/fondSWgrey.png) fixed');

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm1"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship1")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseauIni.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}
                
                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                

                $(this).append(vaisseau1.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseau2.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseau3.spriteXw);
                $('td').off('click');
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "ship")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "ship4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                let arme = $(this).children().attr("class");
           
                switch(arme){
                    case "arm1":
                        $(".arm1").hide();
                        break;
                    case "arm2" :
                    $(".arm2").hide();
                        break;
                    case "arm3" :
                    $(".arm").hide();
                        break;
                    case "arm4":
                    $(".arm4").hide();
                        break;
                    case "arm5" :
                    $(".arm5").hide();
                        break;
                    default : 
                        return;
                }
                
                $(this).append(vaisseau4.spriteXw);
                $('td').off('click');
                LignesHorzClic("#xwing", 1);
                LignesHorzClic("#xwing", -1);
                LignesClic("#xwing", 1);
                LignesClic("#xwing", -1);
                
            });
        }

    }

    else{
        return;
        }

    }
};
    LignesClic("#xwing", +1);
    LignesClic("#xwing", -1);
    LignesHorzClic("#xwing", +1);
    LignesHorzClic("#xwing", -1);


    
    

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
       



    
