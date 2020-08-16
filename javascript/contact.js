function validation(){
	var name = document.getElementById("name").value;
	var last_name = document.getElementById("last_name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "10px";

    if(name.length < 3){
    	text = "Please Enter Valid Name";
    	error_message.innerHTML = text;
    	return false;
    }
    if(last_name.length < 3){
    	text = "Please Enter Valid Last Name";
    	error_message.innerHTML = text;
    	return false;
    }
    if(email.indexOf("@") == -1 || email.length <6 ){
    	text = "Please Enter Valid Email ID";
    	error_message.innerHTML = text;
    	return false;
    }
    if(isNaN(phone) || phone.length !=10){
    	text = "Please Enter Valid Phone Number";
    	error_message.innerHTML = text;
    	return false;
    }
    if(message.length < 50){
    	text = "Please Enter more than 50 Characters";
    	error_message.innerHTML = text;
    	return false;
    }
    alert("Form Submitted Successfully !!");
    
     return true;

}

