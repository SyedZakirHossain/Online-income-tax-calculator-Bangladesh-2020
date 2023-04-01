function v13() {
    var lonn = document.getElementById("m12");
    var prodeo_kor = document.getElementById("m13");
    var result = 0;
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
   document.getElementById('m13').value = result;

}
        var brprekd=0;//biniog  rayat purboborti korday
        var br=0;//biniog  rayat
        var braftrkd=0;//biniog  rayat poroboborti korday
        var online disc=2000;
        var rporerkd=0;
        var uts kor=0;
function v15() {
       var brprekd = document.getElementById("m13");
       var br = document.getElementById("m14");
       var prodeo_kor = document.getElementById("m15");
       var result =brprekd-br;
       document.getElementById('m15').value = result;
     }
