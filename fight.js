// fonction attaque du joueur1
function fightJ1(){
    // on cache le damier et on affiche la nouvelle interface
    $("#tab").hide();
    $(".btnAtt1, .btnDef1, .btnAtt2, .btnDef2").show();
    $("#sectionJoueur").css("width", "100%");
    $(".joueur1, .joueur2").css({"width":"42%", "height":"200","margin":"30px 5px"});
    $("#players").css({"display":"flex", "height":"250px", "margin":"0 auto", "flex-direction":"row"});
    $("#image").css({
        "width":"200px",
        "height":"200px",
        "border":"1px #feda4a solid",
        "margin":"30px 0px"});

        // petite phrase à ajouter
        let textXw = ["--ALLIANCE--<br> Quel beau tir !!","--ALLIANCE--<br>Que la Force soit avec vous", "--ALLIANCE--<br>Son Tie est presque totalement détruit ! Finissez en !","--ALLIANCE--<br>A votre tour Jedi !","--ALLIANCE--<br>En plein dans le mille !"];
        let mess =  Math.floor(textXw.length * Math.random());
        $("#mess1").html(textXw[mess]); 
        
        // animation Gif
        let gifXw = ['<img src="images/xwGif.gif" height="180" width="180">', 
        '<img src="images/xwgif1.gif" height="180" width="180">', 
        '<img src="images/xwgif2.gif" height="180" width="180">']
        let gif = Math.floor(gifXw.length * Math.random()); 
        $("#imageP").empty();
        $("#imageP").append(gifXw[gif]);

        //changement couleur boutons
        $(".btnAtt1, .btnDef1").css("background-color", "green");
            // au clic du bouton attaque
            $(".btnAtt1").on("click",function(){
                // son de tir
            var sonTheme = document.getElementById('son3');
            sonTheme.volume = 0.9;
            sonTheme.play();

                if(joueurTie.pv > 0 && joueurTie.pv <= 100){
                    //evolution des points de vies
                    let degat = $("#degats1").text();
                    switch(degat){
                    case "10": 
                        joueurTie.pv = joueurTie.pv-vaisseauIni.degats;
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    case "20": 
                        joueurTie.pv = joueurTie.pv-vaisseau1.degats;
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    case "25": 
                        joueurTie.pv = joueurTie.pv-vaisseau2.degats;
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    case "30":
                        joueurTie.pv = joueurTie.pv-vaisseau3.degats;
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2"); 
                    break;
                    case "35": 
                        joueurTie.pv = joueurTie.pv-vaisseau4.degats;
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    default:
                    return;
                    }
                    // si joueur adverse n'a plus de points
                    if(joueurTie.pv <= 0){
                        $("#imageP").empty();
                        $("#imageP").append('<img src="images/tieExp.gif" height="180" width="180">');
                        var sonTheme = document.getElementById('son6');
                        sonTheme.volume = 0.9;
                        sonTheme.play();
                        $("#mess1").html("--ALLIANCE--<br> VICTOIRE !!");
                        $(".messages").css("background","green");
                        $("#pv2").text("0");
                        $("button").hide();
                        return;
                            }
                }   
                //fin de tour passage joueur 2
                $("button").off("click");
                $(".btnAtt1, .btnDef1").css("background-color", "red");
                fightJ2();
            });

            // au clic du bouton défendre:
            $(".btnDef1").on("click",function(){
                $(".btnAtt1, .btnDef1").css("background-color", "red");
                $("button").off("click");
                defJ2();
                return;
            });
    return;
}
//fonction combat joueur2
function fightJ2(){
    // on cache le damier et on affiche la nouvelle interface
    $("#tab").hide();
    $(".btnAtt1, .btnDef1, .btnAtt2, .btnDef2").show();
    $("#sectionJoueur").css("width", "100%");
    $(".joueur1, .joueur2").css({"width":"42%", "height":"200","margin":"30px 5px"});
    $("#players").css({"display":"flex", "height":"250px", "flex-direction":"row", "margin":"0 auto"});
    $("#image").css({
        "width":"200px",
        "height":"200px",
        "border":"1px #feda4a solid",
        "margin":"30px 0px"});

        //texte de tour par tour
        let textTie = ["--EMPIRE--<br>DETRUISEZ CETTE VERMINE !", "--EMPIRE--<br>Vous êtes un Destructeur !", "--EMPIRE--<br>Détruisez l'alliance !!", "--EMPIRE--<br>Pourchassez ce Rebel", "--EMPIRE--<br>Au Prochain Tir l'Alliance aura failli !"];
        let mess =  Math.floor(textTie.length * Math.random());
        $("#mess1").html(textTie[mess]); 

        //Animation gif
        let gifTie = ['<img src="images/tieVid.gif" height="180" width="180">', 
        '<img src="images/tiegif1.gif" height="180" width="180">', 
        '<img src="images/tiegif2.gif" height="180" width="180">',
        '<img src="images/tiegif3.gif" height="180" width="180">']
        let gif = Math.floor(gifTie.length * Math.random()); 
        $("#imageP").empty();
        $("#imageP").append(gifTie[gif]);

            //changement couleur boutons
            $(".btnAtt2, .btnDef2").css("background-color", "green");
                // au clic bouton Attaque:
                $(".btnAtt2").on("click",function(){
                    // son de tir
                    var sonTheme = document.getElementById('son2');
                    sonTheme.volume = 0.9;
                    sonTheme.play();

                if(joueurXw.pv>0 && joueurXw.pv<=100){
                    // modification des points de vies
                    let degat = $("#degats2").text();
                    switch(degat){
                    case "10": 
                        joueurXw.pv = joueurXw.pv-vaisseauIni.degats;
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "20": 
                        joueurXw.pv = joueurXw.pv-vaisseau1.degats;
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "25": 
                        joueurXw.pv = joueurXw.pv-vaisseau2.degats;
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "30":
                        joueurXw.pv = joueurXw.pv-vaisseau3.degats;
                        $("#pv1").text(`${joueurXw.pv}`); 
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "35": 
                        joueurXw.pv = joueurXw.pv-vaisseau4.degats;
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    default:
                    return;
                }
                // si joueur adverse n'a plus de points à perdu
                if(joueurXw.pv<=0){
                    $("#imageP").empty();
                    $("#imageP").append('<img src="images/xwExp.gif" height="180" width="180">');
                    var sonTheme = document.getElementById('son6');
                    sonTheme.volume = 0.9;
                    sonTheme.play();
                    $("#mess1").html("--EMPIRE--<br> VICTOIRE !!");
                    $(".messages").css("background","red");
                    $("#pv1").text("0");
                    $("button").hide();
                    return;
                    }
            }
           
                // fin de tour et passage joueur 1
                $("button").off("click");
                $(".btnAtt2, .btnDef2").css("background-color", "red");
                fightJ1();
                return;
            });
            // au clic du bouton défense
            $(".btnDef2").on("click",function(){
                $(".btnAtt2, .btnDef2").css("background-color", "red");
                $("button").off("click");
                defJ1();
            });
return;
}

