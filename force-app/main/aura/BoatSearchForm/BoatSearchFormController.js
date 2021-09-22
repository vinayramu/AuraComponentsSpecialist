({
	doInit : function(component, event, helper) {
        var action = component.get("c.getBoatTypes");
        console.log(action);
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.boatTypes",response.getReturnValue());
                var str = component.get("v.boatTypes");
                console.log("List of Boat Types are : " + JSON.stringify(str));
            }
        });
        $A.enqueueAction(action);
		var boatId = component.find("boatId");
        console.log(boatId);
        var newBtn = $A.get("event.force:createRecord");
        console.log(newBtn);
        if(newBtn){
        	component.set("v.displayNew",true);    
        }
        helper.loadBoatTypes(component, event);
	},
    setBoatAttr : function(component, event, helper){
        var boatType = event.getSource().get("v.value");
        console.log(boatType);
        component.set("v.boatType",boatType);
    },
    newBoat : function(component, event, helper){
        var boatType = component.get("v.boatType");
        console.log(boatType);
        var newBoatEvent = $A.get("event.force:createRecord");
        console.log(newBoatEvent);
        if(newBoatEvent){
            if(boatType){
            	newBoatEvent.setParams({
            	"entityApiName" : "Boat__c",
            	"defaultFieldValues" : {
                	"BoatType__c" : boatType
            		}
        		});    
            }
            else{
                console.log('Please select boat type for the new boat.');
                newBoatEvent.setParams({
            	"entityApiName" : "Boat__c"
        		}); 
            }
        	
            newBoatEvent.fire();
        }
    },
    onFormSubmit : function(component, event, helper) {
        let boatType = component.get("v.boatType");
        console.log(boatType);
        var evt = component.getEvent("formsubmit");
        var params = {"formData": {"boatTypeId": boatType}};
        evt.setParams(params);
        evt.fire();
    }
})