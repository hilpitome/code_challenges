var lastDigit = function(str1, str2){  
  var num1 = parseInt(str1)
  var num2 = parseInt(str2)
  var ans = num1**num2
  var arr = []
  arr = ans.toString(10).split("")
  return parseInt(arr[arr.length-1])
}