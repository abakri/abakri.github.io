const animationSrc = './static/cat'
const fileNames = [
    `${animationSrc}/1.png`,
    `${animationSrc}/2.png`,
    `${animationSrc}/3.png`,
    `${animationSrc}/4.png`,
]

let currFrame = 0
const incrementCurr = () => {
    currFrame = (currFrame + 1) % fileNames.length
}

const catImage = document.getElementById('cat-img')
setInterval(() => {
    incrementCurr()
    catImage.src = fileNames[currFrame]
}, 180)