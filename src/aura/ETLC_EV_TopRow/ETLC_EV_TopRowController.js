({
	evAction : function(component, event, helper) {
		var params = event.getParams();
        console.log("Event [" + params.message + "] captured in TopRow component");
	}
})