let businessCardsController = require(__dirname + '/businessCards.controller.js');
let businessCardsTemplate = require(__dirname + '/businessCards.html');

let BusinessCardsComponent = {
	template: businessCardsTemplate,
	controller: businessCardsController,
};

angular
.module('businessCardsApp')
.component('cards', BusinessCardsComponent);