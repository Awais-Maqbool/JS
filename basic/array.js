let z = [1,2,3,4,5];

z.push(6);
z.push(7);
z.push(8);
z.pop();

z.unshift(11);
z.unshift(12);
z.shift();

console.log(z.includes(11));
console.log(z.includes(12))

console.log(z.indexOf(11));
console.log(z.indexOf(12));
console.log(z.lastIndexOf(1))

let y = z.join();

console.log(z);
console.log(y);
console.log(typeof y)

const x = z.slice(1,3);
console.log(x);
console.log(z);
 
const v = z.splice(1,3);
console.log(v);
console.log(z);


// let marve = ["ironman","spiderman","thor","captain"];
// let dc = ["superman","flash",'batman'];
// marve.push(dc);
// console.log(marve)
// console.log(marve[4][1])
// let heroes = marve.concat(dc);
// console.log(heroes)

// let heroes = [...marve,...dc]
// console.log(heroes)


// let arr = [1,2,3,[4,5,6],7,8,[9,[10,11]]];
// let arr2 = arr.flat(Infinity);
// console.log(arr2)

// console.log(Array.isArray('awais'));
// console.log(Array.from('awais'));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3))