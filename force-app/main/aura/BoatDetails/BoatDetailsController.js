({
	onBoatSelected : function(component, event, helper) {
		var boat = event.getParam("boat");
        //debugger;
        console.log("Inside on Boat Selected in Boat Details ",boat.Id);
        component.set("v.id",boat.Id);
        component.find("service").reloadRecord();
	},
    onRecordUpdated : function(component, event, helper){
        var reviewsTab = component.find("boatreviewCmp");
        if(reviewsTab)
        	reviewsTab.refresh();
    },
    doInit : function(component, event, helper) {
        
    },
    onBoatReviewAdded : function(component, event, helper) {
        var tabSet = component.find("tabset");
        tabSet.set("v.selectedTabId","boatreviewtab");
        
        var reviewsTab = component.find("boatreviewCmp");
        if(reviewsTab)
        reviewsTab.refresh();
    }
})