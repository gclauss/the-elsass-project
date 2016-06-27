elsassProject.modules.PublishModule = function(parameters) {

	var container  = parameters.container;

	var view = elsassProject.modules.PublishView({
		domHelper : elsassProject.utilities.DOMHelper({block : 'publish'}),
		eventHelper : elsassProject.utilities.EventHelper()
	});

	var self = {};

	self.start = function() {		
		container.appendChild(view.getNode());	
		//controller.registerEvents();
		//model.start();
	}

	return self;

};

elsassProject.modules.PublishView = function(dependencyInjection) {

	var domHelper = dependencyInjection.domHelper;
	var eventHelper = dependencyInjection.eventHelper;

	var container = domHelper.createElement('div', 'container');
	container.textContent = "TODO : publish form";

	var villageNameLabel = domHelper.createElement('label', 'label');
	var villageNameInput = domHelper.createElement('input', 'input');

	var authorLabel = domHelper.createElement('label', 'label');
	var authorInput = domHelper.createElement('input', 'input');

	var form = domHelper.createElement('form', 'form', [
		villageNameLabel,
		villageNameInput,
		authorLabel,
		authorInput
	]);

	form.addEventListener('submit', function() {
		eventHelper.fireEvent('pusblish', {
			village : villageNameInput.value,
			author : authorInput.value,
		});
	})

	var self = {};

	self.getNode = function() {
		return container;
	}

	return self;

};