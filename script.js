$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else {
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function() {
    scroll(0, 0);
  });

  $(".menu-toggler").click(function() {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
  var btc = document.getElementById("bitcoin");
  var eth = document.getElementById("ethereum");
  var doge = document.getElementById("dogecoin");

  var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
  }

  $.ajax(liveprice).done(function(response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

  });
});