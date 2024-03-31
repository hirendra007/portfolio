function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hirendrabalaji3@gmail.com",
        Password : "9ED7594B74495DD4443F6F8A4092ADFAA462",
        To : 'hirendrabalaji27@gmail.com',
        From : "hirendrabalaji27@gmail.com",
        Subject : "This is the subject",
        Body: "Name: "+ document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
       document.getElementById("text").innerHTML = "Your response has been successfully submitted"
    );
}
const icon=document.getElementById("icon");
function darktheme(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src="sun.png";
    }
    else{
        icon.src="moon.png";
    }
}