function outerFunc(){
    var value=10;
    function innerFunc(){
        console.log(value);
    }
    value=15;
    return innerFunc;
}

var resultFunc = outerFunc();
console.log(resultFunc.toString());
resultFunc(); // Outputs: 10