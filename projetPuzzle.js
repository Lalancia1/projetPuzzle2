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

//pour les objets
function parcourirTab(tableau) {
    var numero = Math.random();
    var objetsNombres = (Math.floor(numero*tableau.length));
    return objetsNombres;

}

//******************************************************************************************************
var ajouterUl = document.getElementById('ajouter');
var  phrases="x";

var add = -1;

//*******************************************************************************************
 var numeroLieu= parcourirTab(lieux);
console.log("ici lieux "+numeroLieu);
var NameNombres= parcourirTab(noms);

//*****************************************************************************************************************************

//function Generer_une_histoire(){
idBouton=document.getElementById("HISTOIRE");
idBouton.addEventListener("click",function(){
    var idInput=document.getElementById('entrez');//user
       var userName=idInput.value;

    var temperaturesNombres=parcourirTab(temperatures);
    var  verbeNombres=parcourirTab(verbes);
    var  placeNombres = parcourirTab(lieux);
    var nameNombres= parcourirTab(noms);
    var objetsNombres= parcourirTab(objet);



                        if (userName) {

                            phrases = 'il était une fois,' + " " + noms[nameNombres] + " " + "et" + " " + idInput.value + " " + "avaient été" + " " + verbes[verbeNombres] + " " + "par" + " " + temperatures[temperaturesNombres] + " " + "de température" + ";" + " " + 'sa maison se trouvait dans' + " " + lieux[placeNombres] + " " + "et" + " " + 'contenait' + " " + "des" + " " + objet[objetsNombres] + '.';

                            var li = document.createElement('li');
                            li.innerHTML = phrases;
                            ajouterUl.appendChild(li);


                        }
});



/*


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
     */


