let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
	// Phrase#palindrome
	describe("#palindrome", function() {

		it("should return false for a non-palindrome", function() {
			let nonPalindrome = new Phrase("apple");
			assert(!nonPalindrome.palindrome());
		});

		it("should return true for a palindrome", function() {
			let palindrome = new Phrase("racecar");
			assert(palindrome.palindrome());
		});

		it("should return true for a mixed-case palindrome", function() {
			let mixedCasePalindrome = new Phrase("RacEcAr");
			assert(mixedCasePalindrome.palindrome());
		});

		it("should return true for a palindrome with punctuation", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			assert(punctuatedPalindrome.palindrome());
		});

		it("should return false for an empty string", function() {
			let emptyPalindrome = new Phrase("");
			assert(!emptyPalindrome.palindrome());
		});

	});

	// Phrase#letters
	describe("#letters", function() {

		it("should return only letters", function() {
			let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
			assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
		});

		it("should return empty string", function() {
			let numberPalindrome = new Phrase("24542");
			assert.strictEqual(numberPalindrome.letters(), "");
		});

	});
});