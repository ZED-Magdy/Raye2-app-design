var x=$(".add-to-cart");x.on("click",function(){var t=$(this);t.prop("disabled",!0);var e=$(".shopping-cart"),o=$(this).parent(".d-flex").parent(".card-body").parent(".card").find("img").eq(0);if(o.length||(o=$(".active img")),console.log(o),o){var i=o.clone().offset({top:o.offset().top,left:o.offset().left}).css({opacity:"0.5",position:"absolute",height:"150px",width:"150px","z-index":"100"}).appendTo($("body")).animate({top:e.offset().top+60,left:e.offset().left-20,width:75,height:75},1e3,"easeInOutExpo");setTimeout(function(){e.effect("shake",200),t.prop("disabled",!1)},1500),i.animate({width:0,height:0},function(){$(this).detach()})}});