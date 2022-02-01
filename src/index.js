import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Card from './card.js';

let counter = 0;
let card = new Card(0);

$(document).ready(function() {

  $(".clickable1").click(function(){
    $(".showing-1").slideToggle();
    $(".hidden-1").slideToggle();
    if (counter % 2) {
      card.previous = 1;
    }
    else {
      if (card.compare(1)) {
1;
      }
      else {
        $(".showing-1").slideToggle();
        $(".hidden-1").slideToggle();
        $(".showing-1").slideToggle();
        $(".hidden-1").slideToggle();
      }
    }
  });
  $(".clickable2").click(function(){
    $(".showing-2").slideToggle();
    $(".hidden-2").slideToggle();
    card.previous = 2;
  });
  $(".clickable3").click(function(){
    $(".showing-3").slideToggle();
    $(".hidden-3").slideToggle();
    card.previous = 3;
  });
  $(".clickable4").click(function(){
    $(".showing-4").slideToggle();
    $(".hidden-4").slideToggle();
    card.previous = 4;
  });
  $(".clickable5").click(function(){
    $(".showing-5").slideToggle();
    $(".hidden-5").slideToggle();
    card.previous = 5;
  });
  $(".clickable6").click(function(){
    $(".showing-6").slideToggle();
    $(".hidden-6").slideToggle();
    card.previous = 6;
  });
  $(".clickable7").click(function(){
    $(".showing-7").slideToggle();
    $(".hidden-7").slideToggle();
    card.previous = 7;
  });
  $(".clickable8").click(function(){
    $(".showing-8").slideToggle();
    $(".hidden-8").slideToggle();
    card.previous = 8;
  });
  $(".clickable9").click(function(){
    $(".showing-9").slideToggle();
    $(".hidden-9").slideToggle();
    card.previous = 9;
  });
  $(".clickable10").click(function(){
    $(".showing-10").slideToggle();
    $(".hidden-10").slideToggle();
    card.previous = 10;
  });
  $(".clickable11").click(function(){
    $(".showing-11").slideToggle();
    $(".hidden-11").slideToggle();
    card.previous = 11;
  });
  $(".clickable12").click(function(){
    $(".showing-12").slideToggle();
    $(".hidden-12").slideToggle();
    card.previous = 12;
  });
  $(".clickable13").click(function(){
    $(".showing-13").slideToggle();
    $(".hidden-13").slideToggle();
    card.previous = 13;
  });
  $(".clickable14").click(function(){
    $(".showing-14").slideToggle();
    $(".hidden-14").slideToggle();
    card.previous = 14;
  });
  $(".clickable15").click(function(){
    $(".showing-15").slideToggle();
    $(".hidden-15").slideToggle();
    card.previous = 15;
  });
  $(".clickable16").click(function(){
    $(".showing-16").slideToggle();
    $(".hidden-16").slideToggle();
    card.previous = 16;
  });
  
  $(".clickable").click(function(){
    counter++;
  });
  
});