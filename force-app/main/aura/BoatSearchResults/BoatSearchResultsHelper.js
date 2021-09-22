({
	onSearch : function(component, boatTypeId){
        var action = component.get( "c.getBoats" );
        var returnBoats;
        console.log("In helper of boat search results and value is ",boatTypeId);
        action.setParams({
            boatTypeId : boatTypeId
        });
        action.setCallback(this, function( response ){
            let state = response.getState();
            
            if(state == 'SUCCESS'){
                returnBoats = response.getReturnValue();
                console.log("length is ",returnBoats.length);
                //Uncomment following code for testing 
                var boats = response.getReturnValue();
                console.log("Boats Length is ", boats.length);
                for(var i in boats){ console.log(boats[i]);}
            	component.set("v.boats",boats);
            }
            else if(state == 'ERROR'){
                console.log(response.getError());
            }
            else{
                console.log(response);
            }
            
            //debugger;
        });
        $A.enqueueAction(action);
    }
})