function z(){
    var b= 100;
    function x(){
        var a= 10;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();