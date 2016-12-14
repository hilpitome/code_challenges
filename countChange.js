var countChange = function(money, coins) {
 
	 var count = 0
	 var total = coins.reduce(function(a,b){
		return a + b
	 });
	 if (total== money){
		 count += 1
	 }
	 for (i = 0; i<coins.length; i++){
		 if (money % coins[i]==0){
			count += 1
		} else if ( money % coins[i] < money &&  money % coins[i] > 0){
			var division_result = money/coins[i]
			findCombinableElements(coins[i], division_result)
		}
	 
	
	}
	var findCombinableElements =  function(elem, result){
		var check = elem * result
		var balance = money - check
		var shorter_coins = coins.pop(elem)
		for (j = 0; j < shorter_coins.length; j++){
			if (balance % shorter_coins[j]==0){
				count += 1
			}
		}
		
	}
	 return count
}