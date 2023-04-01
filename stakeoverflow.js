var knapp = document.getElementById("knapp");

knapp.onclick = function() {

    var lonn = document.getElementById("lonn");

    var lonnUt = document.getElementById("lonnUt");
    var skattUt = document.getElementById("skattUt");

    var result = 0;

    if(lonn.value<450000) {
        result = lonn.value * .28;
    }
    else {
        result = lonn.value * .32;
    }

    lonnUt.innerHTML = ("Lønnen din er kr: " + lonn.value + ",-");
    skattUt.innerHTML = "Skatten din er kr: " + result + ",-";
}
//*/*/That way you give the user a chance to input numbers before you try to
// perform calculations on those numbers.

//(Note: I keep re-editing this because I'm having a lot of trouble
//deciphering the actual logic of what you're trying to do. The variable names
// don't help, since I don't speak that language. It's certainly possible that there
//are other problems here as well. But the main one is that you need to perform the
// calculations after the user types the values, not before.)

//Edit: I've further modified the code here after finding another
// significant issue. You were trying to access a .value property on h2 elements,
// which doesn't exist. You were also trying to store information in those elements
// as though they were variables.

//Instead,// just declare a variable to store the result of your
// calculation. Get the input (lonn), perform the calculation and get a result (result), write the output to the HTML elements (lonnUt and skattUt).
