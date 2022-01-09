const {URL} = require('url');

const myURL = new URL('http://www.gilbut.com.kr/?page=3&limit=10&&category=nodejs&category=javascript');

console.log('searchParams', myURL.searchParams);
console.log('.getAll',myURL.searchParams.getAll('category'));
console.log('.get',myURL.searchParams.get('limit'));
console.log('.has',myURL.searchParams.has('page'));
console.log('.keys',myURL.searchParams.keys());
console.log('.values',myURL.searchParams.values());


myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log('append',myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter','es6');
console.log('set',myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log('delete',myURL.searchParams.getAll('filter'));

console.log('toString',myURL.searchParams.toString());






