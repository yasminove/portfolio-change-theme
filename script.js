console.log('hiifffi');

document.addEventListener('load', function(){
    console.log('loaded');
})


let theme = localStorage.getItem('theme'); 
// console.log(theme, 'theme');

if(theme === null){
    // console.log('nullllll');
    setTheme('light')

} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot'); 
// console.log(themeDots[0].dataset.mode, 'themeDots');
// console.log(themeDots[0].mode, 'themeDots');
for(var i=0; i<themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        // let mode = this.dataset;
        // let mode = this.dataset.mode
        // console.log(i, 'i');
        // console.log(themeDots[i], 'themeDots[i]');
        // console.log(themeDots[0], 'themeDot[i]');
        // console.log(this, 'this');
        // console.log('clicked');
        // console.log(this.dataset.mode, 'mode');
        let mode = this.dataset.mode; 
        setTheme(mode)

    })
}


function setTheme(mode){
    // console.log(mode, 'modeFromSetTheme');
    if(mode === "light"){
        document.getElementById('theme-style').href = "style.css"
        // console.log('light');
    }

    if(mode === "blue"){
        document.getElementById('theme-style').href = "blue.css"
    }

    if(mode === "green"){
        document.getElementById('theme-style').href = "green.css"
    }

    if(mode === "purple"){
        document.getElementById('theme-style').href = "purple.css"
    }

    localStorage.setItem('theme', mode)

}

// for (var i=0; themeDots.length > i; i++){
// 	themeDots[i].addEventListener('click', function(){
// 		let mode = this.dataset.mode
// 		console.log('Option clicked:', mode)
// 		// setTheme(mode)
// 	})
// }