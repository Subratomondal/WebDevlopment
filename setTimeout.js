function x(){
    for(var i=1;i<=5;i++){
        function clouser(x){
            setTimeout(function(){
                console.log(x)
            },x*1000)
        }
        clouser(i)
    }
   console.log("Hello JS")
}
x();