(function ($) {
    $(document).ready(function () {
//-----CACHER LE NAVIGATEUR
        $('.divSpan').click(function () {
            $('nav ul').toggle(); //affiche et masque 
            $('nav div').slideUp(1000)
            $('nav div').toggleClass('divSpan divSpanJS');
            $('nav div').slideDown(1000)
           

        });
        $('#slideBar li:last').click(function () {
            $('aside').slideUp(1000)   
              

        });
        $('nav').click(function () {
            $('aside').slideDown(1000)   
            

        });

// -----------MENU FIXED SCROLL-----------------
    var  intElemScrollTop = document.getElementsByTagName('html');
    
       setInterval(maFct, 100); //Appeler la fonction toute les 0.2 secondes 
        function maFct() {
        var scrollPos= intElemScrollTop[0].scrollTop;
            if(scrollPos>190){
                if ($('nav').hasClass("navJS")) {
                
                } else {
                   $('nav').hide();
                //    $('#slideBar').hide()
                    $('nav').addClass('navJS').slideDown(700);
                    // $('#slideBar').addClass('navJS').slideDown(700);
                }
            }else {
                if ($('nav').hasClass("navJS")) {
                    $('nav').toggleClass('navJS');
                    // $('#slideBar').toggleClass('navJS');
                } 
            } 
        // console.log(scrollPos)
        }
      
    });

})(jQuery); 





// var  intElemScrollTop = document.getElementsByTagName('html');
// console.log(intElemScrollTop[0].offsetTop)
// console.log(intElemScrollTop[0].offsetParent)
// console.log(intElemScrollTop[0].offsetWidth)
// console.log(intElemScrollTop[0].offsetHeight)
// console.log('-----------------------------------')
// console.log(intElemScrollTop[0].scroll)
// console.log(intElemScrollTop[0].scrollBy)
// console.log(intElemScrollTop[0].scrollHeight)
// console.log(intElemScrollTop[0].scrollIntoView)
// console.log(intElemScrollTop[0].scrollTo)
// console.log(intElemScrollTop[0].scrollTop)
