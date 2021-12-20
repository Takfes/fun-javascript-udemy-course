
// Exercise 1
document.getElementById('convert').onclick = function() {
    var cel = document.getElementById('temp_celsius').value;
    console.log('Temp in celc : ', cel)
    document.getElementById('temp_fahr').innerHTML = (cel * 9/5) + 32
}

// Exercise 2
document.getElementById('anos_copa').innerHTML = ''
for(var wc = 2022; wc<2051; wc +=4){
    // console.log(wc.toString())
    document.getElementById('anos_copa').innerHTML += '<li>' + wc.toString() + '</li>'
}

// Exercise 3
document.getElementById('calculate').onclick = function() {

    var g1 = parseInt(document.getElementById('grade1').value)
    var g2 = parseInt(document.getElementById('grade2').value)
    var ab = parseInt(document.getElementById('absences').value)
    var avg = (g1+g2)/2

    if( (avg > 6.5) && (ab < 0.3 * 20) ){
        document.getElementById('result').innerHTML = 'pass'
    } else if ( (avg < 6.5) & (ab > 0.3 * 20) ){
        document.getElementById('result').innerHTML = 'insufficient presence & grade'
    } else if ( avg < 6.5 ){
        document.getElementById('result').innerHTML = 'insufficient grade'
    } else if ( ab > 0.3 * 20 ){
        document.getElementById('result').innerHTML = 'insufficient presence'
    }
}

// Exercise 4