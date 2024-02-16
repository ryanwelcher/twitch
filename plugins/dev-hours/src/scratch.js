/**
 * Language features
 */

// Rest/Spread

// Object/Array destructuring
const obj = {
	name: 'Ryan',
	message: 'hi',
	address: {
		street: 'anystreet',
		number: 1,
	},
};

const { name, ...everythingElse } = obj;

const newPerson = {
	...obj,
	name: 'Fred',
};

const obj = {
	name: 'Fred',
	message: 'hi',
	address: {
		street: 'anystreet',
		number: 1,
	},
};

console.log( everythingElse );
const ary = [ 'ryan', 'nick', 'justin' ];

const newAry = [ ...ary, 'Birgit' ];

const [ first, , theName ] = ary;
console.log( theName );

// Optional chaining

const streetNumber = obj?.address?.number || 'default'; // undefined

// Object property shorthand

const name = 'Nick';
const myObject = {
	name,
	job: 'Developer Advocate',
};

// Arrow function expressions

const onClick = () => {
	console.log( 'clicked' );
};

const add = ( num, num ) => num + num;

// ES Modules import/export
