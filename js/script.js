let $ = document
let button = $.getElementsByTagName('button')
let imgBody = $.getElementsByTagName('img')
let cssRoot = $.querySelector(':root')
let bodyColors = [
    "#a8d530",
    "#42aaff",
    "#f3d55b",
    "#ff4f51",
    "#904ae8",
    "#ffa711",
];

let colors = [...bodyColors, 'transparent']

let cunterImg = 0
let [colorcunter, hornsCunter, tailCunter] = [0, 0, 0]

let setCunter = (cunter, length) => {
    return cunter < length - 1 ? cunter + 1 : 0
}

button[0].addEventListener('click', () => {
    cunterImg++
    if (cunterImg < 6) {
        imgBody[0].setAttribute('src', `img/face-${cunterImg}.png`)

    } else if (cunterImg == 6) {
        cunterImg = 0
        imgBody[0].setAttribute('src', `img/face-${cunterImg}.png`)
    }
})

button[1].addEventListener('click', () => {
    colorcunter = setCunter(colorcunter, bodyColors.length)
    cssRoot.style.setProperty('--color-character', bodyColors[colorcunter])
})
button[2].addEventListener('click', () => {
    hornsCunter = setCunter(hornsCunter, colors.length)
    cssRoot.style.setProperty('--color-horns', colors[hornsCunter])
})
button[3].addEventListener('click', () => {
    tailCunter = setCunter(tailCunter,colors.length)
    cssRoot.style.setProperty('--color-tail',colors[tailCunter])
})