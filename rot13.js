function rot13(message){
	message_array = message.split("")
	var rotated = [];
	var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	

	for (i = 0; i < message_array.length; i++){
		var rotated_letter = "";
		var counter = 0
		var rorated_index = 0;
		if(alphabetLower.indexOf(message_array[i])==-1 && alphabetUpper.indexOf(message_array[i])==-1){
					rotated.push(message_array[i])
		
			
		} else if (message_array[i].charCodeAt(0)>= 97){
			
			for (j = 0; j < alphabetLower.length; j++){
				
				if(alphabetLower[j]==message_array[i]){
					counter = alphabetLower.indexOf(message_array[i])+1+13;
					rorated_index = (counter%26)-1;
					rotated_letter = alphabetLower[rorated_index];
					rotated.push(rotated_letter);
				}
			}
	
		} else {
			for (k = 0; k < alphabetUpper.length; k++){
				if(alphabetUpper[k]==message_array[i]){
					counter = alphabetUpper.indexOf(message_array[i])+1+13;
					rorated_index = (counter%26)-1;
					rotated_letter = alphabetUpper[rorated_index];
					rotated.push(rotated_letter);
				}
			}
		
		}
	}
	return rotated.join(""));
};
  
  



