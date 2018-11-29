/* Photography HTML */

/* define variables */
var loc = 'assets/images/';
var ID = $('#photogallery');

//gallery name
var gName = ['Chicago 2018','Boston 2018','Knoxville 2018','Edinburgh 2017','London 2017','Washington 2017'];
//file name
var fName = ['chicago2018','boston2018','knoxville2018','edinburgh2017','london2017','washington2017'];
//number of galleries
var nGal = gName.length;

/* generate HTML */
//html string variable
var H = [];

for (var ii=0; ii < nGal; ii++) {
	if (ii%2 == 0) { //left column
		H += '<div class="row">';
	}
	H += '<div class="col-sm-6">';
	H += '<h1>' + gName[ii] + '</h1>';
	H += '<img class="img-rounded img-responsive" src="' + loc + fName[ii]+ '_01.jpg" alt="' + fName[ii] + '"></img>';
	
	H += 'Gallery name: ' + gName[ii] + '<br>';
	
	H += '</div>';
	if (ii%2 == 1) { //right column
		H += '</div>';
	}
}

/*H += ('<h1>');
H += ('Hello world.');
H += ('<br>');
H += ('Hello to you, too!');
H += ('</h1>');
*/
/* append HTML */
ID.append(H);