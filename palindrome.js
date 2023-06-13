// Adds 'Reverse a string' functionality to strings
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

// Define a Phrase object
function Phrase(content) {
	this.content = content;

	this.processedContent = function processedContent() {
		return this.content.toLowerCase();
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}

	this.louder = function louder() {
		return this.content.toUpperCase();
	}
}

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns translation processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.translation.toLowerCase();
	}
}

TranslatedPhrase.prototype = new Phrase();

phrase = new Phrase("Racecar");

console.log(phrase.content);
console.log(phrase.palindrome());
console.log(phrase.louder());

let frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.palindrome());
