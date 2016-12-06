function pascal(depth) {
	var start_arr = [[1],[1,1]]
	if (depth==1){
		return JSON.stringify([[1]])
	} else if(depth==2){
		return JSON.stringify(start_arr)
	}
	else{
		var next_arr
		for(i = 1; i <= depth-2; i++){
			next_arr = arrAdder(start_arr[i])
			
			start_arr.push(next_arr)
		}
		return JSON.stringify(start_arr)
	}
}
function arrAdder(arr){
	var counter = 0
	var lastArr = []
	for (m = 0; m<arr.length-1; m++){
			
		counter = arr[m]+arr[m+1]
		lastArr.push(counter)
	}
	lastArr.push(1)
	lastArr.unshift(1)
	return lastArr
}