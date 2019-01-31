class Loading {
    constructor () {
        this.container = $('.start-animation'); 
        this.events(); 
        this.timeout = setTimeout(() => {
            this.closeAnimation(); 
        }, 2200); 
    }
    events() {
        $( document ).ready(() => {
            this.timeout; 
        });
    }
    closeAnimation() {
        this.container.css('opacity', 0); 
        setTimeout(() => {
            this.container.css('display', 'none'); 
        }, 700); 
    }

}
var Load = new Loading(); 