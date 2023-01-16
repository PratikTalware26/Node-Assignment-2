//CHANGING USERNAME USING ENVIRONMENT VARIABLE

// const os = require("os")
// console.log(os.userInfo().username)
const name= process.env.USERNAME
console.log("Hello"+ name)//Its Working in command prompt only not in powershell