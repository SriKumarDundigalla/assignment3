// The login_password function is called when the user types in the password field
login_password = (e) =>{

    // Get the password value from the password field
    let password = e.target.value
    
    // Get the element for the password alert message
    let Lpasswordalert = document.getElementById('Lpasswordalert')

    // If the password is not empty, hide the password alert message
    if(password!="")
    {
        Lpasswordalert.hidden =true;

    // Otherwise, show the password alert message
    }else{
        Lpasswordalert.hidden =false;

    }
    
}

// The login_password_focus function is called when the user focuses on the password field
login_password_focus = (e) =>
{
    // Get the element for the password alert message
    let Lpasswordalert = document.getElementById("Lpasswordalert");

    // Show the password alert message
    Lpasswordalert.hidden= false;

    // Call the login_password function to check the password value
    login_password(e)
}

// The login_email function is called when the user types in the email field
login_email = (e) =>
{
    // Get the email value from the email field
    let email = e.target.value

    // Get the element for the email alert message
    let Lemailalert = document.getElementById("Lemailalert")

    // Show the email alert message
    Lemailalert.hidden =false;

    // Define a regular expression for validating the email format
    let emial_rex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    // Show the email alert message
    Lemailalert.hidden =false;

    // If the email is empty, hide the email alert message
    if(email=="")
    {
        Lemailalert.hidden =true;
    }

    // If the email matches the regular expression, hide the email alert message
    if(emial_rex.test(email))
    {
        Lemailalert.hidden =true;
    }
}

// The login_form function is called when the user submits the login form
login_form = (e) =>
{
     // Prevent the form from submitting
     e.preventDefault();

    // Get the email and password values from the form
    const email = e.target.elements['lEmail1'].value;
    const password = e.target.elements['lPassword1'].value;

    // Log the email and password values to the console
    window.location.href = 'landing_login.html';

    // Reset the form
    e.target.reset();
}