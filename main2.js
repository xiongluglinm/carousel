let n = 0

$('#images > img:nth-child(1)').addClass('current')
$('#images > img:nth-child(5)').addClass('leave')
$('#images > img:nth-child(2)').addClass('enter')

setTimeout(function(){
  $('#images > img:nth-child(1)').removeClass('current')
  .addClass('leave')
  $('#images > img:nth-child(5)').removeClass('leave')
  
  $('#images > img:nth-child(2)').removeClass('enter')
  .addClass('current')
  $('#images > img:nth-child(3)').addClass('enter')
},3000)