let button = document.querySelector('#button')

button.addEventListener(['click'], () => {
  sentence = document.querySelector('#sentence').value
  result = document.querySelector('#result')
  let stupid = "";
  
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    random = Math.floor(Math.random() * 2)

    if(random == 1) {
      stupid = stupid + sentence[i]
    } else {
      if(count < 2) {
        stupid = stupid + sentence[i].toUpperCase()
        count++
      } else {
        stupid = stupid + sentence[i]
        count = 0
      }
    }

  }
  
  result.innerText = stupid;
})