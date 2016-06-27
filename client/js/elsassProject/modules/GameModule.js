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
		"Bien sur que non",
		"Non mais qui a inventé ça ?",
		"Sech nix"
	];

	var correctResulsTexts = ['Gagné'];

	var failedResulsTexts = ['Perdu'];

	var view = elsassProject.modules.GameView({
		domHelper : elsassProject.utilities.DOMHelper({block : 'game'}),
		eventHelper : elsassProject.utilities.EventHelper(),
		punchLineTexts : punchLineTexts,
		correctTexts : correctTexts,
		wrongTexts : wrongTexts,
		correctResulsTexts : correctResulsTexts,
		failedResulsTexts : failedResulsTexts
	});

	var model = elsassProject.modules.GameModel({
		serverUrl : 'url',
		eventHelper : elsassProject.utilities.EventHelper()
	});

	var controller = elsassProject.modules.GameController({
		model : model,
		view : view
	});

	var self = {};

	self.start = function() {		
		container.appendChild(view.getNode());	
		controller.registerEvents();
		model.start();
	}

	return self;

}


elsassProject.modules.GameView = function(dependencyInjection) {
	
	var domHelper = dependencyInjection.domHelper;
	var eventHelper = dependencyInjection.eventHelper;
	var punchLineTexts = dependencyInjection.punchLineTexts;
	var correctTexts = dependencyInjection.correctTexts;
	var wrongTexts = dependencyInjection.wrongTexts;

	var correctResulsTexts = dependencyInjection.correctResulsTexts;
	var failedResulsTexts = dependencyInjection.failedResulsTexts;

	var punchLine = domHelper.createElement('div', 'punchline');
	var punchLineContainer = domHelper.createElement('div', 'punchline-container', [punchLine])
	var name = domHelper.createElement('div', 'name');
	var nameContainer = domHelper.createElement('div', 'name-container', [name]);
	var correctButton = domHelper.createElement('button', 'correct');
	var wrongButton = domHelper.createElement('button', 'wrong');

	var buttonsContainer = domHelper.createElement('div', 'buttons-container', [wrongButton, correctButton]);


	var replayButton = domHelper.createElement('button', 'replay');
	var resultMessage = domHelper.createElement('div', 'result');
	var resultContainer = domHelper.createElement('div', 'result-container', [resultMessage]);
	var modal = domHelper.createElement('div', 'modal', [resultContainer, replayButton]);
	var modalBackground = domHelper.createElement('div', 'modal-background', [modal]);

	var container = domHelper.createElement('div', 'container', [punchLineContainer, nameContainer, buttonsContainer]);
	var containerWrapper = domHelper.createElement('div', 'container-wrapper', [container, modalBackground]);

	function _bindClick(button, event) {
		button.addEventListener('click', function() {
			eventHelper.fireEvent(event);
		});		
	}

	function _hideModal() {
		domHelper.addModifier(modalBackground, 'hidden');
		domHelper.addModifier(modal, 'hidden');
	}

	function _showModal() {
		domHelper.removeModifier(modalBackground, 'hidden');
		domHelper.removeModifier(modal, 'hidden');
	}

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

	function _setupView() {
		_hideModal();
		//TODO i18n/clean : 
		setRandomText(punchLineTexts, punchLine);
		setRandomText(correctTexts, correctButton);
		setRandomText(wrongTexts, wrongButton);
		replayButton.textContent = 'Rejouer'; //TODO random
	}

	_bindClick(correctButton, 'correct');
	_bindClick(wrongButton, 'wrong');
	_bindClick(replayButton, 'replay');

	replayButton.addEventListener('click', function() {
		_setupView();
	});
	_setupView();



	var self = {};

	self.getNode = function() {
		return containerWrapper;
	};

	self.setVillageName = function(data) {
		name.textContent = data;	
	};

	self.showResult = function(isCorrect, author) {
		if(isCorrect) {
			setRandomText(correctResulsTexts, resultMessage);
		} else {
			//TODO : use author.
			setRandomText(failedResulsTexts, resultMessage);
		}
		_showModal();
	}

	self.addListener = eventHelper.addListener;

	return self;

}

elsassProject.modules.GameModel = function(dependencyInjection) {

	var eventHelper = dependencyInjection.eventHelper;

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
		eventHelper.fireEvent('new-village', getRandom(villages));
	};

	self.start = self.getNewVillage;

	self.addListener = eventHelper.addListener;

	return self;

};


elsassProject.modules.GameController = function(dependencyInjection) {

	var view = dependencyInjection.view;
	var model = dependencyInjection.model;

	var currentElement = undefined;

	function _answer(userThinksItsCorrect) {
		var result = currentElement.exists === userThinksItsCorrect;
		view.showResult(result, currentElement.author);
	}

	function _play() {
		model.getNewVillage();
	}

	var self = {};

	self.registerEvents = function() {
		model.addListener('new-village', function(eventData) {
			currentElement = eventData;
			view.setVillageName(eventData.name);
		});
		view.addListener('correct', function() {
			_answer(true);
		});
		view.addListener('wrong', function() {
			_answer(false);
		});
		view.addListener('replay', _play);
	}	


	return self;

};