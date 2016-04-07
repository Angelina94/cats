$(document).ready(function() {
$.ajax({
  type:'POST',
  url:'/rating/view.php',
  data:{"title" : document.title, "url":location.href},
  success:function(data){
  }
});
});