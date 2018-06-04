({
	evAction : function(component, event, helper) {
        var label = component.get("v.label");
		var params = event.getParams();
        console.log("Event [" + params.message + "] captured in WhiteBox [" + label + "] component");
	}
})