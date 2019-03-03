// Importing path module. This module is part of the node js.
// look here for the documentation: nod
const path = require('path');

// Print the full path and filename
console.log(__filename);

// Get the filename.
console.log(path.basename(__filename));

// Get the path name.
console.log(path.dirname(__filename));

// Get the extension filename.
console.log(path.extname(__filename));

// Create path object.
console.log(path.parse(__filename));

// Concatenate.
console.log(path.join(__dirname, 'test', 'hello.html'));