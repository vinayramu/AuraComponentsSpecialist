({
	doInit : function(component, event, helper) {
        console.log('Inside doInit of Boat Reviews ',component.get('v.boat').Id);
		helper.onInit(component);
	},
    onUserInfoClick : function(component, event, helper){
        console.log("Inside onUserInfoClick");
        let userId = event.target.getAttribute("data-userid");
        let navEvt = $A.get("e.force:navigateToSObject");
    	navEvt.setParams({
          "recordId": userId,
          "slideDevName": "detail"
        });
        navEvt.fire();
    }
})