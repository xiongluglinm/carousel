
// setTimeout(function(){
//   $slideArray.children().eq(0).remove()
//   i_current += 1
//   console.log(i_current)
//   console.log(i_right)
//   $slideArray.append($images.eq(i_right()).clone())
// },3000)
var $slideArray
var $images
var i_current
initialize()
var timerId = setInterval(function(){
  makeCurrent()
  i_current += 1
  makeEnter()
},3000)


function initialize(){
  $slideArray = $('.slideArray')
  $images = $('#images').children()
  i_current = 0
  $slideArray.append($images.eq(i_left()).clone())
  $slideArray.append($images.eq(0).clone())
  $slideArray.append($images.eq(i_right()).clone())
}
function i_left(){
  return (i_current-1 >= 0) ? i_current : 4
}
function i_right(){
  return (i_current+1)%5
}
function makeCurrent(){
  $slideArray.children().eq(0).remove()
}
function makeEnter(){
  $slideArray.append($images.eq(i_right()).clone())
}