/* Quote generator */

var quotes = [
	'Far better an approximate answer to the right question, which is often vague, than an exact answer to the wrong question, which can always be made precise',
	'There is no data that can be displayed in a pie chart, that cannot be displayed <i>better</i> in some other type of chart',
	'Doing statistics is like doing crosswords, except that one cannot know for sure whether one has found the solution',
	'An extraordinary claim requires extraordinary proof',
	'The weight of evidence for an extraordinary claim must be proportioned to its strangeness',
	'A wise man proportions his belief to the evidence',
	'No testimony is sufficient to establish a miracle, unless the testimony be of such a kind, that its falsehood would be more miraculous than the fact which it endeavors to establish',
	'Any idea seriously entertained tends to bring about the realization of itself',
	'If you hit a wrong note, it’s the next note that you play that determines if its good or bad',
	'Without deviation from the norm, progress is not possible',
	'Jazz isn’t dead, it just smells funny',
	'Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid',
	'“So Frank, you have long hair. Does that make you a woman?”<br>“You have a wooden leg. Does that make you a table?”',
	'It’s  better to have something to remember, than anything to forget',
	'Music is the only religion that delivers the goods',
	'Man is the metre of all things, the hand is the instrument of instruments, and the mind is the form of forms',
	'Mistakes are just things we didn’t mean to play. It doesn’t mean they are wrong',
	'A life is like a garden. Perfect moments can be had, but not preserved, except in memory',
	'Mathematics is the art of giving the same name to different things',
	'I learned a big lesson: don’t come to a conclusion on something based on someone else’s opinion. Form your own',
	'The quote, ‘the only disability in life is a bad attitude,’ is bullshit. No amount of smiling at a flight of stairs has ever made it turn into a ramp'
]

var authors = [
	'John Tukey',
	'John Tukey',
	'John Tukey',
	'Marcello Truzzi',
	'Pierre-Simon Laplace',
	'David Hume',
	'David Hume',
	'Smooth McGroove’s fortune cookie',
	'Miles Davis',
	'Frank Zappa',
	'Frank Zappa',
	'Frank Zappa',
	'Frank Zappa',
	'Frank Zappa',
	'Frank Zappa',
	'Aristotle',
	'Victor Wooten',
	'Leonard Nimoy’s last tweet',
	'Henry Poincaré',
	'Herbie Hancock',
	'Stella Young'
]

function newQuote() {
	var quoteNumber = Math.floor(Math.random() * (quotes.length));
	
	function doQuote() {
		$("#quoteDisplay")
			.fadeOut(500)
			.queue(function(){
				$(this).html(quotes[quoteNumber]).dequeue();
			})
			.fadeIn(500)
	}
	function doAuthor() {
		$("#authorDisplay")
			.fadeOut(500)
			.queue(function(){
				$(this).html(authors[quoteNumber]).dequeue();
			})
			.fadeIn(500)
	}
	doQuote();
	doAuthor();
}
