//const pw-container = document.getElementById("pw-container")
const input = document.getElementById("password")
const copy = document.getElementById("copy")
const pwSubmit = document.getElementById("#submit")
// const charMax = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!@#$%^&*()_+-~"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const nums = "0123456789"
const symbols = "!@#$%^&*()_+-~><?=-"
const allSym = upperCase + lowerCase + nums + symbols
const PWlength = 16

function createPassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += nums[Math.floor(Math.random() * nums.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    while(PWlength > password.length){
        password += allSym[Math.floor(Math.random() * allSym.length)]
    }
    input.value = password
}

input.addEventListener('click',(e) => {
    alert.remove()
})


input.addEventListener('click', () => {
    let msg = navigator.clipboard.writeText(input.value)
    // let newPW = input.value
    window.alert = function(msg, timeout=null) {
        const alert = document.createElement('div')
        const alertButton = document.createElement('button')
        alert.classList.add('alert')
        alert.append(alertButton)
        alertButton.innerHTML="Ok"
        alert.setAttribute('style', `
            position: fixed;
            top: 3vh;
            left: 40%;
            padding:30px;
            border-radius: 10px;
            cursor:pointer;
            display:flex;
            justify-content:center;
            box-shadow: 0 10px 5px 0 #000022;
            background-color:rgba(255, 255, 255,0.1)
        `)
        alertButton.setAttribute('style', `
            position: reative;
            bottom:0px;
            padding:20px 33px;
            border-radius: 10px;
            outline: none;
            border:none;
            font-size:1rem;
        `)
        alert.innerHTML = `<span style="display:flex; flex-direction:column; flex-wrap:wrap; justify-content:center;text-align:center; font-weight:normal; font-size:16px;"><p>You just copied:</p><br/>${msg}</span>`
        document.body.appendChild(alert)
        alert.addEventListener('click', (e) => {
            alert.remove()
        })
        input.addEventListener('click', (e) => {
            alert.remove()
        })
    }
    let copy = "Copied the text:"
    alert(input.value, copy)
});


/*
Shopping list:
- Bread
- ToothPaste


New Task List:
- Update Resume
- Figure out how to share my work from GitHub
- Apply to jobs

I'm a dedicated and proactive worker who consistently seeks out new tasks to keep the workflow smooth and efficient. 

I prioritize completing tasks thoroughly before moving on to the next, ensuring that each job is done right. 

I take pride in delivering a positive customer experience, always treating customers with kindness, professionalism, and prompt service.
*/




// YouTube source = https://youtu.be/Xrsb9SiF3a8?si=D-tjfksn3REhUI-g
// pwSubmit.addEventListener("click", function(){
//     e.preventDefault()
//     createPassword()
    
// })