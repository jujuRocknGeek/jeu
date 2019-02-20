'use strict';
// selection des cases cliquables verticalement
function joueur1(){
//on cherche a savoir si il y a une arme sur la case afin de la cacher pour ne pas avoir doublon avec vaisseau
let recupligneXw = recuperationPlacement("#xwing").ligne;
let recupCellXw = recuperationPlacement("#xwing").cellule;
if($("tr:eq("+recupligneXw+") td:eq("+recupCellXw+")").children().attr("id") == "arm"){
let arme = $("tr:eq("+recupligneXw+") td:eq("+recupCellXw+")").children().attr("class");

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
// petite phrase à ajouter
    $(".crawl").hide();
    let textXw = ["C'est au tour de L'Alliance","Que la Force soit avec vous", "Poursuivez l'Empire coute que coute !","A votre tour Jedi !"];
    let mess =  Math.floor(textXw.length * Math.random());
    $("#mess1").html(textXw[mess]); 

//selection première case directe apres notre vaisseau pour chercher vaisseau ennemi
    function firstCell(){
        let cellule = $("#xwing").parent('td').index();
        let ligne = $("#xwing").parent(cellule).parent('tr').index();
        let choiceSel =["tr:eq("+(ligne+1)+") td:eq("+cellule+")", "tr:eq("+(ligne-1)+") td:eq("+cellule+")", "tr:eq("+ligne+") td:eq("+(cellule+1)+")", "tr:eq("+ligne+") td:eq("+(cellule-1)+")"];
        let i;
            for(i=0; i<choiceSel.length; i++){
                if($(choiceSel[i]).children().attr("id") == "tie"){
                setTimeout(fightJ1, 700);
                }
            }
    };
    firstCell();

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
            
            let sonTheme = document.getElementById('son5');
            sonTheme.volume = 0.6;
            sonTheme.play();

            $(".arm1").show();
            $(".arm2").show();
            $(".arm3").show();
            $(".arm4").show();
            $(".arm5").show();
            $(this).append($(vaisseau));

            //defini l'angle de l'image
            let image = document.getElementById("xwing");
            image.style.transform = angle;

            $('td').css('background', 'url(images/fondSW.png) fixed');
            $('td').off('click');
            joueur2();
           });
   }

   
    // case occuppée par le vaisseau ennemi
    else if ($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("id") == "tie"){
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
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                //on vide la cellule et déplace notre vaisseau
                $(this).empty();
                $(this).append($(vaisseau));
                
                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                $(this).append(vaisseauIni.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){
            
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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

                $(this).append(vaisseau1.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){
            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                
                $(this).append(vaisseau2.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                
                $(this).append(vaisseau3.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){

                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                
                $(this).append(vaisseau4.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').off('click');
                $('td').css('background', 'url(images/fondSW.png) fixed');
                interfaceJ1();
                joueur2();
            });
        }

    }

    else{
        return;
        }

    }
};

//la fonction selectionne les cases clicables horizontalement
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
            let sonTheme = document.getElementById('son5');
            sonTheme.volume = 0.6;
            sonTheme.play();

            $(".arm1").show();
            $(".arm2").show();
            $(".arm3").show();
            $(".arm4").show();
            $(".arm5").show();
            $(this).append($(vaisseau));

            //defini l'angle de l'image
            let image = document.getElementById("xwing");
            image.style.transform = angle;

            $('td').css('background', 'url(images/fondSW.png) fixed');
            $('td').off('click');
            joueur2();  
           });
   }
    // case occuppée par le vaisseau ennemi
    else if ($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("id") === "xwing" || $("tr:eq("+numlign+") td:eq("+numCell+")").children().attr("id") === "tie"){
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
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                
                $(this).append(vaisseauIni.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm2"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                

                $(this).append(vaisseau1.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm3"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                
                $(this).append(vaisseau2.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm4"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                
                $(this).append(vaisseau3.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').off('click');
                interfaceJ1();
                joueur2();
            });
        }

        if($("tr:eq("+numlign+")  td:eq("+numCell+")").children().attr("class") === "arm5"){

            $("tr:eq("+numlign+") td:eq("+numCell+")").click(function(){
                // son de deplacement
                let sonTheme = document.getElementById('son5');
                sonTheme.volume = 0.6;
                sonTheme.play();

                $('td').css('background', 'url(images/fondSW.png) fixed');
                $(this).empty();
                $(this).append($(vaisseau));

                // change vaisseau en arme
                let shipReplace = $(this).children().attr("class");
                switch(shipReplace){
                    case "shipXw":
                    $(vaisseauIni.spriteArmeXw).replaceAll(vaisseau);
                        break;
                    case "shipXw1" :
                    $(vaisseau1.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw2" :
                    $(vaisseau2.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw3" :
                    $(vaisseau3.spriteArme).replaceAll(vaisseau);
                        break;
                    case "shipXw4" :
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
                
                $(this).append(vaisseau4.spriteXw);

                //defini l'angle de l'image
                let image = document.getElementById("xwing");
                image.style.transform = angle;

                $('td').off('click');
                interfaceJ1();
                joueur2();
                
            });
        }

    }

    else{
        return;
        }

    }
};
    lignesClic("#xwing", +1, "rotate(90deg)");
    lignesClic("#xwing", -1, "rotate(270deg)");
    lignesHorzClic("#xwing", +1, "rotate(0deg)");
    lignesHorzClic("#xwing", -1, "rotate(180deg)");

}
    
    




