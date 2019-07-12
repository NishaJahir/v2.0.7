jQuery(document).ready( function() {
	jQuery('#nn_sepa_iban').on('input',function ( event ) {
		let iban = jQuery(this).val().replace( /[^a-zA-Z0-9]+/g, "" ).replace( /\s+/g, "" );
    		jQuery(this).val(iban);		
	});
	
  jQuery( '#nn_sepa_cardholder' ).keypress(
				function (event) {
        var keycode = ( 'which' in event ) ? event.which : event.keyCode,
				reg     = /[^0-9\[\]\/\\#,+@!^()$~%'"=:;<>{}\_\|*?`]/g;
			return ( reg.test( String.fromCharCode( keycode ) ) || 0 === keycode || 8 === keycode );
					}
			);
			
	jQuery('#nn_sepa_form').on('submit',function(){
		jQuery('#novalnet_form_btn').attr('disabled',true);		
	});
	
	jQuery('#savepayment').click(function() {
        if (!jQuery('#savepayment').is(':checked')) {
            notSavePaymentData();
        } else {
            savePaymentData();
        }
	});
	
	function savePaymentData()
	{
	jQuery('#save_payment').val('1');
	}

	function notSavePaymentData()
	{
	jQuery('#save_payment').val('');
	}
	
	jQuery('#nn_toggle_form').on('click',function(){
		if (jQuery('#nn_new_card_details').css('display') == 'none'){
			jQuery('#nn_new_card_details').show();
			jQuery('#save_payment_block').show();
			jQuery('#nn_saved_details').hide();
			jQuery('#nn_new_details').val('1');
			jQuery('#nn_toggle_form').html(jQuery('#nn_account_display_text_saved').val());
		}else{
			jQuery('#nn_new_card_details').hide();
			jQuery('#save_payment_block').hide();
			jQuery('#nn_saved_details').show()
			jQuery('#nn_new_details').val('0');
			jQuery('#nn_toggle_form').html(jQuery('#nn_account_display_text_new').val());
		}
	});
});
