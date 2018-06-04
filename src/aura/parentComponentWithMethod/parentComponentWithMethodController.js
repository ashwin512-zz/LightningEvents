({
	callChildMethod : function(component, event, helper) {
		var attribute1 = component.get('v.parentAttribute1');
        var attribute2 = component.get('v.parentAttribute2');
        var childComponent = component.find('grandchild');
        childComponent.GCMethod(attribute1, attribute2);
	}
})