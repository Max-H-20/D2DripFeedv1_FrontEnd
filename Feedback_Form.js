const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}<br>`;
    Email.send({
        SecureToken: "ba805d2c-78e1-46a6-af56-97078a5603de",
        To: 'maximuslouis1216@gmail.com', //will send to me
        From: "maximuslouis1216@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            ({
                text: "Success"
            });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for(const item of items) {
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

    if(items[1].value != "") {
        checkforValidEmail();
    }
    items[1].addEventListener("keyup", () => {
        checkforValidEmail();
    });
        item.addEventListener("keyup", () => {
            if(item.value !="") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkforValidEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTextEmail = document.querySelector(".error-text.email");
    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value !="") {
            errorTextEmail.innerText = "Please enter a valid email address.";
        }
        else {
            errorTextEmail.innerText = "Email address can't be blank!";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs(); //checks if fields have inputs or nots
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        
        sendEmail();
        form.reset();
        return false;
    }
});



