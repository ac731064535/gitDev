var s = {name: 'sd', ord: 111};
console.log(s.name)
for (var key in s){
	delete s.key
	console.log(key,s[key],s.key)
}
console.log(s);

setTimeout(function(){
	console.log('sss')
},2000)

// dev1 开发
setTimeout(function(){
	console.log('dev1')
},1000)
function dev1(){
	console.log('dev1')
}
function dev2(){
	console.log('dev2')
}

