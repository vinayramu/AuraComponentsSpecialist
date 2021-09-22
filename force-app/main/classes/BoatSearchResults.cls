public with sharing class BoatSearchResults {
	@AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        List<Boat__c> boatsList = new List<Boat__c>();
        if(String.isBlank(boatTypeId)){
            boatsList = [SELECT Id, Name, Picture__c, Geolocation__c FROM Boat__c];
        }
        else{
            boatsList = [SELECT Id, Name, Picture__c, Geolocation__c FROM Boat__c WHERE BoatType__r.Id = :boatTypeId];
        }
        return boatsList;
    }
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> bTypes = [SELECT Id,Name from BoatType__c];
        Integer i = 1;
        for(BoatType__c bt : bTypes){
        	system.debug('boat type '+ i + ' : ' + bt.Name);
            i++;
        }
        return bTypes;
    }
}