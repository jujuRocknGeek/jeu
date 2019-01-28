'use strict';
function Joueur1(){
//on cherche a savoir si il y a une arme sur la case afin de la cacher pour ne pas avoir doublon avec vaisseau
if($("tr:eq("+RecuperationPlacement("#xwing").ligne+") td:eq("+RecuperationPlacement("#xwing").cellule+")").children().attr("id") == "arm"){
let arme = $("tr:eq("+RecuperationPlacement("#xwing").ligne+") td:eq("+RecuperationPlacement("#xwing").cellule+")").children().attr("class");
           
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
}

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
            Joueur2();
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
                //on vide la cellule et déplace notre vaisseau
                $(this).empty();
                $(this).append($(vaisseau));
                // changer  notre vaisseau en arme
                if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
                {$(vaisseau4.spriteArme).replaceAll(vaisseau);}

                //cacher notre arme
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
                // mettre le nouveau vaisseau
                $(this).append(vaisseauIni.spriteXw);
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){
            
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
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
            Joueur2();  
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

                if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                if($(vaisseau).attr("class") === "shipXw")
                {$(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw1")
                {$(vaisseau1.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw2")
                {$(vaisseau2.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw3")
                {$(vaisseau3.spriteArme).replaceAll(vaisseau);}
                else if($(vaisseau).attr("class") === "shipXw4")
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
                interfaceJ1();
                Joueur2();
                
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

}
    
    




    
