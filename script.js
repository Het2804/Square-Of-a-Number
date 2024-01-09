function squarecalculator() {
  var a = document.getElementById('s').value;

var result= Math.pow(a,2)

document.getElementById('result').innerHTML = 'The square of  '+  a + ' is: ' + result ;
}
