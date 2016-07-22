#Javascript Crash Course - Magic 8Ball
1 - Context [HTML vs CSS vs JavaScript](http://t3patterson.github.io/Tuts-JS-Crashcourse-Magic-8Ball/)

2 - Crash Course Codepen 
[Starting Point](http://codepen.io/tphdevdrop/pen/Yqgjmw)
[Complete Demo](http://codepen.io/tphdevdrop/pen/xVmMay)  


###The Walkthrough (in codepen)
##### 1) Set up a list of strings AKA an array
```js
var predictionsList = [
  'Go for it!',
  "Don't do it!",
  "Looking pretty good",
  "Uh oh, you're in trouble",
  "It's about to get rough",
  "Don't poke the bear",
  "You're in the clear"
]
```

####2) Show how to access the array
make sure to note that they are indexed starting at *0*
```js
alert(predictionsList[0])
alert(predictionsList[1])
```


####3) Create basic interactivity on a button:
Emphasize
1 -- 
we need to 'select' the element that receives an event (w/ `document.querySelector`)
```js
var shakeBtn = document.querySelector('button#shake')
```

2 -- 
we execute `.addEventListener()` on that selected element

```js
shakeBtn.addEventListener()
```

3 -- 
we tell `.addEventListener()` the event-type to listen for (in this case a 
'click') 
```js
shakeBtn.addEventListener('click')
```

4-- 
we pass a function (i.e. a set of instructions) as the 2nd argument to `addEventListener()` that will execute when the event happens
```
shakeBtn.addEventListener('click', putPredictionOnPage)

```

5--
we will create the function for what we want to happen
```js

function putPredictionOnPage(){
   //select the prediction element where the output will go
   var thePredictionEl = document.querySelector(‘#prediction')
   
   //create random # btw 0 - listLength * multiply it by the length and round down )
   var randomIndex = Math.floor( Math.random() * predictionsList.length )
   
   // access the element of the random index
   var predictionText = predictionsList[randomIndex]
  
   // put the prediction text on the page
   thePredictionEl.innerHTML = predictionText

  // Bonus! add a 'shaker' class to the 8-ball to trigger shake animation 
    var ballEl = document.querySelector('#ball')
    ballEl.className += " shaker"
})

shakeBtn.addEventListener(‘click’, putPredictionOnPage )
```