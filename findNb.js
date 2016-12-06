function findNb(m) {
    // your code
	x = 1;
	n = 0;
	
	while (m>0){
		n = Math.pow(x,3);
		m = m - n;
		x += 1;
		
		console.log(x);
	}
	if (m==0){
		console.log(x)
		return x-1;
	} else{
		return (-1);
	}
    
}
