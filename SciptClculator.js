function calculateSum(){
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);

    var res = sum(x, y);

    document.getElementById("res").innerHTML=res;

}
function sum(x, y) {
    return x + y;
}