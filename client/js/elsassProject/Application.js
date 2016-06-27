elsassProject.Application = function(parameters) {
	
	var body = parameters.body;

	var punchLineTexts = [
		"J'parie que tu sais pas si c'est un nom de village tiens : ",
		"Aller devine çui-là altie kuh",
		"Ca tu n'y arrivera pas, got verdammi",
	];

	var correctTexts = [
		"Hopla c'est bon",
		"Ouep",
		"Tout à fait",
		"Bien sur",
		"Taccord",
		"Naturlich",
		"Genau",
		"Worum net",
		"Jaja",
		"Sech gut",
		"Hopla geis",
		"Korrect"
	];

	var wrongTexts = [
		"N'importe quoi!",
		"Et puis quoi encore!",
		"Bien sur que non",
		"Non mais qui a inventé ça ?",
		"Sech nix",
		"Nene",
		"Jo neeeh",
		"Jo komm",
		"Te fous pas de moi",
		"Me prends pas pour deux con hein"
	];

	var correctResulsTexts = [
		"Prima t'as Gagné",
		"C'est juste mais c'est pas la peine d'en faire tout un foin, dàpéteschiesser (chieur de papier peint)"
	];

	var failedResulsTexts = [
		"Sech eps, encore perdu",
		"Fait pas ta beleidigdi lèwerwùrscht (saucisse de foie vexée)",
	];

	var replayTexts = [
		"Noch e mol"
	];

	var villages = [
		{name : "Truchtersheim", exists : true},
		{name : "Schluchendorf", exists : false, author : 'Geoffroy'}
	];

	var self = {};

	self.start = function() {
		var gameModule = elsassProject.modules.GameModule({
			container : body,
			punchLineTexts : punchLineTexts,
			correctTexts : correctTexts,
			wrongTexts : wrongTexts,
			correctResulsTexts : correctResulsTexts,
			failedResulsTexts : failedResulsTexts,
			replayTexts : replayTexts,
			villages : villages
		});
		gameModule.start();
	};

	return self;

}