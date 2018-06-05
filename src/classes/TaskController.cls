public with sharing class TaskController {
    @AuraEnabled
    public static List<task> getTasks() {
        List<task> tasks = [SELECT Id, Priority,Status, Subject, Description FROM Task limit 4000];
        //Add isAccessible() check
        return tasks;
    }
    
    @AuraEnabled
    public static List<task> getClosedRows() {
        List<task> tasks = [SELECT Id, Priority,Status, Subject, Description FROM Task where status='closed'];
        //Add isAccessible() check
        return tasks;
    }
    
    @AuraEnabled
    public static Id closeTask(Id taskId) {
        system.debug('i am in the close task '+taskId );
        Task t = null;
        if(String.isNotBlank(taskId)){
            List<Task> taskList = [select id,status from task where id=:taskId];
            if(taskList.size() > 0){
                t = taskList.get(0);
                t.status = 'closed';
                update t;
            }
        }
        
        return taskId;
    }
    
    @AuraEnabled
    public static Id openTask(Id taskId) {
        system.debug('i am in the open task '+taskId );
        Task t = null;
        if(String.isNotBlank(taskId)){
            List<Task> taskList = [select id,status from task where id=:taskId];
            if(taskList.size() > 0){
                t = taskList.get(0);
                t.status = 'open';
                update t;
            }
        }
        
        return taskId;
    }       
}