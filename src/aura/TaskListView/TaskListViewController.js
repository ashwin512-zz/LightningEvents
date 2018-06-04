({
    init: function(cmp, event, helper) {
        cmp.set('v.taskcolumns', [{
                label: 'Id',
                fieldName: 'Id',
                type: 'text'
            },
            {
                label: 'Status',
                fieldName: 'Status',
                type: 'text'
            },
            {label: 'Description', fieldName: 'Description', type: 'text'}
        ]);
        helper.getTaskData(cmp);
    },
    loadMoreData: function (cmp, event, helper) {
        //Display a spinner to signal that data is being loaded
        event.getSource().set("v.isLoading", true);
        //Display "Loading" when more data is being loaded
        cmp.set('v.loadMoreStatus', 'Loading');
        helper.fetchData(cmp, cmp.get('v.rowsToLoad'))
            .then($A.getCallback(function (data) {
                if (cmp.get('v.data').length >= cmp.get('v.totalNumberOfRows')) {
                    cmp.set('v.enableInfiniteLoading', false);
                    cmp.set('v.loadMoreStatus', 'No more data to load');
                } else {
                    var currentData = cmp.get('v.data');
                    //Appends new data to the end of the table
                    var newData = currentData.concat(data);
                    cmp.set('v.data', newData);
                    cmp.set('v.loadMoreStatus', '');
                }
               event.getSource().set("v.isLoading", false);
            }));
    },
    getSelectedTask: function(cmp, event, helper) {
        
        var updatedSelectRows = [];
        var selectedRow, unselectedRow;
        var selectedRows = event.getParam('selectedRows');
        var onLoadSelectedRows = cmp.get("v.onloadselectedrows");
        var selectedRowId = {};
        var onLoadSelectedRowId = {};
        for (var i = 0; i < selectedRows.length; i++) {
            console.log('selected Row ' + selectedRows[i].Id);
            selectedRowId[selectedRows[i].Id] = selectedRows[i].Id;
        }
        for (var i = 0; i < onLoadSelectedRows.length; i++) {
            onLoadSelectedRowId[onLoadSelectedRows[i]] = onLoadSelectedRows[i];
            if (!selectedRowId[onLoadSelectedRows[i]])
                unselectedRow = onLoadSelectedRows[i];
        }

        for (var i = 0; i < selectedRows.length; i++) {
            if (!onLoadSelectedRowId[selectedRows[i].Id])
                selectedRow = selectedRows[i].Id;
        }
        console.log(JSON.stringify(selectedRows));
        console.log('selected Row ' + selectedRow);
        console.log('unselected Row ' + unselectedRow);
      
        
        if (unselectedRow)
            helper.openTask(cmp, unselectedRow);

        if (selectedRow)
            helper.closeTask(cmp, selectedRow);

        helper.getTaskData(cmp);
    }
})