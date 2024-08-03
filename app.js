const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

// Correct paths
const firstPath = path.join(__dirname, 'content', 'first.txt');
const secondPath = path.join(__dirname, 'content', 'second.txt');

// Read the first file
const first = readFileSync(firstPath, 'utf8');

// Write to the second file
writeFileSync(secondPath, first, 'utf8');

console.log(first );
