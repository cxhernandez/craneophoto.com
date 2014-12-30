---
---

function disable_scroll() {
    $('body').addClass('stop-scrolling');
    $('body').bind('touchmove', function(e){e.preventDefault()});
}

function enable_scroll() {
    $('body').removeClass('stop-scrolling');
    $('body').unbind('touchmove');
}

function setValue() {
	q = document.getElementById("size");
	e = document.getElementById("paper");
	n = document.getElementsByName('option_amount' + q.selectedIndex)[0];
	n.value = parseFloat(n.value) + parseFloat(e.options[e.selectedIndex].getAttribute('price'));
}

function capitalizeEachWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function loadPhoto(name, src) {

    if ($('.bootbox').length) {
        bootbox.hideAll();
    }

    disable_scroll();

    bootbox.dialog(
            {
                "message" :
       "<section class='photo'>" +
        "<div class='wrapper'>" +
        "<div class='photo-container'>" +
          "<h3>" + capitalizeEachWord(name.substring(6)) + "</h3>" +
          "<img src='" + src + "'></img>" +
        "</div>" +
        "<div class='payment-container'>" +
				"<form id='add' action='https://www.paypal.com/cgi-bin/webscr'>" +
				 "<input type='hidden' name='lc' value='US'>" +
				 "<input type='hidden' name='item_name' value='" + name + "'>" +
			    "<input type='hidden' name='cmd' value='_s-xclick'>" +
			    "<table>" +
			    "<tr><td><input type='hidden' name='on0' value='Sizes'>Sizes</td></tr><tr><td><select name='os0'>" +
			    "	<option value='5x7'>5x7 $25.00 USD</option>" +
			    "	<option value='7x10'>7x10 $35.00 USD</option>" +
			    "	<option value='8x12'>8x12 $50.00 USD</option>" +
			    "	<option value='11x17 (A3)'>11x17 (A3) $115.00 USD</option>" +
			    "	<option value='13x19 (Super-B)'>13x19 (Super-B) $145.00 USD</option>" +
			    "</select> </td></tr>" +
			    "<tr><td><input type='hidden' name='on1' value='Paper Type'>Paper Type</td></tr><tr><td><select name='os1'>" +
			    "	<option value='Glossy'>Glossy </option>" +
			    "	<option value='Semi-Gloss'>Semi-Glossy </option>" +
			    "</select> </td></tr>" +
				"<tr><td><input type='hidden' name='on2' value='Quantity'>Quantity</td></tr><tr><td><input type='text' id='quant' name='quantity'' maxlength='2'></td></tr>"+
			    "</table>" +
			    "<input type='hidden' name='currency_code' value='USD'>" +
			    "<input type='hidden' name='encrypted' value='-----BEGIN PKCS7-----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-----END PKCS7-----" +
			    "'>" +
			    "<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>" +
			    "<img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'>" +
			    "</form>" +
                "</div>" +
                "</div>" +
                "</section>"+
				"<script>" +
				"$(document).ready(function(){" +
				 "   var $form = $('form#add');" +
				 "   $form.submit(function(){" +
				 "		$.ajax({"+
				 "		    url: $(this).attr('action'),"+
				 "		    type: 'POST'," +
				 " 			  data: $(this).serialize(),"+
				 "		    success: function(res) {console.log('success!')},"+
				 "			  error: function() { console.log('No worries.');}," +
				 "			  dataType: 'jsonp'"+
				 "		}); " +
				 " bootbox.hideAll();"+
            	 " enable_scroll();"+
				 "      return false;" +
				 "   });" +
				 "});"+
				"</script>",
                "label" : "",
                "class" : "",
                "callback" : function() {}
            });
    $('.bootbox').css({"background-color" : "rgba(255,255,255,1)","border-width":"10px","border-color" : "white","border-style":"solid"});
    $('.bootbox-close-button').css({"color" : "white"})
    $('button.bootbox-close-button.close').click(function () {enable_scroll();});
    $('div.modal-backdrop').click( function(){
            bootbox.hideAll();
            enable_scroll();
        });
}
