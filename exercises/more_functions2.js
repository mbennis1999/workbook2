"use strict";

function displayreceipt(totalDue, amountPaid){
  var change = amountPaid - totalDue;
  console.log(totalDue);
  console.log(amountPaid);
  console.log(change);
}

displayreceipt(11,75, 20);