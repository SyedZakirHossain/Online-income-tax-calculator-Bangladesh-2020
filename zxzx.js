//House rent calculation
function kk4(){
  var a = document.getElementById('n5a').value;
  var b = document.getElementById('n5b').value;
  var c = document.getElementById('n5c').value;
  var basic = document.getElementById('n1a').value;
  var bh=parseInt(basic)/2;
  var hl=300000;
  var h2=300001;
  var b=000000;
//  var a=000000;
 if (parseInt(bh)>=300000&&a>=300000){
            document.getElementById('n5b').value=parseInt(hl);
             document.getElementById('n5c').value=parseInt(a)-parseInt(hl);
                   }
 if (parseInt(bh)<300000&&a>300000){
      document.getElementById('n5b').value=parseInt(bh);
         document.getElementById('n5c').value=parseInt(a)-parseInt(bh);
   }
    if (parseInt(bh)>=300000&&a<=300000){
          document.getElementById('n5b').value=parseInt(a);
          document.getElementById('n5c').value=0;
    }
if (parseInt(bh)<300000&&a<=300000){
          document.getElementById('n5b').value=parseInt(a);
          document.getElementById('n5c').value=0;
                      }

 //if (parseInt(bh)<300000)=true{
            // document.getElementById('n5b').value=parseInt(bh);
            // document.getElementById('n5c').value=parseInt(a)-parseInt(bh);
    }
  //  else{
                //document.getElementById('n5b').value=300000;
              //  document.getElementById('n5c').value=parseInt(a)-300000;

      // }
 //if (parseInt(bh)>=300001&&a=300000){
        //                document.getElementById('n5b').value=parseInt(a);
          //              document.getElementById('n5c').value=0;


                    function kk5(){
                      var a = document.getElementById('n6a').value;
                      var b = document.getElementById('n6b').value;
                      var c = document.getElementById('n6c').value;
                      var basic = document.getElementById('n1a').value;
                      var bh=parseInt(basic)/10;
                      var hl=120000;
                      var h2=120001;
                      var b=000000;
                    //  var a=000000;
                      if (parseInt(bh)>=120001&&a>=bh &&a>=120000){
                                document.getElementById('n6b').value=parseInt(hl);
                                document.getElementById('n6c').value=parseInt(a)-parseInt(hl);
                                          }
                        if (parseInt(bh)>=120000&&a<=120000){
                               document.getElementById('n6b').value=parseInt(a);
                                document.getElementById('n6c').value=0;
                          }


                      if (parseInt(bh)<120000&&a<bh){
                               document.getElementById('n6b').value=parseInt(a);
                                document.getElementById('n6c').value=0;
                                         }
                       if (parseInt(bh)<120000&&a>bh){
                             document.getElementById('n6b').value=parseInt(bh);
                              document.getElementById('n6c').value=parseInt(a)-parseInt(bh);
                          }
                     //if (parseInt(bh)>=300001&&a=300000){
                            //                document.getElementById('n5b').value=parseInt(a);
                              //              document.getElementById('n5c').value=0;
                                        }
                                        //  if (parseInt(bh)>=300001&&a=300000){
                                                  // document.getElementById('n5b').value=parseInt(a);
                                                  // document.getElementById('n5c').value=0;
                                            // }
