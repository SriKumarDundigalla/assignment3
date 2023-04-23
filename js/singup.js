

signup = (e) => {
    e.preventDefault(); // prevent form submission
    console.log(e); // log the form event object
    const fn = e.target.elements['fn'].value; // get the value of first name input field
    const ln = e.target.elements['ln'].value; // get the value of last name input field
    
    sessionStorage.setItem("ln",ln); // store last name in session storage
    sessionStorage.setItem("fn",fn); // store first name in session storage
    window.location.href = 'welcome.html'; // redirect to welcome page
    // reset form values
    e.target.reset();
  }

  check_pass = (e) => {
    const password = e.target.value; // get the value of the password input field
    let e1 = document.getElementById("e1");
    let e2 = document.getElementById("e2");
    let e3 = document.getElementById("e3");
    e1.hidden = e2.hidden = e3.hidden = false; // show all error messages
    if (password == "") {
      e1.hidden = e2.hidden = e3.hidden = true; // hide all error messages
    }
    let specail_cha_rex = /(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/;
    let atleat_one_Capt_lett_rex = /([A-Z])/;
    if (password.length >= 6) {
      e1.hidden = true; // hide password length error message
    }
    if (specail_cha_rex.test(password)) {
      e2.hidden = true; // hide special character error message
    }
    if (atleat_one_Capt_lett_rex.test(password)) {
      e3.hidden = true; // hide uppercase letter error message
    }
  }
  

  chech_match = (e) => {
    let alert1 = document.getElementById("alert1");
    alert1.hidden = false; // show error message
    let password = document.getElementById("Password1").value; // get the value of the password input field
    let button = document.getElementById('btnlogin');
    let password2 = e.target.value; // get the value of the confirm password input field
    if (password2 == "") {
      alert1.hidden = true; // hide error message
    }
    if (password === password2) {
      alert1.hidden = true; // hide error message
      button.disabled = false; // enable submit button
    }
  }
  

  email_required = (e) =>
  {
      let email = e.target.value
      let Emailalert = document.getElementById("Emailalert") //get the HTML element for email alert
      Emailalert.hidden =false; //set the email alert to be visible
      let emial_rex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ //Regular expression for validating email
      Emailalert.hidden =false;
  
      if(email=="") //if email is empty
      {
          Emailalert.hidden =true; //hide the email alert
      }
      if(emial_rex.test(email)) //if email matches the regular expression
      {
          Emailalert.hidden =true; //hide the email alert
      }
  }
  
  lnreuired =(e) =>
  {
      let ln = e.target.value; //get the value of last name
      let lnalert = document.getElementById("lnalert"); //get the HTML element for last name alert
      lnalert.hidden= false; //set the last name alert to be visible
      if(ln.length>0){ //if last name has length greater than 0
          lnalert.hidden= true; //hide the last name alert
      }
  }
  
  ln_on_focus = (e) =>
  {
      let lnalert = document.getElementById("lnalert"); //get the HTML element for last name alert
      lnalert.hidden= false; //set the last name alert to be visible
      lnreuired(e); //check if last name is required
  }
  
  fnreuired =(e) =>
  {
      let fn = e.target.value; //get the value of first name
      let fnalert = document.getElementById("fnalert"); //get the HTML element for first name alert
      fnalert.hidden= false; //set the first name alert to be visible
      if(fn.length>0){ //if first name has length greater than 0
          fnalert.hidden= true; //hide the first name alert
      }
  }
  
  fn_on_focus = (e) =>
  {
      let fnalert = document.getElementById("fnalert"); //get the HTML element for first name alert
      fnalert.hidden= false; //set the first name alert to be visible
      fnreuired(e); //check if first name is required
  }
  