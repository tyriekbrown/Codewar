function abbrevName(name){
 var arrayName = name.split(" ");
 var firstIn = arrayName[0].charAt(0).toUpperCase();
 var secondIn = arrayName[1].charAt(0).toUpperCase();
 return firstIn + "." + secondIn

}
