function getRandom(array) {
	var randomFloat = Math.random();
	var randomInt = Math.floor(array.length*randomFloat);
	try {
		return array[randomInt];
	} catch(e) {
		console.log('math error');
		return array[0];			
	}
}

var basRhinVillages = ["Achenheim","Adamswiller","Albé","Allenwiller","Alteckendorf","Altenheim","Altorf","Altwiller","Andlau","Artolsheim","Aschbach","Asswiller","Auenheim","Avolsheim","Baerendorf","Balbronn","Baldenheim","Barembach","Bassemberg","Batzendorf","Beinheim","Bellefosse","Belmont","Benfeld","Berg","Bergbieten","Bernardswiller","Bernardvillé","Bernolsheim","Berstett","Berstheim","Betschdorf","Bettwiller","Biblisheim","Bietlenheim","Bilwisheim","Bindernheim","Birkenwald","Bischholtz","Bischoffsheim","Bissert","Bitschhoffen","Blaesheim","Blancherupt","Blienschwiller","Boersch","Boesenbiesen","Bolsenheim","Boofzheim","Bootzheim","Bosselshausen","Bossendorf","Bourg-Bruche","Bourgheim","Bouxwiller","Breitenau","Breitenbach","Breuschwickersheim","La Broque","Buhl","Burbach","Bust","Buswiller","Butten","Châtenois","Cleebourg","Climbach","Colroy-la-Roche","Cosswiller","Crastatt","Croettwiller","Dachstein","Dahlenheim","Dalhunden","Dambach","Dambach-la-Ville","Dangolsheim","Daubensand","Dauendorf","Dehlingen","Dettwiller","Diebolsheim","Diedendorf","Dieffenbach-au-Val","Dieffenbach-lès-Woerth","Dieffenthal","Diemeringen","Dimbsthal","Dingsheim","Dinsheim-sur-Bruche","Domfessel","Donnenheim","Dorlisheim","Dossenheim-Kochersberg","Dossenheim-sur-Zinsel","Drachenbronn-Birlenbach","Drulingen","Drusenheim","Duntzenheim","Duppigheim","Durningen","Durrenbach","Durstel","Duttlenheim","Eberbach-Seltz","Ebersheim","Ebersmunster","Eckartswiller","Eckwersheim","Eichhoffen","Elsenheim","Engwiller","Entzheim","Epfig","Erckartswiller","Ergersheim","Ernolsheim-Bruche","Ernolsheim-lès-Saverne","Eschau","Eschbach","Eschbourg","Eschwiller","Ettendorf","Eywiller","Fegersheim","Fessenheim-le-Bas","Flexbourg","Forstfeld","Forstheim","Fort-Louis","Fouchy","Fouday","Friedolsheim","Friesenheim","Froeschwiller","Frohmuhl","Furchhausen","Furdenheim","Gambsheim","Geiswiller","Gerstheim","Gertwiller","Geudertheim","Gingsheim","Goerlingen","Goersdorf","Gottenhouse","Gottesheim","Gougenheim","Goxwiller","Grandfontaine","Grassendorf","Grendelbruch","Gresswiller","Gries","Griesheim-près-Molsheim","Griesheim-sur-Souffel","Gumbrechtshoffen","Gundershoffen","Gungwiller","Gunstett","Haegen","Handschuheim","Hangenbieten","Harskirchen","Hatten","Hattmatt","Hegeney","Heidolsheim","Heiligenberg","Heiligenstein","Hengwiller","Herbitzheim","Herbsheim","Herrlisheim","Hessenheim","Hilsenheim","Hindisheim","Hinsbourg","Hinsingen","Hipsheim","Hirschland","Hochfelden","Hochstett","Hoerdt","Hoffen","Hohatzenheim","Hohengoeft","Hohfrankenheim","Le Hohwald","Holtzheim","Hunspach","Hurtigheim","Huttendorf","Huttenheim","Ichtratzheim","Ingenheim","Ingolsheim","Ingwiller","Innenheim","Issenhausen","Ittenheim","Itterswiller","Jetterswiller","Kaltenhouse","Kauffenheim","Keffenach","Kertzfeld","Keskastel","Kesseldorf","Kienheim","Kilstett","Kindwiller","Kintzheim","Kirchheim","Kirrberg","Kirrwiller","Kleingoeft","Knoersheim","Kogenheim","Kolbsheim","Krautergersheim","Krautwiller","Kriegsheim","Kurtzenhouse","Kuttolsheim","Kutzenhausen","Lalaye","Lampertheim","Lampertsloch","Landersheim","Langensoultzbach","Laubach","Lauterbourg","Lembach","Leutenheim","Lichtenberg","Limersheim","Lipsheim","Littenheim","Lixhausen","Lobsann","Lochwiller","Lohr","Lorentzen","Lupstein","Lutzelhouse","Mackenheim","Mackwiller","Maennolsheim","Maisonsgoutte","Marckolsheim","Marlenheim","Marmoutier","Matzenheim","Meistratzheim","Melsheim","Memmelshoffen","Menchhoffen","Merkwiller-Pechelbronn","Mertzwiller","Mietesheim","Minversheim","Mittelbergheim","Mittelhausbergen","Mittelhausen","Mittelschaeffolsheim","Mollkirch","Mommenheim","Monswiller","Morsbronn-les-Bains","Morschwiller","Mothern","Muhlbach-sur-Bruche","Mulhausen","Munchhausen","Mussig","Muttersholtz","Mutzenhouse","Natzwiller","Neewiller-près-Lauterbourg","Neubois","Neugartheim-Ittlenheim","Neuhaeusel","Neuve-Église","Neuviller-la-Roche","Neuwiller-lès-Saverne","Niederbronn-les-Bains","Niederhaslach","Niederhausbergen","Niederlauterbach","Niedermodern","Niedernai","Niederroedern","Niederschaeffolsheim","Niedersoultzbach","Niedersteinbach","Nordheim","Nordhouse","Nothalten","Obenheim","Oberbronn","Oberdorf-Spachbach","Oberhaslach","Oberhausbergen","Oberhoffen-lès-Wissembourg","Oberhoffen-sur-Moder","Oberlauterbach","Obermodern-Zutzendorf","Oberroedern","Oberschaeffolsheim","Obersoultzbach","Obersteinbach","Odratzheim","Oermingen","Offendorf","Offwiller","Ohlungen","Ohnenheim","Olwisheim","Orschwiller","Osthoffen","Osthouse","Ottersthal","Otterswiller","Ottrott","Ottwiller","Petersbach","La Petite-Pierre","Pfaffenhoffen","Pfalzweyer","Pfettisheim","Pfulgriesheim","Plaine","Plobsheim","Preuschdorf","Printzheim","Puberg","Quatzenheim","Rangen","Ranrupt","Ratzwiller","Rauwiller","Reichsfeld","Reichstett","Reinhardsmunster","Reipertswiller","Retschwiller","Reutenbourg","Rexingen","Rhinau","Richtolsheim","Riedseltz","Rimsdorf","Ringeldorf","Ringendorf","Rittershoffen","Roeschwoog","Rohr","Rohrwiller","Romanswiller","Roppenheim","Rosenwiller","Rosheim","Rossfeld","Rosteig","Rothau","Rothbach","Rott","Rottelsheim","Rountzenheim","Russ","Saales","Saasenheim","Saessolsheim","Saint-Blaise-la-Roche","Saint-Jean-Saverne","Saint-Martin","Saint-Maurice","Saint-Nabor","Saint-Pierre","Saint-Pierre-Bois","Salenthal","Salmbach","Sand","Sarre-Union","Sarrewerden","Saulxures","Schaeffersheim","Schaffhouse-près-Seltz","Schaffhouse-sur-Zorn","Schalkendorf","Scharrachbergheim-Irmstett","Scheibenhard","Scherlenheim","Scherwiller","Schillersdorf","Schirmeck","Schirrhein","Schirrhoffen","Schleithal","Schnersheim","Schoenau","Schoenbourg","Schoenenbourg","Schopperten","Schweighouse-sur-Moder","Schwenheim","Schwindratzheim","Schwobsheim","Seebach","Seltz","Sermersheim","Sessenheim","Siegen","Siewiller","Siltzheim","Singrist","Solbach","Soufflenheim","Soultz-les-Bains","Soultz-sous-Forêts","Sparsbach","Stattmatten","Steige","Steinbourg","Steinseltz","Still","Stotzheim","Struth","Stundwiller","Stutzheim-Offenheim","Sundhouse","Surbourg","Thal-Drulingen","Thal-Marmoutier","Thanvillé","Tieffenbach","Traenheim","Triembach-au-Val","Trimbach","Truchtersheim","Uberach","Uhlwiller","Uhrwiller","Urbeis","Urmatt","Uttenheim","Uttenhoffen","Uttwiller","Valff","La Vancelle","Villé","Voellerdingen","Volksberg","Wahlenheim","Walbourg","La Walck","Waldersbach","Waldhambach","Waldolwisheim","Waltenheim-sur-Zorn","Wangen","Wangenbourg-Engenthal","Weinbourg","Weislingen","Weitbruch","Weiterswiller","Westhoffen","Westhouse","Westhouse-Marmoutier","Weyer","Weyersheim","Wickersheim-Wilshausen","Wildersbach","Willgottheim","Wilwisheim","Wimmenau","Windstein","Wingen","Wingen-sur-Moder","Wingersheim","Wintershouse","Wintzenbach","Wintzenheim-Kochersberg","Wisches","Witternheim","Wittersheim","Wittisheim","Wiwersheim","Woerth","Wolfisheim","Wolfskirchen","Wolschheim","Wolxheim","Zehnacker","Zeinheim","Zellwiller","Zinswiller","Zittersheim","Zoebersdorf"];
var hautRhinVillages = ["Algolsheim","Altenach","Ammerschwihr","Ammerzwiller","Andolsheim","Appenwihr","Artzenheim","Aspach","Aspach-le-Bas","Aspach-le-Haut","Attenschwiller","Aubure","Baldersheim","Balgau","Ballersdorf","Balschwiller","Baltzenheim","Bantzenheim","Bartenheim","Battenheim","Beblenheim","Bellemagny","Bendorf","Bennwihr","Berentzwiller","Bergheim","Bergholtz","Bergholtzzell","Bernwiller","Berrwiller","Bettendorf","Bettlach","Biederthal","Biesheim","Biltzheim","Bischwihr","Bisel","Bitschwiller-lès-Thann","Blodelsheim","Blotzheim","Bollwiller","Le Bonhomme","Bourbach-le-Bas","Bourbach-le-Haut","Bouxwiller","Bréchaumont","Breitenbach-Haut-Rhin","Bretten","Brinckheim","Bruebach","Buethwiller","Buhl","Burnhaupt-le-Bas","Burnhaupt-le-Haut","Buschwiller","Carspach","Chalampé","Chavannes-sur-l'Étang","Courtavon","Dannemarie","Dessenheim","Didenheim","Diefmatten","Dietwiller","Dolleren","Durlinsdorf","Durmenach","Durrenentzen","Eglingen","Eguisheim","Elbach","Emlingen","Eschbach-au-Val","Eschentzwiller","Eteimbes","Falkwiller","Feldbach","Feldkirch","Fellering","Ferrette","Fessenheim","Fislis","Flaxlanden","Folgensbourg","Fortschwihr","Franken","Fréland","Friesen","Froeningen","Fulleren","Galfingue","Geishouse","Geispitzen","Geiswasser","Gildwiller","Goldbach-Altenbach","Gommersdorf","Grentzingen","Griesbach-au-Val","Grussenheim","Gueberschwihr","Guémar","Guevenatten","Guewenheim","Gundolsheim","Gunsbach","Habsheim","Hagenbach","Hagenthal-le-Bas","Hagenthal-le-Haut","Hartmannswiller","Hattstatt","Hausgauen","Hecken","Hégenheim","Heidwiller","Heimersdorf","Heimsbrunn","Heiteren","Heiwiller","Helfrantzkirch","Henflingen","Herrlisheim-près-Colmar","Hésingue","Hettenschlag","Hindlingen","Hirsingue","Hirtzbach","Hirtzfelden","Hochstatt","Hohrod","Holtzwihr","Hombourg","Houssen","Hunawihr","Hundsbach","Husseren-les-Châteaux","Husseren-Wesserling","Illfurth","Illhaeusern","Ingersheim","Issenheim","Jebsheim","Jettingen","Jungholtz","Kappelen","Katzenthal","Kaysersberg","Kembs","Kientzheim","Kiffis","Kirchberg","Knoeringue","Koestlach","Koetzingue","Kruth","Kunheim","Labaroche","Landser","Lapoutroie","Largitzen","Lautenbach","Lautenbachzell","Lauw","Leimbach","Levoncourt","Leymen","Liebenswiller","Liebsdorf","Lièpvre","Ligsdorf","Linsdorf","Linthal","Logelheim","Lucelle","Luemschwiller","Luttenbach-près-Munster","Lutter","Magny","Magstatt-le-Bas","Magstatt-le-Haut","Malmerspach","Manspach","Masevaux","Mertzen","Merxheim","Metzeral","Meyenheim","Michelbach","Michelbach-le-Bas","Michelbach-le-Haut","Mittelwihr","Mittlach","Mitzach","Moernach","Mollau","Montreux-Jeune","Montreux-Vieux","Moosch","Mooslargue","Morschwiller-le-Bas","Mortzwiller","Muespach","Muespach-le-Haut","Muhlbach-sur-Munster","Munchhouse","Munster","Muntzenheim","Munwiller","Murbach","Nambsheim","Neuf-Brisach","Neuwiller","Niederbruck","Niederentzen","Niederhergheim","Niedermorschwihr","Niffer","Oberbruck","Oberdorf","Oberentzen","Oberhergheim","Oberlarg","Obermorschwihr","Obermorschwiller","Obersaasheim","Oderen","Oltingue","Orbey","Orschwihr","Osenbach","Ostheim","Ottmarsheim","Petit-Landau","Pfaffenheim","Pfetterhouse","Pulversheim","Raedersdorf","Raedersheim","Rammersmatt","Ranspach","Ranspach-le-Bas","Ranspach-le-Haut","Rantzwiller","Réguisheim","Reiningue","Retzwiller","Richwiller","Riedwihr","Riespach","Rimbach-près-Guebwiller","Rimbach-près-Masevaux","Rimbachzell","Riquewihr","Roderen","Rodern","Roggenhouse","Romagny","Rombach-le-Franc","Roppentzwiller","Rorschwihr","Rosenau","Rouffach","Ruederbach","Ruelisheim","Rumersheim-le-Haut","Rustenhart","Saint-Amarin","Saint-Bernard","Saint-Cosme","Saint-Hippolyte","Saint-Ulrich","Sainte-Croix-aux-Mines","Sainte-Croix-en-Plaine","Schlierbach","Schweighouse-Thann","Schwoben","Sentheim","Seppois-le-Bas","Seppois-le-Haut","Sewen","Sickert","Sierentz","Sigolsheim","Sondernach","Sondersdorf","Soppe-le-Bas","Soppe-le-Haut","Soultzbach-les-Bains","Soultzeren","Soultzmatt","Spechbach-le-Bas","Spechbach-le-Haut","Staffelfelden","Steinbach","Steinbrunn-le-Bas","Steinbrunn-le-Haut","Steinsoultz","Sternenberg","Stetten","Storckensohn","Stosswihr","Strueth","Sundhoffen","Tagolsheim","Tagsdorf","Thannenkirch","Traubach-le-Bas","Traubach-le-Haut","Turckheim","Ueberstrass","Uffheim","Uffholtz","Ungersheim","Urbès","Urschenheim","Valdieu-Lutran","Vieux-Ferrette","Vieux-Thann","Village-Neuf","Voegtlinshoffen","Vogelgrun","Volgelsheim","Wahlbach","Walbach","Waldighofen","Walheim","Waltenheim","Wasserbourg","Wattwiller","Weckolsheim","Wegscheid","Wentzwiller","Werentzhouse","Westhalten","Wettolsheim","Wickerschwihr","Widensolen","Wihr-au-Val","Wildenstein","Willer","Willer-sur-Thur","Winkel","Wittersdorf","Wolfersdorf","Wolfgantzen","Wolschwiller","Wuenheim","Zaessingue","Zellenberg","Zillisheim","Zimmerbach","Zimmersheim"];
var alsaceRawVillages = basRhinVillages.concat(hautRhinVillages);
var alsaceVillages = alsaceRawVillages.map(function(name) {
	return {
		name : name,
		exists : true
	}
});


