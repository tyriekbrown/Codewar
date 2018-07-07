function findOutlier(integers){
   var evens = [];
   var odds = [];
   for (var i = 0; i < integers.length; i++)
   {
       if ((integers[i] % 2) == 0)
       {
           evens.push(integers[i]);
       }
       else
       {
           odds.push(integers[i]);
       }
   }
   var evennumber = evens.length;
   var oddnumber = odds.length;

   if (evennumber > oddnumber)
   {
       return odds[0];
   }
   else
   {
       return evens[0];
   }
}
