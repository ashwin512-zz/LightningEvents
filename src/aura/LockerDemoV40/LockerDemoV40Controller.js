({
	accessComponent : function(component, event, helper) {
		var div = document.querySelector(".ashwin");
        component.set("v.message",div.innerHTML);
	}
})