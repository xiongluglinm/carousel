var $allButtons = $('#button > ');
for(let i=0; i<$allButtons.length; i++){
  $allButtons.eq(i).on('click',function(xx){
    let index = $(xx.currentTarget).index();
    let p = index * -200;
    $('#images').css({
      'transform': 'translateX('+p+'px)'
    })
    $(xx.currentTarget).addClass('red')
    .siblings('.red').removeClass('red');
    n = index;
    console.log('n=='+n)
  })
};

var n = 0;
var size = $allButtons.length;
$allButtons.eq(n%size).trigger('click');
var timerId = setTimer.call(undefined,n)
$('.window').on('mouseenter',function(){
  window.clearInterval(timerId);
});
$('.window').on('mouseleave',function(){
  timerId = setTimer.call(undefined,n)
});


function setTimer(){
    // console.log('n1=='+n1)
    // console.log(size)
    return setInterval(()=>{
    n = n+1
    // console.log('n=='+n)
    $allButtons.eq(n%size).trigger('click')
    },2000)
}