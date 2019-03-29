/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

(function () {
	"use strict";
	var total = 0;
	for(var i=0; i < filenames.length; i++){
		outputCartRow(filenames[i], titles[i],quantities[i],prices[i].toFixed(2),calculateTotal(quantities[i],prices[i].toFixed(2)).toFixed(2));
		total=total+calculateTotal(quantities[i],prices[i]);
		}
		
	var tax = total*.1;
	calcRow( "Subtotal", total.toFixed(2), false);
	calcRow( "Tax", tax.toFixed(2), false);
	
	var shippingCost = 40;
	if (total >= 1000)
		shippingCost = 0;
	
	calcRow("Shipping", shippingCost.toFixed(2), false);
	calcRow("Grand Total",(total+tax+shippingCost).toFixed(2), true);
})();