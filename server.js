var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

var businessCardsRoutes = require(__dirname + '/server/routes/businessCardsRoutes.js');
app.use('/cards', businessCardsRoutes);

app.listen(process.env.PORT || 4000, function(){
	console.log('Youse a bitch!!!   Nah, Im kidding, youre cool. BTW your server is running');
});