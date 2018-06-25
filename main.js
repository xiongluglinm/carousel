var $allButtons = $('#button > button');
console.dir($allButtons)
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
    console.log(n)
    console.dir($allButtons)
  })
};

var n = 0;
var size = $allButtons.length;
$allButtons.eq(n%size).trigger('click');
var timerId = setTimer.call(undefined,n,size)
$('.window').on('mouseenter',function(){
  window.clearInterval(timerId);
});
$('.window').on('mouseleave',function(){
  timerId = setTimer.call(undefined,n,size)
});


function setTimer(n,size){
    // console.log(n)
    console.log(size)
    return setInterval(()=>{
    n = n+1
    $allButtons.eq(n%size).trigger('click')
    },2000)
}