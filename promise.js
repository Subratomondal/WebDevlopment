var ans=new Promise((res,rej)=>{
    if(ture){
        return res();
    }
    else{
        return rej();
    }
})

ans
    .then(function(){
        console.log("resolved");
    })
    .catch(function(){
        console.log("Not resolved");
    })


// user will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject
var ans = new Promise((res, rej)=>{
    var number = Math.floor(Math.random()*10);
    if(number<5){
        return res();
    }
    else{
        return rej();
    }
 })

 ans.then(function(){
    console.log("below");
 })
 .catch(function(){
    console.log("above");
 })

//sabse pahele ghar par aao
//gate kholo aur gate lagao
//khana khao so jao

var ans = new Promise(function(res,rej){
    return res("sabse pahele ghar par aao");
})

var p2 =ans.then(function(data){
    console.log(data);
    return new Promise(function(res,req){
        return res("gate kholo our gate lagao");
    })
})
var p3 =p2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("Khana khao aur sojao");
    })

})
p3.then(function(data){
    console.log(data);
})
