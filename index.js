// Reduce method used to reduce the array to single value.

arr = [2,3,4,2];
arr2 = arr.reduce(function(previous,current){
	console.log(previous+ " " +current);
	return previous + current;
});

console.log(arr2);  // output: 11