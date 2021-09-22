({
	onInit : function(component) {
		var action = component.get( "c.getAll" );
        var boatId = component.get("v.boat").Id;
        console.log("In helper of boat reviews for boat ",boatId);
        action.setParams({
            boatId : boatId
        });
        action.setCallback(this, function( response ){
            let state = response.getState();
            
            if(state == 'SUCCESS'){
            	component.set("v.boatReviews",response.getReturnValue());
            }
            else if(state == 'ERROR'){
                console.log(response.getError());
            }
            else{
                console.log(response);
            }
        });
        $A.enqueueAction(action);
	}
})