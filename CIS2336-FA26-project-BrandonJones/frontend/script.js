document.addEventListener('DOMContentLoaded',function(){
    
    let links = document.querySelectorAll('a');
    for (link of links){
        link.addEventListener('mouseenter',function(){
            this.style.backgroundColor = 'green'; // place holder color
        })
        link.addEventListener('mouseleave',function(){
            this.style.backgroundColor = '';
        })
    }
    
})