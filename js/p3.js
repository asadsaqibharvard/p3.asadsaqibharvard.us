/*-------------------------------------------------------------------------------------------------
Name
-------------------------------------------------------------------------------------------------*/
$('#name').keyup(function() {

	// Figure out what the user typed in
	var name = $(this).val();
	
	// Inject the name into the output div on the workout schedule
	$('#name-output').html(name);

	// How long was the recipient?
	var length = name.length;
	
	// If it was 20 characters, that's the max, so inject an error message
	if(length == 20) {
		$('#name-error').html("Max characters: 20");
	}
	// Otherwise, we're all good, clear the error message
	else {
		$('#name-error').html("");
	}
	
	// Note: The "maxlength" attribute on the HTML element will prevent the user from entering more than 20 characters
	// <input type='text' id='recipient' maxlength="14"> 
	
});



/*-------------------------------------------------------------------------------------------------
Display workout selections when click on images 
-------------------------------------------------------------------------------------------------*/

$("#upperbody").on('click', function() {
   $("#upperbodyworkouts").fadeIn();
   $("#coreworkouts").fadeOut();
   $("#lowerbodyworkouts").fadeOut();
});

$("#core").on('click', function() {
   $("#upperbodyworkouts").fadeOut();
   $("#coreworkouts").fadeIn();
   $("#lowerbodyworkouts").fadeOut();  
});

$("#lowerbody").on('click', function() {
   $("#upperbodyworkouts").fadeOut();
   $("#coreworkouts").fadeOut();
   $("#lowerbodyworkouts").fadeIn();  
});



/*-------------------------------------------------------------------------------------------------
Workout Checkboxes & Associated input boxes enabled/disabled 
-------------------------------------------------------------------------------------------------*/

$("#pullupcheckboxid").on('click', function() {
	 var pullup1 = $('#pullupcheckboxid').is(':checked');
	 $('#pulluprepsid, #pullupsetsid').prop('disabled', !pullup1);
});

$("#pushupcheckboxid").on('click', function() {
	 var pushup1 = $('#pushupcheckboxid').is(':checked');
	 $('#pushupsetsid, #pushuprepsid').prop('disabled', !pushup1);
});


    /*
    	$('#pullupcheckboxid, #pushupcheckboxid').click(function() {
        var pullup1 = $('#pullupcheckboxid').is(':checked');
        var pushup2 = $('#pushupcheckboxid').is(':checked');
        $('#pulluprepsid, #pullupsetsid').prop('disabled', !pullup1);
        $('#pushuprepsid, #pushupsetsid').prop('disabled', !pushup2);    
    });
})
	*/