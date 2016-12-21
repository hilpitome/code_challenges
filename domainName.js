function domainName(url){
  var domain = ""
  var re = /http:\/\//
  var re2 = /https:\/\//
  var re3 = /www./

  var new_str = url.replace(re, "") // checks for http and removes if found
  new_str = new_str.replace(re2, "") // checks for https and removes if found
  new_str = new_str.replace(re3, "") // checks for www. and removes if found
  var arr = new_str.split(".")
  domain = arr[0]
  return domain
}
// easier regex way as per top solution on codewars.com
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}