const startButton = document.getElementById('str-btn')

startButton.addEventListener('click', startGame)


function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
}