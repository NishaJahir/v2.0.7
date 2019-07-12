jQuery(document).ready( function() {
	
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
			jQuery('#nn_saved_details').show();
			jQuery('#nn_new_details').val('0');
			jQuery('#nn_toggle_form').html(jQuery('#nn_account_display_text_new').val());
		}
			
	});
});

