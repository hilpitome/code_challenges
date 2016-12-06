var palindromeChainLength = function(n) {
	var answer = 0;

	var counter = 0;

    if (n<10){
	 return counter;
    }else{
		 
		if (n==reversed(n)){
			return 0;
		} else {
				console.log(answer);
			answer = reverseAdd(n, counter);
			console.log(answer);
		 
		}
			
			
	}
				  
	    
   return answer; 	
	
};
var reversed = function(namba){
		var r = namba.toString().split('').reverse().join('');	
		return Number(r);
};

var reverseAdd = function(num, c){		
	var counter = c;
	var check = 0;
	counter += 1
	
	 check = num + reversed(num);
		if (check !== reversed(check)){		
		
		
		reverseAdd(check, counter);
			console.log(counter);
			console.log(check);
		
		
		} else{
		
		
			return counter;
		}
	
	
};

