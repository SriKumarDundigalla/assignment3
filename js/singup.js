

signup =(e) => {
    e.preventDefault();
    console.log(e)
    const fn = e.target.elements['fn'].value;
    const ln =e.target.elements['ln'].value;
    
    sessionStorage.setItem("ln",ln);
    sessionStorage.setItem("fn",fn);
    window.location.href = 'welcome.html';
    // reset form values
    e.target.reset();
}

check_pass = (e) => {

    const password = e.target.value;
    let e1 = document.getElementById("e1")
    let e2 = document.getElementById("e2")
    let e3 = document.getElementById("e3")
    e1.hidden=e2.hidden=e3.hidden=false;
    if(password=="")
    {
        e1.hidden=e2.hidden=e3.hidden=true;
    }
    let specail_cha_rex = /(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/;
    let atleat_one_Capt_lett_rex =/([A-Z])/
    if(password.length>=6){
        console.log("HII")
        e1.hidden=true;
    }
    if(specail_cha_rex.test(password))
    {

       e2.hidden=true;
    }
    if(atleat_one_Capt_lett_rex.test(password)){
        e3.hidden=true;
    }



}

chech_match = (e) =>{
    let alert1 = document.getElementById("alert1")
    alert1.hidden =false;
    let password = document.getElementById("Password1").value
    let password2 = e.target.value
    if(password2=="")
    {
        alert1.hidden =true;
    }
    if(password===password2)
    {
        alert1.hidden =true;
    }
}

name_required = (e) =>
{
    let email = e.target.value
    let Emailalert = document.getElementById("Emailalert")
    Emailalert.hidden =false;
    let emial_rex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    Emailalert.hidden =false;

    if(email=="")
    {
        Emailalert.hidden =true;
    }
    if(emial_rex.test(email))
    {
        Emailalert.hidden =true;
    }
}