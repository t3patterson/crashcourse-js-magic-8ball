var predictionsList = [
  'Go for it!',
  "Don't do it!",
  "Looking pretty good",
  "Uh oh, you're in trouble",
  "It's about to get rough",
  "Don't poke the bear",
  "You're in the clear"
]

var thePredictionEl = document.querySelector('.prediction')

var ballEl = document.querySelector('.ball')
var shakeBtn = document.querySelector('button#shake')
var resetBtn = document.querySelector('button#reset')


shakeBtn.addEventListener('click', function(){
   if( thePredictionEl.innerHTML === ''){
      var arrayItem = Math.floor( 
                      Math.random()*predictionsList.length 
      )
      
       ballEl.className = "ball"

      thePredictionEl.innerHTML = predictionsList[arrayItem]

      ballEl.className += " shaker"
   }
})

resetBtn.addEventListener('click', function(){
  thePredictionEl.innerHTML = ''
  ballEl.className = 'ball'
})