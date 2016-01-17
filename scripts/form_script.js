var finished = false;

$(document).ready(function(){
	
  var branch;// TRACK THE BRANCH AT QUESTION 2
	  
  
  // HIDE ALL QUESTIONS EXCEPT Q1
  $('#q2').css('display','none');
  $('#q3').css('display','none');
  $('#q4').css('display','none');
  // HIDE ALL COMMENTS
  $('#c1').css('display','none');
  $('#c2').css('display','none');
  $('#c3').css('display','none');
  $('#c4').css('display','none');
  $('#result').css('display','none');
  
	var value = 0;
	
	var yes = document.getElementById('yes');
	yes.style.cursor = 'pointer';
	var no = document.getElementById('no');
	no.style.cursor = 'pointer';
	var reset = document.getElementById('reset');
	reset.style.cursor = 'pointer';
	
  	yes.onclick = function() {
		if(!finished){
			value += 1;
			action(value);
			value += 1;
		}
	};
	no.onclick = function() {
		if(!finished){
			value += 2;
			action(value);
		}
	};
	reset.onclick = function() {
		window.location.reload();
	};

});

// DECIDE WHAT ACTION TO TAKE BASED ON INPUT
function action(num)
{
  switch(num)
  {
    // Does it Work?
    case 1:// yes
	  $('#a1').text("Yes");// display comment
      $('#c1').css('display','block');// display comment
      $('#c1').text("Don't mess with it.");
	  finished = true;
      $('#result').css('display','block');// display comment
	  $('#result').css('backgroundColor','#79aa33');// display comment
      $('#result').text("No Problem.");
      break;
    case 2:// no
	  $('#a1').text("No");// display comment
      $('#q2').css('display','block');// display next question
      break;
    // Did you mess with it?
    case 3:// yes
	  $('#a2').text("Yes");// display comment
      branch = 1;// set branch route
      $('#c2').css('display','block');// display comment
      $('#c2').text("You idiot!");
      $('#q3_text').text('Does anyone know?');// display next question
      $('#q3').css('display','block');
      break;
    case 4:// no
	  $('#a2').text("No");// display comment
      branch = 0;// set branch route
      $('#q3_text').text('Will you get blamed anyway?');
      $('#q3').css('display','block');// display next question
      break;
    // Does anyone know?
    case 5:// yes
	  $('#a3').text("Yes");// display comment
      $('#c3').css('display','block');// display comment
      $('#c3').text("You're toast!");
      $('#q4').css('display','block');// display next question
      break;
    case 6:// no
	  $('#a3').text("No");// display comment
      if(branch == 1){
        $('#c4').css('display','block');// display comment
        $('#c4').text("Hide it.");
      }
      else{
        $('#c4').css('display','block');// display comment
        $('#c4').text("Forget about it.");
      }
	  $('#result').css('display','block');// display comment
	  $('#result').css('backgroundColor','#79aa33');// display comment
      $('#result').text("No Problem");
	  finished = true;
      break;
    // Can you blame someone else?
    case 7:// yes
	  $('#a4').text("Yes");// display comment
	  $('#result').css('display','block');// display comment
	  $('#result').css('backgroundColor','#79aa33');// display comment
      $('#result').text("No Problem.");
	  finished = true;
      break;
    case 8:// no
	  $('#a4').text("No");// display comment
	  $('#result').css('display','block');// display comment
	  $('#result').css('backgroundColor','#fc3131');// display comment
      $('#result').text("That's A Problem!");
	  finished = true;
    default:
      break;
  }
}
