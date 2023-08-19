let email = document.querySelector("#email");
let inputFld = document.querySelector(".input-field");
let submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click",function(){
    let emailVal = email.value;
    if(!emailVal.match(/^\S{2,}@\S+\.[A-Za-z0-9]{2,4}$/)){
        inputFld.classList.add("error");
    }
    else{
        inputFld.classList.remove("error");
    }
})
