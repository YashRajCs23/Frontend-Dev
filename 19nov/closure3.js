function parentLayer(){
    let parentValue=50;
    function outerFunc(){
        var value=10;
        function innerFunc(){
            console.log("Parent Value: " + parentValue);
            console.log("Inner Value: " + value);
        }
        value=15;
        return innerFunc;
    }
    return outerFunc;
}
var finalFunc = parentLayer()();
console.log(finalFunc.toString());
finalFunc(); 
// Outputs: 
// Parent Value: 50
// Inner Value: 15