({
	handleParentClick : function(component, event, helper) {
        console.log("parent : handleParentClick : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
		component.set("v.parentAttribute",['Dad','Mom','GM'])
	},
    onParentAttributeChange : function(component, event, helper) {
         console.log("parent : onParentAttributeChange : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
        
	},
})