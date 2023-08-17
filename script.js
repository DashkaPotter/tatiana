


// const hamburger = document.querySelector('.hamburger')
// const nav = document.querySelector('.navigation')

// function show(){
// 	hamburger.addEventListener("click", ()=>{
// 		hamburger.classList.toggle('open');
// 	});
	
// 	nav.addEventListener("click", ()=>{
// 		nav.classList.toggle('active')
// 	})
// }


// const item = document.querySelectorALL('.item');


// 	item.forEach((item => item).addEventListener(
// 		'click',()=> {
// 			nav.classList.remove('active');
// 			hamburger.classList.remove('open');
// 		}
// 	))

// item.addEventListener(
// 	"click", ()=> {
// 		nav.classList.remove('active');
// 		hamburger.classList.remove('open')
// 	}
// )



function show(){
	document.querySelector('.hamburger').classList.toggle('open');
	document.querySelector('.navigation').classList.toggle('active');
	document.querySelectorAll('.item').forEach(n => n.addEventListener("click",()=>{
		('.hamburger').classList.remove('open')
		('.navigation').classList.remove('active');
	}))
  }
	
