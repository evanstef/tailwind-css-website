// Navbar Fixed 

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;

    if ( window.pageYOffset > fixed ) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// ini bagian hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
const mode = document.querySelector('#menu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    nav.classList.toggle('hidden')
});

// bagian lain yg diklik akan menghilangkan hamburger menu 
window.addEventListener('click',function(e) {
    if(e.target != hamburger && e.target != nav) {
        hamburger.classList.remove('hamburger-active')
        nav.classList.add('hidden')
    }
})

// ini bagian mode 
$('#mode').on('click',function() {
    $(this).toggleClass('mode-active')
    $('#menu').toggleClass('hidden')
});

// mode-active 
const icon = document.querySelector('#icon');
const html = document.querySelector('html');

icon.addEventListener('click',function() {
    html.classList.toggle('dark');
    if(html.classList.contains('dark')) {
        icon.src = "img/sun-w.png";
        localStorage.theme = 'dark';
    } else {
        icon.src = "img/moon.png";
        localStorage.theme = 'light';
    }
})

// pindahkan gambar moon ke sun
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    icon.src = "img/sun-w.png";
} else {
    icon.src = "img/moon.png";
}

//hero load
$(window).on('load',function(){
   $('.hero-hilang').each(function(i) {
    setTimeout(function(){
        $('.hero-hilang').eq(i).addClass('hero-muncul');
    }, 300 * (i+2) )
   }) 
})

// about 
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    
    if(wScroll > $('#about').offset().top - 250){
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    }

    //portfolio
    if(wScroll > $('#portfolio').offset().top + 20){
        $('.hilang').each(function(i) {
            setTimeout(function(){
                $('.hilang').eq(i).addClass('muncul');
            },300 * (i+1) )
        })
    }
    //blog
    if(wScroll > $('#blog').offset().top) {
        $('.blog-hilang').each(function(i) {
            setTimeout(function() {
                $('.blog-hilang').eq(i).addClass('blog-muncul');
            },300 * (i+1))
        })
    }
})


