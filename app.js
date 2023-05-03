const btnEl = document.getElementById("btn")


btnEl.addEventListener("click", function(audioName){
    playSound("fartsound.mp3")

    const h1El = document.getElementById("h1el")

    h1El.innerText = "HAHA! get pranked! loser... paypig..."
})

function playSound(audioName){
    let audio = new Audio(audioName)
     audio.loop = false 
     audio.play()
}


