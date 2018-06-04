({
    executeGCMethod : function (component, event, helper) {
        var params = event.getParam('arguments');
        alert('Grand Child Param 1: '+ params.param1);
        alert('Grand Child Param 2: '+ params.param2);
    }
})