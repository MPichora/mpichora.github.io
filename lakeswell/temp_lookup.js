

var wear_at_temp = 
  function (t) {
   var s;
   if(t <= 46) {
     s= "6/5 hooded fullsuit, 8mm boot, 7mm mitten";
   } else if (t <= 54) {
     s= "5/4 hooded fullsuit, 8mm boot, 5mm glove";
   } else if (t <= 58) {
     s= "4/3 fullsuit, 5mm boot, 3mm glove";
   } else if (t <= 64) {
     s= "3/2 fullsuit, 5mm boot, 3mm glove";
   } else if (t <= 70) {
     s= "2/2 springsuit, 5mm boot";
   } else if (t <= 73) {
     s= "1/1 jacket, boardies";
   } else {
     s= "rash guard, boardies";
   }
   return s;
}
