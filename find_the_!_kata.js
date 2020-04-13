// Goal: display the symbol "!" from every variables

// 1
var variable1 = [4, 'a', true, '!', 3.14];

console.log(variable1[3])

// 2
var variable2 = {
	a: '?',
	b: '!',
	c: '€',
	d: '%',
};

console.log(variable2.b)

// 3
var variable3 = 'Hello Ironhack!';

console.log(variable3[variable3.length-1])

var variable4 = ['Hello', 'Hola', 'Salut!', 'Hallo'];

console.log(variable4[2][variable4[2].length-1])

var variable5 = {};
variable5[variable4[0]] = '!';

console.log(Object.values(variable5)[0])

var variable6 = {
	3: '!',
};

console.log(Object.values(variable6)[0])

var variable7 = [[[[[['!']]]]]];

console.log(variable7[0][0][0][0][0][0])

var variable8 = {
	a: {
		b: {
			c: { d: { e: 'I am not here' } },
		},
		f: {
			g: 'I am not here also',
			h: {
				i: '!',
			},
		},
	},
};

console.log(variable8.a.f.h.i)

var variable9 = {
	europe: {
		spain: ['Madrid', 'Barcelona'],
		france: ['Paris'],
		germany: ['Berlin!'],
	},
	america: {
		'united-states': ['Miami'],
		mexico: ['Mexico City'],
	},
};

console.log(variable9.europe.germany[0].slice(-1))

var variable10 = {
	europe: {
		spain: ['Madrid', 'Barcelona'],
		france: ['Paris'],
		germany: ['Berlin'],
	},
	america: {
		'united-states': ['Miami!'],
		mexico: ['Mexico City'],
	},
};

console.log(variable10.america['united-states'][0].slice(-1))

// Uncomment the following lines

console.log(variable1[3]);

// console.log(variable2...); // => "!"
// console.log(variable3...); // => "!"
// console.log(variable4...); // => "!"
// console.log(variable5...); // => "!"
// console.log(variable6...); // => "!"
// console.log(variable7...); // => "!"
// console.log(variable8...); // => "!"
// console.log(variable9...); // => "!"
// console.log(variable10...); // => "!"

function results() {
    console.log(variable1[3])
    console.log(variable2.b)
    console.log(variable3[variable3.length-1])
    console.log(variable4[2][variable4[2].length-1])
    console.log(Object.values(variable5)[0])
    console.log(Object.values(variable6)[0])
    console.log(variable7[0][0][0][0][0][0])
    console.log(variable8.a.f.h.i)
    console.log(variable9.europe.germany[0].slice(-1))
    console.log(variable10.america['united-states'][0].slice(-1))

}

results()