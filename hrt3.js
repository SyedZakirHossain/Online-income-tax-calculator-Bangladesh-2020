
  function kk4pp(){
    var a = document.getElementById('n5a').value;
    var b = document.getElementById('n5b').value;
    var c = document.getElementById('n5c').value;
    var basic = document.getElementById('n1a').value;
    var bhalf=parseInt(parseInt(basic)/2);
    var hl=300000;
    if (parseInt(bhalf)<=parseInt(hl)){

        document.getElementById('n5b').value= parseInt(bhalf);
        document.getElementById('n5c').value=0;
    }
    if (parseInt(bh)>=300001){
      document.getElementById('n5b').value=parseInt(hl);
      document.getElementById('n5c').value=parseInt(a)-parseInt(hl);
    }
  //  if (!isNaN(c)) {
  //  document.getElementById('n5c').value = c;
  //  }
    }
