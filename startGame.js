function Start(){
    let text = [ 
        "Vous allez vous affronter dans un duel spacial épique, où seul le plus fort gagnera.",
        "Le Joueur 1 sera le pilote de L'Alliance Rebelle</br>Le joueur 2 sera le pilote de L'Empire Sith",
        "Etes-vous prêts au combat !?",
        "C'est parti pour le Joueur 1 !"];
    let i = 0; 

        $("#mess").append("Bienvenue à vous jeunes pilotes de la Galaxie!");
        $("#b1").on('click', function(){

            $("#mess").html(text[i]); 
            i++;
            console.log($("#mess").text() == text[3])
            if($("#mess").text() == text[3]){
                $("#b1").html("JOUEZ");
                    $("#b1").on('click', function(){
                       Joueur1();
                    });
            }
        });
};
Start();

function interfaceJ1(){
    let vaisseau = $("tr:eq("+RecuperationPlacement("#xwing").ligne+") td:eq("+RecuperationPlacement("#xwing").cellule+")").find("#xwing").attr("class");
    switch(vaisseau){
        case "shipXw":
            $("#nomV1").text(vaisseauIni.shipNameXw);
            $("#degats1").text(vaisseauIni.degats);
        break;
        case "shipXw1":
            $("#nomV1").text(vaisseau1.shipNameXw);
            $("#degats1").text(vaisseau1.degats);
        break;
        case "shipXw2":
            $("#nomV1").text(vaisseau2.shipNameXw);
             $("#degats1").text(vaisseau2.degats);
        break;
        case "shipXw3":
            $("#nomV1").text(vaisseau3.shipNameXw);
            $("#degats1").text(vaisseau3.degats);
        break;
        case "shipXw4":
            $("#nomV1").text(vaisseau4.shipNameXw);
            $("#degats1").text(vaisseau4.degats);
        break;
        default:
            return;
    }
}

function interfaceJ2(){
    let vaisseau = $("tr:eq("+RecuperationPlacement("#tie").ligne+") td:eq("+RecuperationPlacement("#tie").cellule+")").find("#tie").attr("class");
    switch(vaisseau){
        case "shipTie":
            $("#nomV2").text(vaisseauIni.shipNameTie);
            $("#degats2").text(vaisseauIni.degats);
        break;
        case "shipTie1":
            $("#nomV2").text(vaisseau1.shipNameTie);
            $("#degats2").text(vaisseau1.degats);
        break;
        case "shipTie2":
            $("#nomV2").text(vaisseau2.shipNameTie);
             $("#degats2").text(vaisseau2.degats);
        break;
        case "shipTie3":
            $("#nomV2").text(vaisseau3.shipNameTie);
            $("#degats2").text(vaisseau3.degats);
        break;
        case "shipTie4":
            $("#nomV2").text(vaisseau4.shipNameTie);
            $("#degats2").text(vaisseau4.degats);
        break;
        default:
            return;
    }
}
interfaceJ2();
interfaceJ1();
