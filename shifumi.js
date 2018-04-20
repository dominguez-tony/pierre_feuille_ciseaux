


var ciseaux = document.getElementById("Ciseaux");
var feuille = document.getElementById("Feuille");
var pierre = document.getElementById("Pierre");
var scoreJoueur = 0;
var scoreIA = 0;
var egalite = 0;
var notreChoix = document.getElementById("notreChoix");
var choixIA = document.getElementById("choixIA");
var AffScore = document.getElementById("AffScore");
var ZoneDeTexte = document.getElementById("ZoneDeTexte");




function faireUnTirage() {
    rdm = Math.floor(Math.random() * 3);
    switch (rdm) {
        case 0:
            return "Pierre";
        case 1:
            return "Feuille";
        case 2:
            return "Ciseaux";
    }

}

function comparer(choixJoueur, tirage) {
    if ( choixJoueur === tirage ) {
        egalite = egalite + 1;
        return "Egalité";
    } else if ( (choixJoueur === "Pierre" && tirage === "Feuille") ||
                (choixJoueur === "Feuille" && tirage === "Ciseaux") ||
                (choixJoueur === "Ciseaux" && tirage === "Pierre"))
    {
        scoreIA = scoreIA + 1;
        return "Vous avez perdu !!!";
    } else {
        scoreJoueur = scoreJoueur + 1;
        return "Vous avez gagné !!!";
    }
}


function jeu(choixJoueur) {
    var choixJoueur = choixJoueur;
    var tirage;
    var resultat;
    
    tirage = faireUnTirage();
    resultat = comparer(choixJoueur, tirage);
    ZoneDeTexte.innerHTML = '<h1>' + resultat + '</h1>';
    AffScore.innerHTML = '<h2>' + "Joueur : " + scoreJoueur + " IA : " + scoreIA + " Egalités : " + egalite  + '</h2>';
    notreChoix.classList = choixJoueur;
    choixIA.classList = tirage;




    // console.log("---------------------------------");
    // console.log("Le tirage : " + tirage);
    // console.log("Le choix du joueur : " + choixJoueur);
    // confirm(resultat);
    
}


ciseaux.addEventListener("click", function(){jeu("Ciseaux")});
pierre.addEventListener("click", function(){jeu("Pierre")});
feuille.addEventListener("click", function(){jeu("Feuille")});




