type Conversion = (xs: string) => string;

var x: number = 5;

var greet: Conversion = name => "Hello " + name;

var upper: Conversion = xs => xs.toUpperCase();

console.log(greet("ddddddd>>>>"));
