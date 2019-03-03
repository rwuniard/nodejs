const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());

// Get host
console.log(myUrl.host);

// Get hostname (doesn't get port number).
console.log(myUrl.hostname);

// Get Pathname
console.log(myUrl.pathname);

// Serialized query.
console.log(myUrl.search);

// Param objects
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.toString());

// Loop through the param
myUrl.searchParams.forEach((value, name) => {console.log(`${name}: ${value}`)});