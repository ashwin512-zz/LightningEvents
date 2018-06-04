({
    getTaskData: function(cmp) {
        var action = cmp.get('c.getTasks');
        action.setCallback(this, $A.getCallback(function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.taskdata', response.getReturnValue());
                var rowsList = [];
                for (var i = 0; i < response.getReturnValue().length; i++) {
                    console.log(response.getReturnValue()[i]);
                    console.log("row status: " + response.getReturnValue()[i].Status);
                    if(response.getReturnValue()[i].Status == 'closed') {
                        rowsList.push(response.getReturnValue()[i].Id);
                    }
                    
                }

                cmp.set('v.onloadselectedrows', rowsList);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    },
    closeTask: function(cmp, row) {
        console.log("in helper close task" + row);
        var action = cmp.get("c.closeTask");
        action.setParams({
            "taskId": row
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(state);
            } else if (state === "ERROR") {
                // handle error
                console.log(response.getError());
                console.log("-->error" + response.getError());
                console.log(response.getError());
            }
        });
        $A.enqueueAction(action);
    },
    openTask: function(cmp, row) {
        console.log("in helper open task" + row);
        var action = cmp.get("c.openTask");
        action.setParams({
            "taskId": row
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(state);
            } else if (state === "ERROR") {
                // handle error
                console.log(response.getError());
                console.log("-->error" + response.getError());
                console.log(response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})