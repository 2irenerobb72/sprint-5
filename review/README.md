# Review (irene)

There is an error in your HTML. This line:

```html
<meta name="viewport" content="width=device-width, initial=scale=1">
```
Should be:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

See the difference? Equal sign and hyphen: not the same. This is where all your practice and attention to detail will pay off. What tips you off to this problem is the errors in the Chrome console. Did you see them? Be sure to investigate all errors.

On your JavaScript, how can this work? The application is being loaded from `app/main.js`:

```html
<script>
  System.import('app/main.js')
</script>
```

But your code is in `/main.js` and `app/main.js` is empty! Make sure you put the code in the right place or your computer won't find it. I moved it over to test it.

Then, in your `app/main.js` file, you have this, which belongs in the `.eslintrc` file. It's not JavaScript! (It's JSON.)

```json
{
  "env": {
      "browser": true,
      "node": true,
      "es6": true
  }
}
```

That was causing a crash.

Then you have this:

```js
conat handleSubmission = function (e) {
  e.preventDefault()

  var inputs = e.target.querySelectorAll('input')

  console.log(inputs)
}
```

The syntax highlighting should give you a clue here that something is wrong, and if you'd gotten this far in the browser, you'd have found an error in the console that would direct you to this line. See the `conat`? That should be `const`. The computer is a totalitarian! It permits no deviation! One misspelled word and the thing breaks. So you must be careful.

Whoops! Another typo. Bad week, huh? You must have been working too hard. I think you meant `+`, not `=`. Easy to do&mdash;same key, just without the shift, but to the computer, might as well be a Chinese character.

```js
input.setAttribute('placeholder', 'Please enter your ' = input.name)
```

The there's this:

```js
const handleSubmission = function (e) {
  if (false === window.confirm('Would you like to submit this form?')) {
    e.preventDefault()
    console.log('Form submission cancelled')
  }
}

const handleSubmission = function (e) {
  e.preventDefault()

  var inputs = e.target.querySelectorAll('input')

  console.log(inputs)
}
```

Can't have two methods with the same name. I think you wanted the first one, so I commented out the second. Only to find a *third* copy down below! I commented out that one, too. And ... wait for it ... there's more! All in all, *five* copies of `handleSubmission` in this one script. Wow.

OK, so maybe you were keeping the copies in `main.js` and copying them into and out of the `app/main.js` and you just gave up? It looks like you were on the right track. Why not send us a Slack message and tell us what you're confused about. Where did you get stuck?

Also, found an `import` statement near the bottom. Make sure you do all your imports at the very top.

Your screenshots look good. Having fun with the Chrome console, I see. Want to know the secret? If you want to type code into the terminal that spans multiple lines, then hit `Shift-Enter` instead of `Enter` and it will move to the next line without submitting the code. Or you can type the code in a text file and just copy and paste into Chrome.

See the lines that say:

```
The key "initial" is not recognized and ignored.
The key "1" is not recognized and ignored.
```

Those are your clue that you have an *error* in your code. Click on the line number on the right to see where the error is. Don't just ignore the errors!

Your `form.html` looks pretty good. One thing: the `<fieldset>` is for grouping semantically-related elements of the form, for example the street, city, state, zip, etc. for an address, or a set of home, work, and mobile phone numbers. A `<fieldset>` only makes sense if it has a `<legend>` to explain what the grouping is. So it makes no sense at all to use fieldsets without legends around each individual input.

Also, I don't think it's legal to intersperse the fieldset between the ul and li tags. Let me check the validator . . . Nope:

```
 Element fieldset not allowed as child of element ul in this context. (Suppressing further errors from this subtree.)
 ```

 Lots of other errors, too. Did you run your code through the validator? *Always* use the validator. It will save you lots of time and trouble. It only takes a second. In general, the lesson you should be learning from this week is *use your tools*. None of us writes perfect code. The difference between fast and reliable coders and slow and unreliable coders is that the former use all their tools.

 Everything else looks good. Great that you continue to put in the effort, even under stress. Please try to focus on learning the JavaScript (most important part now) and do be sure to use the validators, linters, and other tools. *Contact us on Slack if you have questions!* Don't waste time stuck. Use your resources and that includes us.

 Thanks again for all the good work! We're almost there and are looking forward to meeting you in person. Keep it up.
