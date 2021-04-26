let btn = document.querySelector('.top-btn')

function to_the_top() {
  if (window.pageYOffset > 1000) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}

btn.onclick = function () {
	window.scrollTo(0,0)
}

window.onscroll = to_the_top