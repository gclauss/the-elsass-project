elsassProject.Application = function(parameters) {
	
	var body = parameters.body;

	var self = {};

	self.start = function() {
		var gameModule = elsassProject.modules.GameModule(body);
		gameModule.start();
	};

	return self;

}