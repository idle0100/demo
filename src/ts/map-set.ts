type PersonAttr = {
	name: string;
	age: number
};


const hashMap: Map<string, string> = new Map<string, string>();

const person: PersonAttr = {
	name: 'aa',
	age: 22
};

hashMap.set('a', 'first');
hashMap.set('b', 'second');
hashMap.set('a', 'first-c');

console.log('Map', hashMap);


const obj = {
	a: 'obj-a',
	b: 'obj-b',
}

console.log('obj', obj);


const hashSet: Set<string> = new Set<string>();


hashSet.add('first')
hashSet.add('second')
hashSet.add('second')
hashSet.add('1')
hashSet.add('null')

console.log('Set', hashSet);
