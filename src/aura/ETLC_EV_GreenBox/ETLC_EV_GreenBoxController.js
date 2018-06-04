({
    fireEvents : function(component, event, helper) {
        // Fire component event
        var evCmp = component.getEvent("evCmp");
        var params = {
            message: "Component event fired from Green Box"
        };
        evCmp.setParams(params);
        evCmp.fire();
        
        // Fire application event
        var evApp = $A.get("e.c:ETLC_EV_ApplicationEvent");
        var params = {
            message: "Application event fired from Green Box"
        };
        evApp.setParams(params);
        evApp.fire();
        
        // Invoke component method
        var pinkBox = component.find("pinkBox");
        if (pinkBox) {
            var params = { var1: "data1", var2: "data2", var3: "data3" };
            pinkBox.componentMethodName(params);
        }
        
        // Invoke callback method
        var action = component.get("v.callbackMethodName");
        $A.enqueueAction(action);
    },
    defaultAction : function(component, event, helper) {
        console.log("Default Callback Method executed");
    }
})