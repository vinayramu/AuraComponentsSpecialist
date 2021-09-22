({
    onPlotMapMarker: function (component,event,helper) {
        debugger;
        var plotmapmarker = event.getParams();
        var boatId = plotmapmarker.sObjectId;
        var lat = plotmapmarker.lat;
        var long = plotmapmarker.long;
        var label = plotmapmarker.label;
        console.log("Inside plotmapmarker of -> ", boatId);
        component.set("v.mapMarkers", plotmapmarker);
        component.set('v.zoomLevel', 10);
        component.set("v.markersTitle",label);
        component.set("v.location",plotmapmarker);
    },
    doInit : function (cmp,event,helper) {
        /*
        cmp.set('v.mapMarkers', [
            {
                location: {
                    Street: '1600 Pennsylvania Ave NW',
                    City: 'Washington',
                    State: 'DC'
                },

                title: 'The White House',
                description: 'Landmark, historic home & office of the United States president, with tours for visitors.'
            }
        ]);
        cmp.set('v.zoomLevel', 16);*/
    }
})