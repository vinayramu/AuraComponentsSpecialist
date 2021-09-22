({
    doInit : function(component, event, helper) {
        helper.onSearch(component);
    },
    doSearch : function(component, event, helper) {
        //debugger;
        var boatTypeId = component.get("v.boatTypeId");
        console.log('In boat search results 2 : ',boatTypeId);
        helper.onSearch(component, boatTypeId);
        console.log("Inside boat search results controller");
	},
    onBoatSelect : function(component, event, helper) {
        var boatId = event.getParam("boatId");
        console.log("onBoatSelect in BoatSearchResults.", boatId);
        component.set("v.selectedBoatId", boatId);
        /*
        var boats = component.get("v.boats");
        var selectedboat;
        for (var i in boats) {
            if (boats[i].Id == boatId) {
                selectedboat = boats[i];
                break;
            } else {
                continue;
            }
        }
        if(selectedboat && selectedboat.Id == boatId){
            var boatselected = component.getEvent("c:BoatSelected");
            boatselected.setParams({"boat": boat});
            boatselected.fire();
        }*/
        
    }
})