function validSolution(board){
	
	var is_valid = boardValidator(board)	// validate board the first time
	
	var inverted_board = []
	var flag = 1
	var three_by_three_grids = []
	if (is_valid == true){ // check if first test has passed
		flag +=1
		for (indx = 0; indx < board.length; indx++){	// invert board columns to rows 
			inverted_board.push(invertColumn(board, indx))
		}
		is_valid = boardValidator(inverted_board) // validate inverted board
	} 
	if ( is_valid == true ){
		flag += 1
		three_by_three_grids = array_slicer(board) // turn three by three grids into raws
		is_valid = boardValidator(three_by_three_grids) // validate three by three grids as rows
	}

	return is_valid	

}
function boardValidator(sudoku_board){
		  for (var i = 0;  i < sudoku_board.length; i++){
			  var row = sudoku_board[i];
			
			  var zero_counter = 0;
			  var boolean_returned = true;
			  var check = false
		  
		  
		  
			for(var j = 0; j < row.length; j++){		
				check = checkNumerals(row[j])
				if (check==false){
					boolean_returned = false
					return boolean_returned
				} else if ( row[j] == 0){
					zero_counter += 1 // keep count of number of zeros in the row
					if (zero_counter>1){ // number of zeros should not exceed 1
					boolean_returned = false
					return boolean_returned 
				} else {
					boolean_returned 
				}
			
			}
		
		
	  }
		
	  
	}
	return boolean_returned
}
/* Check if element is
 * between 0 and 9
 */ 
function checkNumerals(num){
	var numeric = [0,1,2,3,4,5,6,7,8,9]
	var bool_rtnd = false;
	
	for (k = 0; k< numeric.length; k++ ){
		if (num == numeric[k]){
			bool_rtnd = true
			return bool_rtnd
		} 
	}
	return bool_rtnd
}
/* function to change columns
 * to raws before 
 * checking if it is a valid board again
 */
function invertColumn( nested_arr, column){
	var raw_inverted = []
	for (i = 0; i < nested_arr.length; i++){
		var row = nested_arr[i]
		raw_inverted.push(i)
	}
	return raw_inverted
	
}
/* if the first board and inverted boards return true
* this function starts turning the first board into a grid of 3 by 3
* turns it into a nine by nine raw for the final test of validity
*/
function array_slicer(nested_array){ // slices the nine by nine board into a 3 by 9 array
	var sliced_arrays = []
	for (l = 0; l<=10; l+=3){
	
		sliced_arrays.push(nested_array.slice(l, l+3))
		
	}
	sliced_arrays.pop(sliced_arrays[-1])

	
	var massive_array = gridInRows(sliced_arrays)
	var three_by_27 = changeToThreeByTwentySeven(massive_array)
	var array_of_grid = changeToNineByNine(three_by_27)
	return array_of_grid
}
function array_slicer_2(one_row_array){
	var sliced_arrays = []
	for (l = 0; l<=10; l+=3){
	
		sliced_arrays.push(one_row_array.slice(l, l+3))
		
	}
	sliced_arrays.pop(one_row_array[-1])
	

	
	return sliced_arrays
}
/*turns three by nine array into a large matrix of the grid
* my head heart trying to understand it
* but i think it was a 3 by 9 by 3 array
*/ 
function gridInRows(arrr){ 

	var grid_in_rows  = []
	var first_three = []
	var second_three = []
	var last_three = []
	for(m=0; m<arrr.length; m++){
		
		var  inner_arr = []
			inner_arr = arrr[m] 
		
		
		for( n = 0; n< inner_arr.length; n++){ 
			
			
			var row_divided_in_three = array_slicer_2(inner_arr[n])
			
		
			for (p = 0; p< row_divided_in_three.length; p++){
				if (p == 0){
					first_three.push(row_divided_in_three[p])
			
				}
				if (p == 1){
					second_three.push(row_divided_in_three[p])
				}
				if (p == 2){
					last_three.push(row_divided_in_three[p])
				}
				
			}
			
			
		}
		
		
		
	}
	
	grid_in_rows.push(first_three)
	grid_in_rows.push(second_three)
	grid_in_rows.push(last_three)
	return grid_in_rows
}
/* changes back the massive array grid array into a 3 by
* 27 array
*/
function changeToThreeByTwentySeven(massive_array){
	var three_by_twenty_seven = []
	var first_row = []
	var second_row = []
	var third_row = []
	for(r=0; r<massive_array.length; r++){
		var row_to_iterate = massive_array[r]
		
		for(s=0; s<row_to_iterate.length; s++){
			var inner_most_arr = row_to_iterate[s]
			for (t = 0; t< inner_most_arr.length; t++){
				if (r==0){
					first_row.push(inner_most_arr[t])
					
				}
				if (r==1){
					second_row.push(inner_most_arr[t])
				}
				if (r==2){
					third_row.push(inner_most_arr[t])
					
				}
			}
		}
	}
	three_by_twenty_seven.push(first_row)
	three_by_twenty_seven.push(second_row)
	three_by_twenty_seven.push(third_row)
	return three_by_twenty_seven
}
/* changes the 3 by 27 array
* back into the 9 by 9 array for the final test of validity as rows
*/
function changeToNineByNine(three_by_27){

	var array_of_grid = []
	for(u = 0; u < three_by_27.length; u++){
		var nested_rows = three_by_27[u]
		var nine_elements = []
		for (v = 0; v < nested_rows.length; v+=9 ){
		nine_elements = nested_rows.slice(v,v+9)
		array_of_grid.push(nine_elements)
		}
	}
	return array_of_grid
}



