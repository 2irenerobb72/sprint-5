const myForm = document.querySelector('#my-form')

const handleSubmission = function (e) {
  e.preventDefault()
  const reply = window.confirm('Would you like to submit this form?')
  console.log('Would I like to submit this form? ', reply)
}

myForm.addEventListener('submit', handleSubmission, false)

// const handleSubmission = function (e) {
//   if (!window.confirm('Would you like to submit this form?')) {
//     e.preventDefault()
//     console.log('Form submission cancelled')
//   }
// }

// const handleSubmission = function (e) {
//   if (false === window.confirm('Would you like to submit this form?')) {
//     e.preventDefault()
//     console.log('Form submission cancelled')
//   }
// }

// conat handleSubmission = function (e) {
//   e.preventDefault()

//   var inputs = e.target.querySelectorAll('input')

//   console.log(inputs)
// }

// const isEmpty = function (input) {
//   if (input.value.length < 1) {
//     input.setAttribute('style', 'background-color: mistyrose; border-color: crimson')
//     input.setAttribute('placeholder', 'Please enter your ' = input.name)
//     return true
//   }
// }

import { filter } from 'ramda'

// const handleSubmission = function (e) {
//   var inputs = e.target.querySelectorAll('input')

//   if (filter(isEmpty, inputs).length > 0) e.preventDefault()
// }
 const myForm = document.querySelector('#my-form')

 myForm.addEventListener('submit', handleSubmission, false)
