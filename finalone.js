var a9 = document.getElementById('a9').value;
var a9a = document.getElementById('a9').value;
 function sump() {
          var a2 = document.getElementById('a2').value;
          var a3 = document.getElementById('a3').value;
          var a4 = document.getElementById('a4').value;
          var a5 = document.getElementById('a5').value;
          var a6 = document.getElementById('a6').value;
          var a7 = document.getElementById('a7').value;
          var a8 = document.getElementById('a8').value;
          var resultp =  parseInt(a2)+ parseInt(a3) + parseInt(a4)+ parseInt(a5) + parseInt(a6)+ parseInt(a7) + parseInt(a8);
          if (!isNaN(resultp)) {
            document.getElementById('a9').value = resultp;
            document.getElementById('a9a').value = resultp;
               }
             }

      var a9a = document.getElementById('a9').value;
       var a10a = document.getElementById('a10').value;
function kkrn() {
         var a9a = document.getElementById('a9').value;
         var a1 = document.getElementById('a1').value;
         var a10a = document.getElementById('a10').value;
         var result9 = parseInt(a1)-parseInt(a9a);
         if (!isNaN(result9)) {
         document.getElementById('a10').value = result9;
         document.getElementById('m3').value = result9;
                }
              }


function rent30(){
      var a = document.getElementById('a1').value;
      var b = document.getElementById('a2').value;
      var b=parseInt(rex);
      var rex =(parseInt(a)*30/100);
      if (!isNaN(rex)) {
        document.getElementById('a2').value = rex;
                      }
                    }


function rentchk(){
    var a = document.getElementById('a1').value;
    var b = document.getElementById('a2').value;
       if (document.getElementById('rntck1').checked=true){
         var ren =(parseInt(a)*25/100);
           document.getElementById('a2').value = ren;

            }
               }


function addk(){
    var x = document.getElementById('m10').value;
    var y = document.getElementById('m11').value;
    var z =parseFloat(x) + parseFloat(y);
      if (!isNaN(z)) {
   document.getElementById('m12').value =parseFloat(z);
 //  document.getElementById('m2').value =parseFloat(z);
            }
          }


function sft(){
  document.getElementById('x3b').value  = document.getElementById('r11').value;
      }


function sumxy() {
         var z1 = document.getElementById("m1").value;
         var z2 = document.getElementById("m2").value;
         var z3 = document.getElementById("m3").value;
         var z4 = document.getElementById("m4").value;
         var z5 = document.getElementById("m5").value;
         var z6 = document.getElementById("m6").value;
         var z7 = document.getElementById("m7").value;
         var z8 = document.getElementById("m8").value;
         var z9 = document.getElementById("m9").value;
         var z10 = parseFloat(z1) + parseFloat(z2) + parseFloat(z3) + parseFloat(z4) + parseFloat(z5) + parseFloat(z6)+parseFloat(z7)+parseFloat(z8)+parseFloat(z9);
         if (!isNaN(z10)) {
             document.getElementById("m10").value=parseFloat(z10);
             document.getElementById("m12").value=parseFloat(z10);
                  }
                }


function add_chk1(){
     var x1=document.getElementById('x1b').value;
     if (document.getElementById('x1a').checked=true){
           x1=0;
           document.getElementById('m2').value=parseInt(x1);
           document.getElementById('x1b').value=parseInt(x1);
         }
         }




function add(){
    var x = document.getElementById('x3b').value;
    var y = document.getElementById('x2b').value;
    var z =parseFloat(x) + parseFloat(y);
      if (!isNaN(z)) {
   document.getElementById('x1b').value =parseFloat(z);
   document.getElementById('m2').value =parseFloat(z);
              }
            }


function myfux(){
   var x=document.getElementById('abcd');

     if(x.style.display==='none'){
       x.style.display="block";
         }
     else{ x.style.display="none";
                 }
               }


function sumryet() {
      var f1 = document.getElementById("v1").value;
      var f2 = document.getElementById("v2").value;
      var f3 = document.getElementById("v3").value;
      var f4 = document.getElementById("v4").value;
      var f5 = document.getElementById("v5").value;
      var f6 = document.getElementById("v6").value;
      var f7 = document.getElementById("v7").value;
      var f8 = document.getElementById("v8").value;
      var f9 = document.getElementById("v9").value;
      var f10 = document.getElementById("v10").value;

         var f11 = parseInt(f1)+parseInt(f2)+parseInt(f3)+parseInt(f4)+parseInt(f5)+parseInt(f6)+parseInt(f7)+parseInt(f8)+parseInt(f9)+parseInt(f10);
      if (!isNaN(f11)) {
      document.getElementById('v11').value = f11;
      document.getElementById("m14").value = f11;
           }
         }
