
document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const convertedAccNo = parseInt(accountNumber);
    const pinNumber = getIdByValue("pin");
    console.log(convertedAccNo);

    if(convertedAccNo.length === 11){
        console.log("thik ache");
    }
    else{
        console.log("thik nai");
    }
})