function isARealVillage(name) {
	return alsaceRawVillages.indexOf(name) > -1;
}

var prefixs = [
	{ value : '', frequency : 0.6},
	{ value : 'nieder', frequency : 0.2},
	{ value : 'ober', frequency : 0.2}
];

var suffixs = [
	{ value : 'heim', frequency : 0.5},
	{ value : 'dorf', frequency : 0.2},
	{ value : 'willer', frequency : 0.2},
	{ value : 'wihr', frequency : 0.1}
];

var corpus = [
	"schluchen",
	"hopla",
	"bredela",
	"manala",
	"schlouk",
	"nachparis",
	"haltela",
	"bierbuch",
	"flammen"
];

function getRandomUsingFrequency(array) {
	var randomFloat = Math.random();
	var sum = 0;
	for(var i=0; i<array.length; i++){
		sum += array[i].frequency;
		if(randomFloat < sum) {
			return array[i];
		}
	}
	return array[array.length -1];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateVillage() {
	var name = getRandomUsingFrequency(prefixs).value + getRandom(corpus) + getRandomUsingFrequency(suffixs).value;
	var capitalizedName = capitalizeFirstLetter(name);
	if(isARealVillage(capitalizedName)) {
		return generateVillage();
	}
	return capitalizedName;
}

var fakeVillages = [
	{name : "Schluchendorf", exists : false, author : 'Geoffroy'},
	{name : "Hoplagheim", exists : false, author : 'Martin'},
	{name : "Bredelagheim", exists : false, author : 'Martin'},
	{name : "Manalawihr", exists : false, author : 'Martin'},
	{name : "Untersheim-le-haut", exists : false, author : 'Martin'},
	{name : "Schloukheim", exists : false, author : 'Martin'},
	{name : "Nachparisheim", exists : false, author : 'Martin'},
	{name : "Haltelawihr", exists : false, author : 'Martin'},
	{name : "Bierbuchberg", exists : false, author : 'Martin'},
	{name : "Flammenwiller", exists : false, author : 'Martin'}
];


var PROBABILITY_OF_GETTING_A_FAKE_VILLAGE = 0.479;

function getVillage() {
	var random = Math.random();
	if(random > PROBABILITY_OF_GETTING_A_FAKE_VILLAGE) {
		return getRandom(alsaceVillages)
	} else {
		return { name : generateVillage(), exists : false};
		//return getRandom(fakeVillages);
	}
}

var port = process.env.PORT || 5000;
var restify = require('restify');
var server = restify.createServer();
server.get('/random-village', function(req, res, next) {
	res.send(JSON.stringify(getVillage()));
	next();
});
server.get(/\/?.*/, restify.serveStatic({
    directory: __dirname + '/../client',
    default : 'index.html'
}));
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});