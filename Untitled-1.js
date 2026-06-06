// exercise.js

// Simple exercise module
function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function fibonacci(n) {
	if (n <= 0) return [];
	if (n === 1) return [0];
	const seq = [0, 1];
	while (seq.length < n) seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
	return seq;
}

module.exports = { add, multiply, fibonacci };
