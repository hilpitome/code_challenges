function alan(x){
	var stations =['Norwich', 'Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway', 'London'];
	if (stations.length<x.length){
		return 'No, seriously, run. You will miss it.';
	}else{
		for(i = 0; i< stations.length; i++){
			if(x.contains(stations[i]==true)){
				//just go to the next i
			}else{
				return 'No, seriously, run. You will miss it.'
			}
		}
		
		return 'Smell my cheese you mother!'
	}
}
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}