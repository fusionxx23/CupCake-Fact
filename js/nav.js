
class Search {
    constructor()  {
        this.closeButton = $('#btnCloseSearch'); 
        this.openButton = $('#btnSearch'); 
        this.searchOverlay = $('.search-overlay'); 
        this.main = $('#main'); 
        this.events(); 
        this.isOverlayOpen = false; 
        this.navbar = $('#cont-nav'); 
    }
    events() {
        this.openButton.on('click', this.openOverlay.bind(this)); 
        this.closeButton.on('click', this.closeOverlay.bind(this)); 
    }
    openOverlay() {
        this.searchOverlay.addClass('search__active'); 
        this.isOverlayOpen = true; 
        this.navbar.removeClass('sticky-top');
        $('body').addClass('no-scroll'); 
    
    }
    closeOverlay() {
        this.searchOverlay.removeClass('search__active'); 
        this.isOverlayOpen = false; 
        this.delayClass(this.navbar) 
        $('body').removeClass('no-scroll'); 
        
    }
    delayClass(variable) {
        setTimeout(function(){
            variable.addClass('sticky-top')
        }, 550)
    }

}

class Cart {
    constructor() {
        this.openButton = $('#btnCart'); 
        this.closeButton = $('#btnCloseCart')
        this.cartOverlay = $('.cart-overlay'); 
        this.events(); 
        this.navbar = $('#cont-nav'); 


    }

    events() {
        this.openButton.on('click', this.openOverlay.bind(this)); 
        this.closeButton.on('click', this.closeOverlay.bind(this)); 
    }

    

    openOverlay() {
        this.cartOverlay.addClass('cart__active');
        this.navbar.removeClass('sticky-top')
        $('body').addClass('no-scroll'); 
        
        
    }
    closeOverlay() {
        this.cartOverlay.removeClass('cart__active');
        $('body').removeClass('no-scroll');
        // this.delayClass(this.navbar); 
        this.delayClass = setTimeout(this.navbar.bind(this) .addClass('sticky-top'), 600); 
       
        
        
    }
    // delayClass(variable) {
    //     setTimeout(function(){
    //         variable.addClass('sticky-top')
    //     }, 300)
    
    // }

}


var cart = new Cart(); 
var search = new Search();

let sum = 0; 
const numbers = [1,2,3,4]; 

numbers.reduce(acc,currentValue => {
    return acc + currentValue; 
}, 0); 
  