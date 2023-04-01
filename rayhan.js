var payments = [];
var total;
function calcTaxes(amount){
 var tax = 0;
 if(lonn.value<450000) {
     result = lonn.value * .28;
     if(lonn.value >=1 && lonn.value <=300000 ){
     result = lonn.value * 0;
     }
     else if(lonn.value >=300001 && lonn.value <=400000 ){
     result = lonn.value * .05;
     }

     else if(lonn.value  >= 400001 && lonn.value  <=700000){
       result = (lonn.value  - 400000) * .10 + 5000 ;
     }
     else if( lonn.value  >=700001 && lonn.value  <=1100000){
     result= (lonn.value  - 700000) * .15 + 5000 + 30000;
     }
     else if(lonn.value  >=1100001 && lonn.value  <=1600000 ){
     result = (lonn.value  - 1100000) * .20 + 35000 + 60000;
     }
     else(lonn.value  >=1600001 ){
     result = (lonn.value - 1600000) * .25 + 35000 + 60000+100000;
     }

    return result;
    /*
    10% on taxable income from $0 to $9,075, plus
15% on taxable income over $9,075 to $36,900, plus
25% on taxable income over $36,900 to $89,350, plus
28% on taxable income over $89,350 to $186,350, plus
33% on taxable income over $186,350 to $405,100, plus
35% on taxable income over $405,100 to $406,750, plus
39.6% on taxable income over $406,750.
    */
}

$("#addTrans").click(function (calcTaxes(amount)) {

    $("#taxes").html(calcTaxes(amount));
});
