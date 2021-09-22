({
	onBoatClick : function(component, event, helper) {
		var boat = component.get("v.boat");
        console.log(boat.Name);
        if(boat && boat.Id){
            var boatselect = component.getEvent("boatselect");
            boatselect.setParams({"boatId": boat.Id});
            console.log("BoatSelect Event Fired!");
            boatselect.fire();
            
            var boatselected = $A.get( "e.c:BoatSelected" );
            boatselected.setParams({
                "boat": boat
            });
            console.log("BoatSelected Event Fired!");
            boatselected.fire();
                 
            var plotMapMarker = $A.get("e.c:PlotMapMarker");
            plotMapMarker.setParams({
                "sObjectId": boat.Id,
                "lat": boat.Geolocation__c.latitude,
                "long": boat.Geolocation__c.longitude,
                "label": boat.Name
            });
            console.log("PlotMapMarker Event Fired!");
            plotMapMarker.fire();
        }
	}
})