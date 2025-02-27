
document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber = getIdByValue("pin");

    if(accountNumber.length === 11){
        if(pinNumber === 1234){
            window.location.href = "./main.html";
        }
        else{
            console.log("Pin thik nai");
        }
    }
    else{
        console.log("thik nai");
    }
})