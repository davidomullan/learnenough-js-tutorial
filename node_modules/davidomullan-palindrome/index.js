module.exports = Phrase;


// Adds 'Reverse a string' functionality to strings
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

// Define a Phrase object
function Phrase(content) {
	this.content = content;

	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		if (this.letters()) {
			return this.processedContent() === this.processedContent().reverse();
		}
		else {
			return false;
		}
	}

	this.letters = function letters() {
		const lettersRegEx = /[a-z]/gi;
		return (this.content.match(lettersRegEx) || []).join("");
	}
}