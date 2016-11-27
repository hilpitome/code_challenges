function difference(a,b){
  
	s = [];	
	for (i = 0; i < b.length; i++){
		for (j = 0; j < a.length; j ++){
			
			if (a[j]==b[i]){
				delete a[j]
				
				
			}		
		}

	}
	for (k = 0; k < a.length; k++){
		if (a[k]!= undefined){
			s.push(a[k])
		}
	}
	console.log(s.length);
}