function difference(a,b){
  
<<<<<<< HEAD
	s = [];	// array to be returned
=======
	s = [];	
>>>>>>> e41b8ba66eccc438c6688b21d101d01c491081c9
	for (i = 0; i < b.length; i++){
		for (j = 0; j < a.length; j ++){
			
			if (a[j]==b[i]){
<<<<<<< HEAD
				delete a[j]				
=======
				delete a[j]
				
>>>>>>> e41b8ba66eccc438c6688b21d101d01c491081c9
				
			}		
		}

	}
<<<<<<< HEAD
	/* for loop to remove 'undefined' elements 
	in the array due to using delete method 
	*/
=======
>>>>>>> e41b8ba66eccc438c6688b21d101d01c491081c9
	for (k = 0; k < a.length; k++){
		if (a[k]!= undefined){
			s.push(a[k])
		}
	}
<<<<<<< HEAD
	return s
}
=======
	console.log(s.length);
}
>>>>>>> e41b8ba66eccc438c6688b21d101d01c491081c9
