//hamburger 

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closes = document.querySelector('.menu__close'),
      links = document.querySelectorAll('.menu__link'),
      menuBody = document.querySelector('.menu');

hamburger.addEventListener('click', ()  => {
    menu.classList.add('active');
});
function closeMenu() {
    menu.classList.remove('active');
}
closes.addEventListener('click', closeMenu);

menuBody.addEventListener('click', e => {
    console.log(e.target);
    if(e.target === document.querySelector('.menu__overlay')) {
        closeMenu();
        
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

//смена процентов

const percents = document.querySelectorAll('.skills__raitings-percent'),
      lines = document.querySelectorAll('.skills__raitings-line span');
      
percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
}); 
// прячем sidepanel
$(window).on("scroll", function() {
    $('.sidepanel').toggleClass("scrolling", $(this).scrollTop() > $('.promo').height());
  });
// modal close
  $('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
 });
//send email
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
});


// scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();  //class link(img)
    } else {
        $('.pageup').fadeOut();
    }    
});
$("a[href=#promo]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();



