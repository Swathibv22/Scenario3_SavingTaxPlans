var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var loginPageObj = require('/home/swathi/Protractor/protractor/Scenario3-SavingTaxPlans/pageObjects/elementsOfLoginPage.js');
var loginPage = new loginPageObj();
var propPageObj = require('/home/swathi/Protractor/protractor/Scenario3-SavingTaxPlans/pageObjects/elementsOfChainAndProperty.js');
var proppage = new propPageObj();
var taxplanObj = require('/home/swathi/Protractor/protractor/Scenario3-SavingTaxPlans/pageObjects/elementsOfTaxPlanPage.js');
var taxplanPage = new taxplanObj();

var EC = protractor.ExpectedConditions;

var login = function(logindetails){
    loginPage.userid.clear().sendKeys(logindetails.userid);
    loginPage.password.clear().sendKeys(logindetails.password);
    loginPage.loginButton.click();
};


var editTaxPlan = function(chainIdsAndPropertyIds){
    var jsonObjectLength = Object.keys(chainIdsAndPropertyIds).length;
    for(i=0;i<jsonObjectLength;i++) {
        // browser.get("https://crs.axisrooms.com/chains/"+chainIdsAndPropertyIds[i].chain_id+"/properties/"+chainIdsAndPropertyIds[i].property_id+"/dashboard")
        browser.get("https://crs.axisrooms.com/chains/" + chainIdsAndPropertyIds[i].chain_id + "/properties/" + chainIdsAndPropertyIds[i].property_id + "/surchargePlans").then(function () {
            //taxplanPage.taxPlanOption.click().then(function()
            // {
            taxplanPage.listOfTaxPlans.count().then(function (val) {
                var len = JSON.parse(val);
                for (j = 0; j < len; j++) {
                    console.log(len);
                    taxplanPage.editTaxPlanIcon.get(j).click().then(function () {
                        taxplanPage.saveButton.click().then(function () {
                            browser.waitForAngular();
                            console.log("Saved");
                        }, 500);
                    });
                }
            });
        });

       // });
    }
};

module.exports = {};
module.exports.login = login;
module.exports.editTaxPlan = editTaxPlan;
