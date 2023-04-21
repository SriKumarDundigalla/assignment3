login_password = (e) =>{

    let password = e.target.value
    let Lpasswordalert = document.getElementById('Lpasswordalert')
    if(password!="")
    {
        Lpasswordalert.hidden =true;

    }else{
        Lpasswordalert.hidden =false;

    }
    
}
login_password_focus = (e) =>
{
    let Lpasswordalert = document.getElementById("Lpasswordalert");
    Lpasswordalert.hidden= false;
    login_password(e)
}

login_email = (e) =>
{
    let email = e.target.value
    let Lemailalert = document.getElementById("Lemailalert")
    Lemailalert.hidden =false;
    let emial_rex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    Lemailalert.hidden =false;

    if(email=="")
    {
        Lemailalert.hidden =true;
    }
    if(emial_rex.test(email))
    {
        Lemailalert.hidden =true;
    }
}

login_form = (e) =>
{
   
    e.preventDefault();
    const email = e.target.elements['lEmail1'].value;
    const password = e.target.elements['lPassword1'].value;
    console.log(email,password)
    e.target.reset();
}


