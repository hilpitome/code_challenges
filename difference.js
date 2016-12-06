function difference(a,b){
  
	s = [];	// array to be returned
	for (i = 0; i < b.length; i++){
		for (j = 0; j < a.length; j ++){
			
			if (a[j]==b[i]){
				delete a[j]				
				
			}		
		}

	}
	/* for loop to remove 'undefined' elements 
	in the array due to using delete method 
	*/
	for (k = 0; k < a.length; k++){
		if (a[k]!= undefined){
			s.push(a[k])
		}
	}
	return s
}
