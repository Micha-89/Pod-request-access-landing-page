
function ValidateEmail() {

    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let mail = document.getElementById("mailInput").value;

    if (mail.match(mailFormat)) {
        document.getElementById("faultMessage").style.opacity = 0 ;
    } else {
        document.getElementById("faultMessage").style.opacity = 1 ;
    };

};
