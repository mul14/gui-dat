GUI.Controller = function() {

	this.parent = arguments[0];
    this.object = arguments[1];
    this.propertyName = arguments[2];

	if (arguments.length > 0) this.initialValue = this.propertyName[this.object];

    this.domElement = document.createElement('div');
    this.domElement.setAttribute('class', 'guidat-controller ' + this.type);
    
    this.propertyNameElement = document.createElement('span');
    this.propertyNameElement.setAttribute('class', 'guidat-propertyname');
    this.name(this.propertyName);
    this.domElement.appendChild(this.propertyNameElement);
    
    GUI.makeUnselectable(this.domElement);
    
};

GUI.Controller.prototype.changeFunction = null;

GUI.Controller.prototype.name = function(n) {
	this.propertyNameElement.innerHTML = n;
	return this;
};

GUI.Controller.prototype.reset = function() {
	this.setValue(this.initialValue);
	return this;
};

GUI.Controller.prototype.listen = function() {
	this.parent.listenTo(this);
	return this;
}

GUI.Controller.prototype.unlisten = function() {
	this.parent.unlistenTo(this); // <--- hasn't been tested yet
	return this;
}
    
GUI.Controller.prototype.setValue = function(n) {
	this.object[this.propertyName] = n;
	if (this.changeFunction != null) {
		this.changeFunction.call(this, n);
	}
	// Whenever you call setValue, the display will be updated automatically.
	// This reduces some clutter in subclasses. We can also use this method for listen().
	this.updateDisplay();
	return this;
}
    
GUI.Controller.prototype.getValue = function() {
	return this.object[this.propertyName];
}

GUI.Controller.prototype.updateDisplay = function() {}
    
GUI.Controller.prototype.onChange = function(fnc) {
	this.changeFunction = fnc;
	return this;
}
