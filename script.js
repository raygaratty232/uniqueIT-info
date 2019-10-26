var htmlBtn = document.querySelector('.html-btn')
var cssBtn = document.querySelector('.css-btn')
var infoBtn = document.querySelector('.info-btn')
var htmlBox = document.querySelector('.html-box')
var styleBox = document.querySelector('.style-container')
var infoBlock = document.querySelector('.info-block')

htmlBtn.addEventListener('click' , showHtml)
cssBtn.addEventListener('click' , showCss)
infoBtn.addEventListener('click' , showInfo)

function showHtml(){
	htmlBox.classList.toggle('show')
	this.classList.toggle('active')
}


function showCss(){
	styleBox.classList.toggle('show')
	this.classList.toggle('active')
}

function showInfo(){
	infoBlock.classList.toggle('show')
	this.classList.toggle('active')
}
