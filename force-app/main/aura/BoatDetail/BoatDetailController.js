({	
    doInit	: function(component, event, helper) {
        	component.set("v.evtAccess",true);
    },
	onFullDetails : function(component, event, helper) {
		var navigation = component.find('navigation');
            navigation.navigate({
                'type'			: 'standard__recordPage',
                'attributes'	: {
                    'objectApiName': 'Boat__c',
                    'recordId' : row.Id,
                    'actionName' : 'view'
                }
            });
	}
})