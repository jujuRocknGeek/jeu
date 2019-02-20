'use strict';
// selection des cases cliquables verticalement et leurs évènements
function joueur2(){ 
//on cherche a savoir si il y a une arme sur la case afin de la cacher pour ne pas avoir doublon avec vaisseau
let recupLigneTie = recuperationPlacement("#tie").ligne;
let recupCellTie = recuperationPlacement("#tie").cellule;
if($("tr:eq("+recupLigneTie+") td:eq("+recupCellTie+")").children().attr("id") == "arm"){
let arme = $("tr:eq("+recupLigneTie+") td:eq("+recupCellTie+")").children().attr("class");
           
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
//selection première case directe apres notre vaisseau pour chercher vaisseau ennemi
function firstCell(){
    let cellule = $("#tie").parent('td').index();
    let ligne = $("#tie").parent(cellule).parent('tr').index();
    let choiceSel =["tr:eq("+(ligne+1)+") td:eq("+cellule+")", "tr:eq("+(ligne-1)+") td:eq("+cellule+")", "tr:eq("+ligne+") td:eq("+(cellule+1)+")", "tr:eq("+ligne+") td:eq("+(cellule-1)+")"];
    let i;
        for(i=0; i<choiceSel.length; i++){
            if($(choiceSel[i]).children().attr("id") == "xwing"){
            setTimeout(fightJ2, 700);
            }
        }
}
firstCell();

//texte de tour par tour
$(".crawl").hide();
let textTie = ["C'est à votre tour Seigneur Noir", "C'est au côté obscur de jouer", "Détruisez l'alliance !!", "Pourchassez ce Rebel", "au tour du Sith"];
let mess =  Math.floor(textTie.length * Math.random());
$("#mess1").html(textTie[mess]); 

// fonction qui selectionne les cases cliquables
function lignesClic(vaisseau, incre, angle){ 
    const nbTour = 3;
    let i = 0;
    let numlign = recuperationPlacement(vaisseau).ligne;
    let numCell = recuperationPlacement(vaisseau).cellule;
    
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

            // son de deplacement
            let sonTheme = document.getElementById('son4');
            sonTheme.volume = 0.6;
            sonTheme.play();

            $(".arm1").show();
            $(".arm2").show();
            $(".arm3").show();
            $(".arm4").show();
            $(".arm5").show();
            $(this).append($(vaisseau));

            //defini l'angle de l'image
            let image = document.getElementById("tie");
            image.style.transform = angle;

            $('td').css('background', 'url(images/fondSW.png) fixed');
            $('td').off('click');
            joueur1();
           });
   }
    // case occuppée par le vaisseau ennemi
    else if ($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("id") === "xwing"){
        return;
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
 
                 // son de deplacement
                 let sonTheme = document.getElementById('son4');
                 sonTheme.volume = 0.6;
                 sonTheme.play();

               // change vaisseau en arme
               let shipReplace = $(this).children().attr("class");
               switch(shipReplace){
                   case "shipTie":
                   $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                       break;
                   case "shipTie1" :
                   $(vaisseau1.spriteArme).replaceAll(vaisseau);
                       break;
                   case "shipTie2" :
                   $(vaisseau2.spriteArme).replaceAll(vaisseau);
                       break;
                   case "shipTie3" :
                   $(vaisseau3.spriteArme).replaceAll(vaisseau);
                       break;
                   case "shipTie4" :
                   $(vaisseau4.spriteArme).replaceAll(vaisseau);
                       break;
                   default : 
                       return;
               }

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
                $(this).append(vaisseauIni.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){
            
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                $(this).empty();
                $(this).append($(vaisseau));

                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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

                $(this).append(vaisseau1.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                
                $(this).append(vaisseau2.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                
                $(this).append(vaisseau3.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                
                $(this).append(vaisseau4.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').off('click');
                $('td').css('background', 'url(images/fondSW.png) fixed');
                interfaceJ2();
                joueur1();
            });
        }

    }

    else{
        return;
        }

    }
};

// selection cases cliquables horizontalement et leurs évènements au clic.
function lignesHorzClic(vaisseau, incre, angle){ 
    const nbTour = 3;
    let i = 0;
    let x;
    let numlign = recuperationPlacement(vaisseau).ligne;
    let numCell = recuperationPlacement(vaisseau).cellule;

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

            // son de deplacement
            let sonTheme = document.getElementById('son4');
            sonTheme.volume = 0.6;
            sonTheme.play();

            $(".arm1").show();
            $(".arm2").show();
            $(".arm3").show();
            $(".arm4").show();
            $(".arm5").show();
            $(this).append($(vaisseau));

             //defini l'angle de l'image
             let image = document.getElementById("tie");
             image.style.transform = angle;

            $('td').css('background', 'url(images/fondSW.png) fixed');
            $('td').off('click');
            joueur1();   
           });
   }
    // case occuppée par le vaisseau ennemi
    else if ($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("id") === "xwing"){
        return;
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

                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                
                $(this).append(vaisseauIni.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                

                $(this).append(vaisseau1.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                
                $(this).append(vaisseau2.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                
                $(this).append(vaisseau3.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').off('click');
                interfaceJ2();
                joueur1();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                // son de deplacement
                let sonTheme = document.getElementById('son4');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipTie":
                    $(vaisseauIni.spriteArmeTie).replaceAll(vaisseau);
                        break;
                    case "shipTie1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipTie4" :
                    $(vaisseau4.spriteArme).replaceAll(vaisseau);
                        break;
                    default : 
                        return;
                }

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
                
                $(this).append(vaisseau4.spriteTie);

                 //defini l'angle de l'image
                 let image = document.getElementById("tie");
                 image.style.transform = angle;

                $('td').off('click');
                interfaceJ2();
                joueur1();
                
            });
        }

    }

    else{
        return;
        }

    }
};

    lignesClic("#tie", +1, "rotate(90deg)");
    lignesClic("#tie", -1, "rotate(270deg)");
    lignesHorzClic("#tie", +1, "rotate(0deg)");
    lignesHorzClic("#tie", -1, "rotate(180deg)");
}
