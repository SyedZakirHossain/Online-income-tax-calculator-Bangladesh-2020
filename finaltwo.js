
function ok() {
            var lonn = document.getElementById("m12");
            //var skattUt = document.getElementById("skattUt");
            var prodeo_kor = document.getElementById("m13");
            //var result = 0;
            if(lonn.value >=1 && lonn.value <=300000 ){
            result = lonn.value * 0;
            }
            else if(lonn.value >=300001 && lonn.value <=400000 ){
            result = (lonn.value  - 300000) *.05;
            }
            else if(lonn.value  >= 400001 && lonn.value  <=700000){
            result = (lonn.value  - 400000) *.10 + 5000 ;
            }
            else if( lonn.value  >=700001 && lonn.value  <=1100000){
            result= (lonn.value  - 700000) * .15 + 5000 + 30000;
            }
            else if(lonn.value  >=1100001 && lonn.value  <=1600000 ){
            result = (lonn.value  - 1100000) * .20 + 35000 + 60000;
            }
            else if(lonn.value  >=1600001 ){
            result = (lonn.value - 1600000) * .25 + 35000 + 60000+100000;
            }
            //skattUt.innerHTML = "Nana You should pay taxes with the amount of: " + result + "";
            if (document.getElementById('m12').onchange=true){
             document.getElementById('m13').value =result;
             }
                 }

 function sum555() {
        var nx1 = document.getElementById('m13').value;
        var nx2 = document.getElementById('m14').value;
        var nx3 = document.getElementById('m15').value;
        var result = parseInt(nx1)-parseInt(nx2) ;
        if (!isNaN(result)) {
        document.getElementById('m15').value = result;
             }
           }
