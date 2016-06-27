elsassProject.utilities.DOMHelper = function(parameters) {
	
	var blockName = parameters.block;
	var variantName = parameters.variant;

	var self = {};

	self.createElement = function(tag, name, content) {
		if(content === undefined){
			content = [];
		}
		var element = document.createElement(tag);
		element.classList.add(blockName + '__' + name);
		element.classList.add(blockName + '--' + variantName + '__' + name);
		content.forEach(function(toAppend){
			element.appendChild(toAppend);
		});
		return element;
	}

	self.addModifier = function(element, name) {
		var regularClassName = element.classList.item(0);
		var variantClassName = element.classList.item(1);
		element.classList.add(regularClassName + '--' + name);
		element.classList.add(variantClassName + '--' + name);	
	};

	self.removeModifier = function(element, name) {
		var regularClassName = element.classList.item(0);
		var variantClassName = element.classList.item(1);
		element.classList.remove(regularClassName + '--' + name);
		element.classList.remove(variantClassName + '--' + name);	
		
	}

	return self;

}