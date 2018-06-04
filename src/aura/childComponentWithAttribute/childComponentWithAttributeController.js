({
    onChildAttributeChange : function (component, event, helper) {
  
        console.log("child : onChildAttributeChange : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
        //console.log("child : onChildAttributeChange : Old value of parentAttribute : " + event.getParam("oldValue"));
        //console.log("child : onChildAttributeChange : New Value: " + event.getParam("value"));
        
    },
    
    handleChildClick : function(component, event, helper) {
        console.log("child : handleChildClick : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
		component.set("v.childAttribute",['Neon','Helium','Argon']);
	}
})