//anime la barre de vie
function barreVie(degatsPerso, barre){
    let deg = degatsPerso;
     $(barre).animate({height: "100%"}, 1000)
     .animate({width: degatsPerso+"%"}, 1000);   
}

//click DEFENSE
function defJ1(){

    console.log("defJ1");
    $("#tab").hide();
    $(".btnAtt1, .btnDef1, .btnAtt2, .btnDef2").show();
    $("#sectionJoueur").css("width", "100%");
    $(".joueur1, .joueur2").css({"width":"42%", "height":"200","margin":"30px 5px"});
    $("#players").css({"display":"flex", "height":"250px"});
    $("#image").css({
        "width":"200px",
        "height":"200px",
        "border":"1px grey solid",
        "margin":"30px 0px"});

        // petite phrase à ajouter
        $("#mess1").html("--ALLIANCE-- Vous êtes affaiblis"); 
        
        // animation Gif
        let gifXw = ['<img src="images/xwGif.gif" height="180" width="180">', 
        '<img src="images/xwgif1.gif" height="180" width="180">', 
        '<img src="images/xwgif2.gif" height="180" width="180">']
        let gif = Math.floor(gifXw.length * Math.random()); 
        $("#imageP").empty();
        $("#imageP").append(gifXw[gif]);

        //changement couleur boutons
        $(".btnAtt1, .btnDef1").css("background-color", "green");

            $(".btnAtt1").on("click",function(){
                // son de deplacement
            var sonTheme = document.getElementById('son3');
            sonTheme.volume = 0.9;
            sonTheme.play();
                if(joueurTie.pv > 0 && joueurTie.pv <= 100){
                    // inflige 50% des dégats initiaux
                    let degat = $("#degats1").text();
                    switch(degat){
                    case "10": 
                        joueurTie.pv = joueurTie.pv-(vaisseauIni.degats/2);
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    case "20": 
                        joueurTie.pv = joueurTie.pv-(vaisseau1.degats/2);
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    case "25": 
                        joueurTie.pv = joueurTie.pv-(vaisseau2.degats/2);
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    case "30":
                        joueurTie.pv = joueurTie.pv-(vaisseau3.degats/2);
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2"); 
                    break;
                    case "35": 
                        joueurTie.pv = joueurTie.pv-(vaisseau4.degats/2);
                        $("#pv2").text(`${joueurTie.pv}`);
                        barreVie(joueurTie.pv, "#bvimg2");
                    break;
                    default:
                    return;
                    }
                    if(joueurTie.pv <= 0){
                        $("#imageP").empty();
                        $("#imageP").append('<img src="images/tieExp.gif" height="180" width="180">');
                        var sonTheme = document.getElementById('son6');
                        sonTheme.volume = 0.9;
                        sonTheme.play();
                        $("#mess1").html("--ALLIANCE--<br> VICTOIRE !!");
                        $(".messages").css("background","green");
                        $("#pv2").text("0");
                        $("button").hide(); 
                        return;
                            }
                }   

                $("button").off("click");
                console.log(joueurTie.pv);
                $(".btnAtt1, .btnDef1").css("background-color", "red");
                fightJ2();
                return;
            });

            $(".btnDef1").on("click",function(){
                $(".btnAtt1, .btnDef1").css("background-color", "red");
                $("button").off("click");
                defJ2();
                return;
            });
    return;
}

