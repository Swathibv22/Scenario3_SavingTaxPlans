
var taxPlanpage = function(){
    this.taxPlanOption = element(by.linkText('Tax Plans'));
    this.editTaxPlanIcon = element.all(by.css('button[ng-click="editSurchargePlan($event)"]'));
    this.saveButton = element(by.buttonText('Save'));
    this.listOfTaxPlans = element.all(by.css('.panel-heading.pointer.surcharge-plan-tab'));
}
module.exports = taxPlanpage;