({
	onFormSubmit : function(component, event, helper) {
		var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        console.log("Inside boat search -> ", boatTypeId);
        var srchResultsCmp = component.find("searchResults");
        srchResultsCmp.set("v.boatTypeId", boatTypeId);
        srchResultsCmp.search(String(boatTypeId));
	}
})