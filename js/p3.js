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
Workout Selections displayed on Workout Schedule
-------------------------------------------------------------------------------------------------
$('.messages').click(function() {

	 // Which radio button was clicked?
	 // (Note here how we're storing a whole element in a variable... cool, huh?)
	 var radio_button = $(this);

	 // What is the label next to (i.e. after) that radio 
	 var label = radio_button.next();

	 // Now that we know the label, grab the text inside of it (That's our message!)
	 var message = label.html();
		
	$('#message-output').html(message);
	
});
*/


/*-------------------------------------------------------------------------------------------------
Display checkbox label on workout schedule
-------------------------------------------------------------------------------------------------*/
$('.checkboxclass').click(function() {

	 // Which checkbox was clicked?
	 // (Note here how we're storing a whole element in a variable... cool, huh?)
	 var checkboxvariable = $(this);

	 // What is the label next to (i.e. after) that radio 
	 var label1 = checkboxvariable.next();

	 // Now that we know the label, grab the text inside of it (That's our message!)
	 var message1 = label1.html();
		
	$('#message-output').html(message1);
	
});



/*-------------------------------------------------------------------------------------------------
Display workout selections below regions when click on images 
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

$("#situpcheckboxid").on('click', function() {
	 var situp1 = $('#situpcheckboxid').is(':checked');
	 $('#situpsetsid, #situprepsid').prop('disabled', !situp1);
});

$("#rowcheckboxid").on('click', function() {
	 var row1 = $('#rowcheckboxid').is(':checked');
	 $('#rowsetsid, #rowuprepsid').prop('disabled', !row1);
});

$("#legextensioncheckboxid").on('click', function() {
	 var legextension1 = $('#legextensioncheckboxid').is(':checked');
	 $('#legextensionsetsid, #legextensionrepsid').prop('disabled', !legextension1);
});

$("#squatcheckboxid").on('click', function() {
	 var squat1 = $('#squatcheckboxid').is(':checked');
	 $('#squatsetsid, #squatuprepsid').prop('disabled', !squat1);
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