function tot18() {

           var nt2 = document.getElementById('x2c').value;
           var nt3 = document.getElementById('x3c').value;
           var nt4 = document.getElementById('x4c').value;
           var nt5 = document.getElementById('x5c').value;
           var nt6 = document.getElementById('x6c').value;
           var nt18 = document.getElementById('x18c').value;
           var result = parseInt(nt2)+parseInt(nt3)+parseInt(nt4)+parseInt(nt5)+parseInt(nt6)
              if (!isNaN(result)) {
           document.getElementById('x18c').value = result;
            document.getElementById('x1c').value = result;
            document.getElementById('m2').value = result;

                }
              }
