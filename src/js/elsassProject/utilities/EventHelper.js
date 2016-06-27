elsassProject.utilities.EventHelper = function() {

	var listenersMap = {};

	var self = {};

	self.addListener = function(eventName, listener) {
		if(listenersMap[eventName] === undefined) {
			listenersMap[eventName] = [];
		}
		listenersMap[eventName].push(listener);
	}

	self.fireEvent = function(eventName, eventData) {
		listenersMap[eventName].forEach(function(listener) {
			listener(eventData);
		});
	}

	return self;

	
};