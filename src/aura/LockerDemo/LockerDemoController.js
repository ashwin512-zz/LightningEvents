({
    doInit : function(component, event, helper) {
        window.testValue="From the App";
    },
    ClickAppButton : function(component, event, helper) {
        alert('Message from Application container = ' + window.testValue);
    }
})