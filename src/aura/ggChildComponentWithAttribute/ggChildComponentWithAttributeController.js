({
    onggChildAttributeChange : function (component, event, helper) {
  
       console.log("grandgrandchild : onggChildAttributeChange : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
       // console.log("grand child : ongChildAttributeChange : Old value of parentAttribute : " + event.getParam("oldValue"));
        //console.log("grand child : ongChildAttributeChange : New Value: " + event.getParam("value"));
        
    },
    
    gghandleChildClick : function(component, event, helper) {
        console.log("grandgrandchild : onggChildAttributeChange : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
		component.set("v.ggchildAttribute",['X','Y','Z']);
	}
})