function defJ2(){
    console.log("fonction defJ2");
    $("#tab").hide();
    $(".btnAtt1, .btnDef1, .btnAtt2, .btnDef2").show();
    $("#sectionJoueur").css("width", "100%");
    $(".joueur1, .joueur2").css({"width":"42%", "height":"200","margin":"30px 5px"});
    $("#players").css({"display":"flex", "height":"250px"});
    $("#image").css({
        "width":"200px",
        "height":"200px",
        "border":"1px grey solid",
        "margin":"30px 0px"});

        //texte de tour par tour
        $("#mess1").html("--EMPIRE-- Vous êtes affaibli"); 

        //Animation gif
        let gifTie = ['<img src="images/tieVid.gif" height="180" width="180">', 
        '<img src="images/tiegif1.gif" height="180" width="180">', 
        '<img src="images/tiegif2.gif" height="180" width="180">',
        '<img src="images/tiegif3.gif" height="180" width="180">']
        let gif = Math.floor(gifTie.length * Math.random()); 
        $("#imageP").empty();
        $("#imageP").append(gifTie[gif]);

            //changement couleur boutons
            $(".btnAtt2, .btnDef2").css("background-color", "green");
                
                $(".btnAtt2").on("click",function(){
                    var sonTheme = document.getElementById('son2');
                    sonTheme.volume = 0.9;
                    sonTheme.play();

                if(joueurXw.pv>0 && joueurXw.pv<=100){
                    // inflige 50% des dégats initiaux
                    let degat = $("#degats2").text();
                    switch(degat){
                    case "10": 
                        joueurXw.pv = joueurXw.pv-(vaisseauIni.degats/2);
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "20": 
                        joueurXw.pv = joueurXw.pv-(vaisseau1.degats/2);
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "25": 
                        joueurXw.pv = joueurXw.pv-(vaisseau2.degats/2);
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "30":
                        joueurXw.pv = joueurXw.pv-(vaisseau3.degats/2);
                        $("#pv1").text(`${joueurXw.pv}`); 
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    case "35": 
                        joueurXw.pv = joueurXw.pv-(vaisseau4.degats/2);
                        $("#pv1").text(`${joueurXw.pv}`);
                        barreVie(joueurXw.pv, "#bvimg1");
                    break;
                    default:
                    return;
                }
                if(joueurXw.pv<=0){
                    $("#imageP").empty();
                    $("#imageP").append('<img src="images/xwExp.gif" height="180" width="180">');
                    var sonTheme = document.getElementById('son6');
                    sonTheme.volume = 0.9;
                    sonTheme.play();
                    $("#mess1").html("--EMPIRE--<br> VICTOIRE !!");
                        $(".messages").css("background","green");
                        $("#pv1").text("0");
                        $("button").hide(); 
                    return;
                    }
            }
           

                $("button").off("click");
                $(".btnAtt2, .btnDef2").css("background-color", "red");
                fightJ1();
                return;
            });

            $(".btnDef2").on("click",function(){
                $(".btnAtt2, .btnDef2").css("background-color", "red");
                $("button").off("click");
                defJ1();
                return;
            });
return;
}