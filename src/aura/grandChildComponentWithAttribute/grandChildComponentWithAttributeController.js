({
    ongChildAttributeChange : function (component, event, helper) {
  
        console.log("grandchild : ongChildAttributeChange : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
       // console.log("grand child : ongChildAttributeChange : Old value of parentAttribute : " + event.getParam("oldValue"));
        //console.log("grand child : ongChildAttributeChange : New Value: " + event.getParam("value"));
        
    },
    
    ghandleChildClick : function(component, event, helper) {
        console.log("grandchild : ghandleChildClick : " + event.target + " " + event.currentTarget + " " + event.eventPhase);
		component.set("v.gchildAttribute",['A','B','C']);
	}
})