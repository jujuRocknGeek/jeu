function Start(){
    $(".btnAtt1, .btnDef1, .btnAtt2, .btnDef2").hide();
    let text = [ 
        "STAR WARS<br>Bataille pour la Galaxie",
        "Le Joueur 1 sera le pilote de L'Alliance Rebelle</br>Le joueur 2 sera le pilote de L'Empire Sith",
        "Déplacez-vous de 1 à 3 cases verticalement ou horizontalement",
        "Cherchez à améliorer votre vaisseau spatial et ensuite affrontez votre adversaire en duel à mort !",
        "Etes-vous prêts au combat !? C'est parti pour le Joueur 1 !"];
    let i = 0; 

        $("#mess").append("il était une fois dans une galaxie lointaine, très lointaine...");
        $("#b1").on('click', function(){

            var sonTheme = document.getElementById('son1');
            sonTheme.volume = 0.02;
            sonTheme.play();

            $("#mess").html(text[i]); 
            i++;
            console.log($("#mess").text() == text[3])
            if($("#mess").text() == text[4]){
                $("#b1").html("JOUEZ");
                    $("#b1").on('click', function(){
                       Joueur1();
                       $(this).hide();
                    });
            }
        });
};
Start();

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
