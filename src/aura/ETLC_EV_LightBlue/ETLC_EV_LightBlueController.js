({
	evAction : function(component, event, helper) {
		var params = event.getParams();
        console.log("Event [" + params.message + "] captured in LightBlue component");
	},
    callbackMethod : function(component, event, helper) {
        console.log("Callback Method fired");
    }
})