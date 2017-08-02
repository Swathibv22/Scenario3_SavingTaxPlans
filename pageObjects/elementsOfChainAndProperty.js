
var propertyPage = function(){
    this.ourChainToEdit = element(by.css('.card-gradient'));
    this.ourProperty1 = element.all(by.css('.card-content')).get(0);
    this.ourProperty2 = element.all(by.css('.card-content')).get(1);

}
module.exports = propertyPage;