$(document).ready(function(){
	var headingTemplate = Handlebars.compile('<h1>{{heading}}</h1>');
var bodyText = Handlebars.compile('<p>{{body}}</p>');


var headingTwo = document.getElementById('main-heading');
var body2 = document.getElementById('body-text');
// var body2 = $('.body-text');

headingTwo.innerHTML = headingTemplate({heading: 'Welcome to the Pokemon Post 2016'});
body2.innerHTML = bodyText({body: 'This is site for finding out information and news about pokemon GO 2016'});

});

