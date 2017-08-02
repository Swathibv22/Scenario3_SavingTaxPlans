/**
 * Created by swathi on 28/6/17.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var stepDefinition = require('/home/swathi/Protractor/protractor/Scenario3-SavingTaxPlans/javascripts/methodImplementation.js');
var logindetails = {
    userid : "amit.kumar@axisrooms.com" ,
    password : "password"
};
var dataForTaxPlan = {
   chainIdsAndPropertyIds :  [
       // {'chain_id': 203, 'property_id': 204},
       // {'chain_id': 175, 'property_id': 177},
       // {'chain_id': 150, 'property_id': 151},
       // {'chain_id': 175, 'property_id': 176},
       // {'chain_id': 196, 'property_id': 197},
       // {'chain_id': 220, 'property_id': 221},
            // {'chain_id': 102, 'property_id': 103},
                // {'chain_id': 160, 'property_id': 161},
                //  {'chain_id': 189, 'property_id': 190},
                //{'chain_id': 138, 'property_id': 139},
                // {'chain_id': 250, 'property_id': 251}
    ]
};
var myStepDefinitionsWrapper = function () {

    this.Given(/^Indu go to "([^"]*)"$/, function(site) {
        browser.get(site);
    });
    this.When(/^Indu enters login credentials and clicks login$/, function() {
        stepDefinition.login(logindetails);
        //console.log(Object.keys(dataForTaxPlan).length); //1
        //console.log(Object.keys(dataForTaxPlan.chainIdsAndPropertyIds).length); //2
        expect(browser.getCurrentUrl()).to.eventually.equal('https://crs.axisrooms.com/chains/0');
    });
    this.Then(/^Indu navigates to specified chainId and propertyId and saves the taxplan$/, function() {
        // browser.get("https://crs.axisrooms.com/chains/"+dataForTaxPlan.chainIdsAndPropertyIds[0].chain_id+"/properties/"+dataForTaxPlan.chainIdsAndPropertyIds[0].property_id+"/dashboard").then(function()
        // {
            stepDefinition.editTaxPlan(dataForTaxPlan.chainIdsAndPropertyIds);
       // });
    });
};
module.exports = myStepDefinitionsWrapper;
