alert('bravo');
var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq',
    'Paris' , 'Batcave', 'Maubeuge', 'Réacteur nucléaire', 'Martinique',
    'Balamb garden', "L'enfer", 'Montbeilard', 'Namek', 'Londres', 'Une île',
    'Une cave', 'le Caire', 'New York', 'Le tampon', 'Berlaimont',];//21
var temperatures = ['30°C', '24°C', '-273.15K', '21°C', '42°C', '-38°C', '35°C', '584°C', '-8000°C', '28°C','20°C',' 37.2°C', '-30°C',
    '35°C', "hot", '27°C', '-100°C', '55°C' ];//18
 var objet = ['valise', 'poivier- connecté', 'épée', 'cahier', 'pneu', 'table', 'godsabre',
    'truelle',' madelaine', 'trident', 'pull-rose', 'pc', 'tisonnier', 'guimbarde', 'chandelier',
    'verre', 'table-bancale', 'arbre', 'souris', 'dague'];//20

var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson",
    "Kylian", "Georges-Clooney", "Quintus", "Anais", "Styvens", "Keen-V", "Ludovic",
    "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];//20

var verbes = ['Danser' ,'Frapper' ,'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager',
    'Recoudre', 'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];//15
//**********************************************************************************************************************************

//pour les variables aleatoire des noms
var NameIntervalNumber=Math.random();
var NameNombres= (Math.floor(NameIntervalNumber*name.length));
console.log(NameNombres+ "math 1");
//***************************************************************************************************************************
//pour les objets
function longueurTab(tableau) {
    var numero = Math.random();

    var numeroSansVirgule = (Math.floor(numero*tableau.length));
    console.log(objetsNombres+ "math 2");
    console.log(objetsNombres);
    return  objetsNombres;

}
 var numeroLieu= longueurTab(lieux);
console.log("ici lieux "+numeroLieu);
var NameNombres= longueurTab(noms);


//*********************************************************************************************
var nameIntervalNumber=Math.random();
var nameNombres= (Math.floor(nameIntervalNumber*noms.length));
console.log("MON NOM"+nameNombres);
//************************************************************************************************
var objetsIntervalNumber=Math.random();
var objetsNombres= (Math.floor(objetsIntervalNumber*objet.length));

//*****************************************************************************************************************************
//pour les temperatures
var temperaturesIntervalNumber=Math.random();
var temperaturesNombres= (Math.floor(temperaturesIntervalNumber*temperatures.length));
//******************************************************************************************************************************
//pour les lieux
var placeIntervalNumber=Math.random();
var placeNombres= (Math.floor( placeIntervalNumber*lieux.length));
//****************************************************************************************************************************
//vpour les verbes
var verbeIntervalNumber=Math.random();
var verbeNombres= (Math.floor( verbeIntervalNumber*verbes.length));
//****************************************************************************************************************************
/*association des elements et leurs index(fatiguée j'ai créé à nouveau des tableaux alors que l'exercice nous en fournissait :donc les noms
des tableaux sont:noms;objet;temperatures;lieux;verbes*************array[i]ici array=nom,i=nameNombre
 */

var associateNameIndex= noms[NameNombres];
alert(associateNameIndex);


//********************************************************************************************************************
//création du container pour l'evenement
var body=document.body;
var createDivContainer=document.createElement("div");
createDivContainer.setAttribute('id','container');
createDivContainer.setAttribute('class','reste');
createDivContainer.setAttribute('style','border:5px orange solid;width:800px;height:700px;');
body.appendChild(createDivContainer);
//*****************************************************************************************************************

var idInput=document.getElementById('entrez');
var idBouton= document.getElementById('HISTOIRE');

function Generer_une_histoire(){
idBouton.addEventListener("click",function(){
   // alert("button");
    for(var i=0;i<=name.length;i++){
        for( j=0; j<=objet.length; j++){
            for(var k=0;k<=temperatures.length;k++){
                for(var l=0; l<=lieux.length; l++){
                    console.log(lieux[numeroLieu]);
                  for( var m=0;m<=verbes.length;m++){
var idContainer=document.getElementById('container');
var idAjouter=document.getElementById('ajouter');
if(idInput.value) {

    idContainer.innerHTML += 'il était une fois,' + " " + noms[nameNombres] + " " + "et" + " " + idInput.value + " " + "avaient été" + " " + verbes[verbeNombres] + " " + "par" + " " + temperatures[temperaturesNombres] + " " + "de température" + ";" + " " + 'sa maison se trouvait dans' + " " + lieux[placeNombres] + " " + "et" + " " + 'contenait' + " " + "des" + " " + objet[objetsNombres] + '.';

}

                  }
                }
            }
        }}

});
}
Generer_une_histoire();
function ajout(){


        if(idInput.value) {
        var textGarder=document.createTextNode('il était une fois,' + " " + noms[nameNombres] + " " + "et" + " " + idInput.value + " " + "avaient été" + " " + verbes[verbeNombres] + " " + "par" + " " + temperatures[temperaturesNombres] + " " + "de température" + ";" + " " + 'sa maison se trouvait dans' + " " + lieux[placeNombres] + " " + "et" + " " + 'contenait' + " " + "des" + " " + objet[objetsNombres] + '.');
        idContainer.appendChild(textGarder);

    }if(idInput.value===""){
        idInput.value;
        Generer_une_histoire();
    }
        i++;
}
ajout();
   /*
   window.onload = function() { init1(); init2(); };pour le rechargement

    * for(var i = 0; i<objet.length; i++){
    *
        * for(var j = 0; i<lieux.length; i++){
        *for(var j = 0; i<temparature.length; i++){
        * tableau
        * console.log(objet[i] + lieux[j]+ );
        * }
        *
        * }

    * }
    *
    *
    *
    *
    *
    * */


