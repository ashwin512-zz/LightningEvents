({
    executeMyMethod : function (component, event, helper) {
        var params = event.getParam('arguments');
        alert('Param 1: '+ params.param1);
        alert('Param 2: '+ params.param2);
    }
})