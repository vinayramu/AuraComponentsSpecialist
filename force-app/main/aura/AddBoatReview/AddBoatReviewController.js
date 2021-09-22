({
	doInit : function(component, event, helper) {
		helper.onInit(component, event);
	},
    onSave : function(component, event, helper) {
		//var title = component.find('title').get("v.value");
        //var description = component.find('description').get("v.value");
        var boatId = component.get("v.boat").Id;
        
        //component.set("v.boatReview.Name", title);    
        //component.set("v.boatReview.Description__c", description);
        component.set("v.boatReview.Boat__c", boatId);

        component.find("service").saveRecord($A.getCallback(function(result) {
            console.log(result.state);
            var resultsToast = $A.get("e.force:showToast");
            if (result.state === "SUCCESS") {
                if(resultsToast){
                	resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    resultsToast.fire();
                    var recId = result.recordId;
                    var evt = component.getEvent("boatreviewadded");
                        //$A.get("e.c:BoatReviewAdded");
                    
                    evt.fire();
                    //helper.navigateTo(component, recId);    
                }
                else{
                    alert("The record was saved.");
                }
            } else if (result.state === "ERROR") {
                component.set("v.recordError",JSON.stringify(result.error));
                console.log('Error: ' + JSON.stringify(result.error));
                resultsToast.setParams({
                    "title": "Error",
                    "message": "There was an error saving the record: " + JSON.stringify(result.error)
                });
                resultsToast.fire();
            } else {
                console.log('Unknown problem, state: ' + result.state + ', error: ' + JSON.stringify(result.error));
            }
        }));
	},
    onRecordUpdated : function(component, event, helper) {
		
	}
})