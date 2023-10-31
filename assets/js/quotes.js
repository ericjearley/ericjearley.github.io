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
	'The quote, ‘the only disability in life is a bad attitude,’ is bullshit. No amount of smiling at a flight of stairs has ever made it turn into a ramp',
	'When faced with a difficult question, we often answer an easier one instead, usually without noticing the substitution',
	'To the world you may just be one person, but to one person, you may just be their world',
	'You can’t direct the wind, but you can adjust your sails',
	'The man who moves a mountain begins by carrying away small stones',
	'Do not throw the arrow which will return against you',
	'Meditation brings wisdom; lack of meditation leaves ignorance. Know well what leads you forward and what holds you back',
	'If you speak the truth, have a foot in the stirrup',
	'Words have the power to both destroy and heal. When words are both true and kind, they can change our world',
	'If in other sciences we should arrive at certainty without doubt and truth without error, it behooves us to place the foundations of knowledge in mathematics',
	'If music be the food of love, play on',
	'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away',
	'There is no wealth like knowledge, no poverty like ignorance',
	'It has been said that democracy is the worst form of government except all the others that have been tried',
	'Compound interest is the most powerful force in the universe',
	'Chemistry means the difference between poverty and starvation and the abundant life',
	'The whole is more than the sum of its parts',
	'I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use',
	'People can have the Model T in any color - so long as it’s black',
	'It is not the strongest of the species that survive, but the one most responsive to change',
	'For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return',
	'The Earth is the cradle of the mind, but one cannot eternally live in a cradle',
	'We do not inherit the earth from our ancestors, we borrow it from our children',
	'The real problem is not whether machines think, but whether men do',
	'Any sufficiently advanced technology is indistinguishable from magic',
	'Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy',
	'Use the time of a total stranger in such a way that he or she will not feel the time was wasted',
	'Every character should want something, even if it is only a glass of water',
	'Write to please just one person. If you open a window and make love to the world, so to speak, your story will get pneumonia',
	'There are many causes I would die for. There is not a single cause I would kill for',
	'If we wonder often, the gift of knowledge will come'
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
	'Stella Young',
	'Daniel Kahneman',
	'Unknown',
	'Unknown',
	'Confucius',
	'Kurdish Proverb',
	'The Buddha',
	'Turkish Proverb',
	'The Buddha',
	'Roger Bacon',
	'William Shakespeare',
	'Antoine de Saint-Exupry',
	'Ali ibn Abi-Talib',
	'Winston Churchill',
	'Albert Einstein',
	'Robert Brent',
	'Aristotle',
	'Galileo Galilei',
	'Henry Ford',
	'Charles Darwin',
	'Leonardo Da Vinci',
	'Konstantin E. Tsiolkovsky',
	'Native American Song',
	'B. F. Skinner',
	'Arthur C. Clarke',
	'Albert Einstein',
	'Kurt Vonnegut',
	'Kurt Vonnegut',
	'Kurt Vonnegut',
	'Mohandas Gandhi',
	'Arapaho Proverb'
]


// By lines
/*var arr1 = [];
var arr2 = [];
var lines = this.result.split('\n');
lines.map(function(item){
  var tabs = item.split('\t');
  console.log("0",tabs[0], "1",tabs[1]);
  arr1.push(tabs[0]);
  arr2.push(tabs[1]);
});

// test two of the arrays after reading:
for (var i = 0; i < mdarr.length; i++) {
  console.log(arr1[i], arr2[i]);
};
reader.readAsText(file);*/


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
