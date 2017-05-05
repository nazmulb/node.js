function printHello(name){
   console.log(name +", World!");
}

// Now call above function after 2 seconds
var t = setTimeout(function(){printHello("Nazmul")}, 2000);
setTimeout(printHello, 2000, "Kausar");

// Now clear the timer
clearTimeout(t);