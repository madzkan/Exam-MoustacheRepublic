//cart show on desktop
(function () {
    const cartClick = document.getElementById('cart-click');
    const cartShow = document.getElementById('cart');

    cartClick.addEventListener('click', function(){
        cartShow.classList.toggle('cart-show');
    });

    //mobile touch
   //w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
//var targetWidth = 767;
//if ( w <= targetWidth) { 
   //cartClick.addEventListener('touchstart', function(){
      //cartShow.classList.toggle('cart-show');
// });
//}
    
})();

//add to cart variation
(function () {
    const btnS = document.getElementById('small');
    const btnM = document.getElementById('medium');
    const btnL = document.getElementById('large');

    btnS.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('size-output').innerHTML = "S";
    });
    btnM.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('size-output').innerHTML = "M";
    });
    btnL.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('size-output').innerHTML = "L";
    });
})();

//add items and validation

(function () {
    const btnS = document.getElementById('small');
    const btnM = document.getElementById('medium');
    const btnL = document.getElementById('large');
    const btnAdd = document.getElementById('btn');
    const btnOut = document.getElementById('size-output');

   btnAdd.addEventListener('click', function(){
    if(document.getElementById('size-output').innerHTML == ""){
        alert('Please select size');
    }
   })
})();