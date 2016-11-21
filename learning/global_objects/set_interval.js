function printHello(name){
   console.log(name +", World!");
}

// Now call above function after 2 seconds
var t = setInterval(function(){printHello("Nazmul")}, 2000);

// Now clear the interval
setTimeout(function(){clearInterval(t)}, 10000);