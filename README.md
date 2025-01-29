# The Bugs

### Select Box bugs

### Three Wishes Form bugs
- On line 31, we should be using the ```querySelectorAll()``` method. This will return a collection of all the wish inputs, instead of just the first one, which we get with ```querySelector()```
- At the start of the form submission event handler, we need to call ```e.preventDefault()```, otherwise the usual behaviour will happen and the form will submit immediately
- In the wish input for loop, we need to convert all input to lowerCase(), not upperCase(), as our list of forbidden words is in lowercase.
