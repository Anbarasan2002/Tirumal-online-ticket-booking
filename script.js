function login(){
    var in1=document.getElementById("in1").value;
    var in2=document.getElementById("in2").value;
    console.log("hello")
    if(in1=="" || in2==""){
        alert("PLEASE ENTER CREDINTIALS")
    }
    else{
        document.getElementById("P1").innerHTML=`YOUR LOGIN NAME IS : ${in1}`;
        document.getElementById("P2").innerHTML=`PASSWORD IS : ${in2}`;
    }
    
}
function cancel(){
    history.back();
}

document.getElementById("h4").innerHTML=Date();
