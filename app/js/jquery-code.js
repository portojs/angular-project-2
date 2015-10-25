/**
 * Created by Peter on 25.10.2015.
 */
$(document).ready(function(){
  $('div.card').on('click', function(){
    $('div.card p').toggleClass('hidden');
  });
});