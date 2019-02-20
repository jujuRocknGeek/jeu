function start(){
    $(".btnAtt1, .btnDef1, .btnAtt2, .btnDef2").hide();
    let i = 0; 

        $("#mess").append("il y a bien longtemps, dans une galaxie lointaine, très lointaine...");
        $("#b1").on('click', function(){

            var sonTheme = document.getElementById('son1');
            sonTheme.volume = 0.02;
            sonTheme.play();
            $("#mess").hide();
            $(".crawl").html('  <div class="title"><FONT size="7">STAR WARS<br><br></font></p><p style="color:#feda4a";>Episode IV</p><h1 style="color:#feda4a";>Champ De Battaille Pour La Galaxie</h1></div><p style="color:#feda4a";>La lutte pour le contrôle de la Galaxie est toujours intense entre l\'Alliance et l\'Empire.</p><p style="color:#feda4a";>Luke Skywalker, est en mission d\'éclaireur afin de trouver un itinéraire sûr, dans lequel doit passer un convoi secret qui contient une copie des plans de l\'étoile de la mort. Ce convoi doit cacher les plans au temple Jedi sur Coruscant au cas où l\'empire viendrait à retrouver le seul fichier que les rebelles ont pu voler sur Scarif.</p><p style="color:#feda4a";>Mais l\'Empire à aussi deployé tous ces chasseurs pour retrouver leur précieux plan. C\'est dans un champs d\'astéroide qu\'un chasseur Tie trouve l\'X-Wing rebelle.</p><p style="color:#feda4a";>Vous devrez vous battre au tour par tour. Récuperez des vaisseaux plus puissants afin d\'augmenter vos chances de victoire. Puis affrontez vous dans un duel à mort afin de reprendre le contrôle et restaurer la paix dans la Galaxie...</p><p style="color:#feda4a";>Prêts ? Cliquez Sur JOUER ! Que la Force soit avec vous !... </p>'); 
                $("#b1").html("JOUEZ");
                    $("#b1").on('click', function(){
                        $(".crawl").stop();
                       joueur1();
                       $(this).hide();
                    });
        });
};
start();

function interfaceJ1(){
    let vaisseau = $("tr:eq("+recuperationPlacement("#xwing").ligne+") td:eq("+recuperationPlacement("#xwing").cellule+")").find("#xwing").attr("class");
    switch(vaisseau){
        case "shipXw":
            $("#nomV1").text(vaisseauIni.shipNameXw);
            $("#degats1").text(vaisseauIni.degats);
            $("#pv1").text(joueurXw.pv);
        break;
        case "shipXw1":
            $("#nomV1").text(vaisseau1.shipNameXw);
            $("#degats1").text(vaisseau1.degats);
            $("#pv1").text(joueurXw.pv);
        break;
        case "shipXw2":
            $("#nomV1").text(vaisseau2.shipNameXw);
             $("#degats1").text(vaisseau2.degats);
             $("#pv1").text(joueurXw.pv);
        break;
        case "shipXw3":
            $("#nomV1").text(vaisseau3.shipNameXw);
            $("#degats1").text(vaisseau3.degats);
            $("#pv1").text(joueurXw.pv);
        break;
        case "shipXw4":
            $("#nomV1").text(vaisseau4.shipNameXw);
            $("#degats1").text(vaisseau4.degats);
            $("#pv1").text(joueurXw.pv);
        break;
        default:
            return;
    }
}

function interfaceJ2(){
    let vaisseau = $("tr:eq("+recuperationPlacement("#tie").ligne+") td:eq("+recuperationPlacement("#tie").cellule+")").find("#tie").attr("class");
    switch(vaisseau){
        case "shipTie":
            $("#nomV2").text(vaisseauIni.shipNameTie);
            $("#degats2").text(vaisseauIni.degats);
            $("#pv2").text(joueurTie.pv);
        break;
        case "shipTie1":
            $("#nomV2").text(vaisseau1.shipNameTie);
            $("#degats2").text(vaisseau1.degats);
            $("#pv2").text(joueurTie.pv);
        break;
        case "shipTie2":
            $("#nomV2").text(vaisseau2.shipNameTie);
             $("#degats2").text(vaisseau2.degats);
             $("#pv2").text(joueurTie.pv);
        break;
        case "shipTie3":
            $("#nomV2").text(vaisseau3.shipNameTie);
            $("#degats2").text(vaisseau3.degats);
            $("#pv2").text(joueurTie.pv);
        break;
        case "shipTie4":
            $("#nomV2").text(vaisseau4.shipNameTie);
            $("#degats2").text(vaisseau4.degats);
            $("#pv2").text(joueurTie.pv);
        break;
        default:
            return;
    }
}
interfaceJ2();
interfaceJ1();
