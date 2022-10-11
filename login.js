const name = document.getElementById('name')
const name = document.getElementById('age')
const name = document.getElementById('gender')
const name = document.getElementById('locality')
const name = document.getElementById('email')
const name = document.getElementById('number')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (age.value === '' || age.value == null) {
        messages.push('Age is required')
    }

    if (gender.value === '' || age.value == null) {
        messages.push('Gender is required')
    }

    if (locality.value === '' || age.value == null) {
        messages.push('Locality is required')
    }

    if (email.value === '' || age.value == null) {
        messages.push('Email is required')
    }

    if (number.value === '' || age.value == null) {
        messages.push('Number is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }

})

// function validate() {
//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;
//     var gender = document.getElementById("gender").value;
//     var locality = document.getElementById("locality").value;
//     var email = document.getElementById("email").value;
//     var number = document.getElementById("number").value;
//     if (name == " " && email == " " && age == " ") {
//         alert("Form Submitted");
//         return false;
//     }
//     else {
//         alert("Form Submitted");
//     }
// }