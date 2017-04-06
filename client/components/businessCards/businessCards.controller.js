function BusinessCardsController (BusinessCardsService) {
	var vm = this;
	

		BusinessCardsService.getCards()
		.then(function(response){
			vm.businessCards = response.data.cards;
		});
}

BusinessCardsController.$inject = ['BusinessCardsService'];

module.exports = BusinessCardsController;

