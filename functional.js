let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: North Dakota -> north-dakota
function urlify(string){
	return string.toLowerCase().split(/\s+/).join("-");
}


/////////////////////////////////////////////////

// urls: Imperative version
function imperativeUrls(elements){
	let urls = [];
	elements.forEach(function(element) {
		urls.push("https://example.com/".concat(urlify(element)));
	});
	return urls;
}

console.log(imperativeUrls(states));

// urls: Functional Version
function functionalUrls(elements){
	return elements.map(element => "https://example.com/".concat(urlify(element)));
}

console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
	let singles = [];
	elements.forEach(function(element) {
		if (element.split(/\s+/).length === 1) {
			singles.push(element);
		}
	});

	return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
	return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

/////////////////////////////////////////////////
// 6.2.1 Exercise ///////////////////////////////
/////////////////////////////////////////////////

function functionalIncludes(elements) {
	return elements.filter(element => element.includes("Dakota"));
}

console.log(functionalIncludes(states));

function functionalRegex(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(functionalRegex(states));

/////////////////////////////////////////////////
// 6.3.1 Reduce /////////////////////////////////
/////////////////////////////////////////////////

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum: Imperative version
function imperativeSum(elements) {
	let sum = 0;
	elements.forEach(function (element) {
		sum += element;
	});
	return sum;
}

console.log(imperativeSum(numbers));

// Sum: Functional version
function functionalSum(elements) {
	return elements.reduce((sum, element) => sum + element);
}

console.log(functionalSum(numbers));

/////////////////////////////////////////////////
// 6.3.2 Reduce /////////////////////////////////
/////////////////////////////////////////////////

// lengths: Imperative version
function imperativeLengths(elements) {
	let lengths = {};
	elements.forEach(function (element) {
		lengths[element] = element.length;
	});
	return lengths;
}

console.log(imperativeLengths(states));

// lengths: functional version
function functionalLengths(elements) {
	return elements.reduce((lengths, element) => {
		lengths[element] = element.length;
		return lengths;
	}, {});
}

console.log(functionalLengths(states));


/////////////////////////////////////////////////
// 6.3.4 Exercise ///////////////////////////////
/////////////////////////////////////////////////

// Factorial Function aka: !
function functionalProduct(elements) {
	return elements.reduce((product, element) => product*=element, 1);
}

console.log(functionalProduct(numbers));

// lengths: functional version
function functionalLengthsShort(elements) { return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});}

console.log(functionalLengthsShort(states));