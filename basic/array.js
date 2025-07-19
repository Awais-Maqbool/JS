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
