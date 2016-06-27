elsassProject.modules.GameModule = function(container) {

	var punchLineTexts = [
		"J'parie que tu sais pas si c'est un nom de village tiens : ",
		"Aller devine cui-là oldie kuh",
		"Ca tu n'y arrivera pas, gotfedami",
	];

	var correctTexts = [
		"Hoke c'est bon",
		"Ouep",
		"Tout à fait",
		"Bien sur"
	];

	var wrongTexts = [
		"N'importe quoi!",
		"Et puis quoi encore!",
		"Bien sur",
		"Non mais qui a inventé ça ?",
		"Sech nix"
	];

	var view = elsassProject.modules.GameView({
		domHelper : elsassProject.utilities.DOMHelper({block : 'game'}),
		eventHelper : elsassProject.utilities.EventHelper(),
		punchLineTexts : punchLineTexts,
		correctTexts : correctTexts,
		wrongTexts : wrongTexts
	});

	var model = elsassProject.modules.GameModel({
		serverUrl : 'url'
	});

	var self = {};

	self.start = function() {		
		container.appendChild(view.getNode());	
		view.setVillageName("Truchtersheim");
	}

	return self;

}


elsassProject.modules.GameView = function(dependencyInjection) {
	
	var domHelper = dependencyInjection.domHelper;
	var eventHelper = dependencyInjection.eventHelper;
	var punchLineTexts = dependencyInjection.punchLineTexts;
	var correctTexts = dependencyInjection.correctTexts;
	var wrongTexts = dependencyInjection.wrongTexts;

	var punchLine = domHelper.createElement('div', 'punchline');
	var punchLineContainer = domHelper.createElement('div', 'punchline-container', [punchLine])
	var name = domHelper.createElement('div', 'name');
	var nameContainer = domHelper.createElement('div', 'name-container', [name]);
	var correctButton = domHelper.createElement('button', 'correct');
	var wrongButton = domHelper.createElement('button', 'wrong');

	var buttonsContainer = domHelper.createElement('div', 'buttons-container', [wrongButton, correctButton]);
	var container = domHelper.createElement('div', 'container', [punchLineContainer, nameContainer, buttonsContainer]);


	correctButton.addEventListener('click', function() {
		eventHelper.fireEvent('correct');
	});
	wrongButton.addEventListener('click', function() {
		eventHelper.fireEvent('wrong');
	});



	function setRandomText(array, node) {
		var randomFloat = Math.random();
		var randomInt = Math.floor(array.length*randomFloat);
		try {
			node.textContent = array[randomInt];	
		} catch(e) {
			console.log('math error');
			node.textContent = array[0];
		}
	}

	//TODO i18n/clean : 
	setRandomText(punchLineTexts, punchLine);
	setRandomText(correctTexts, correctButton);
	setRandomText(wrongTexts, wrongButton);

	var self = {};

	self.getNode = function() {
		return container;
	};

	self.setVillageName = function(data) {
		name.textContent = data;	
	};

	self.addListener = eventHelper.addListener;

	return self;

}

elsassProject.modules.GameModel = function(dependencyInjection) {

	var eventsHelper = dependencyInjection.eventsHelper;

	var villages = [
		{name : "Truchtersheim", exists : true},
		{name : "Schluchendorf", exists : false, author : 'Geoffroy'}
	];

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

	var self = {};

	self.getNewVillage = function() {
		eventsHelper.fireEvent('new-village', getRandom(villages));
	};

	self.addListener = eventsHelper.addListener;

	return self;

};