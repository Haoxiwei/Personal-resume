window.onload = function(){

  //第四页   字体的颜色
  var color = ['red','pink','lightgreen','deeppink']
  var contact = document.getElementById( 'contact-header' );
  var contactEnglish = document.getElementById( 'contact-header-1' );
  var spans = contact.children;
  var sps = contactEnglish.children;
  // console.log(spans)
  for (var i = 0; i < spans.length; i++) {
     spans[i].style.color = color[i];
     sps[i].style.color = color[3-i];
  }

  //第三页 箭头
  var imgs = document.querySelectorAll( '.img-2' ) ;
  console.log(imgs)
  var lis = document.querySelectorAll( '.item-details' ) ;
  console.log(lis);
      bind(imgs,lis);
      clearBind(imgs,lis);

function bind( event1,event2 ){
  for (var i = 0; i < event1.length; i++) {
    event1[i].onmouseover = function(){
    event2[i].style.display = "block";
    console.log(event2[i]);
    event1[i].style.transition ='transform 1s ease-in .1s';
    event1[i].style.transform = 'rotate(180deg)';
  }
}
}
function clearBind( event1,event2 ){
    for (var i = 0; i < event1.length; i++) {
    event1[i].onmouseleave = function(){
    event2[i].style.display = "none";
    event1[i].style.transition ='transform 1s ease-in .1s';
    event1[i].style.transform = 'rotate(360deg)';
  }
}

}
}
