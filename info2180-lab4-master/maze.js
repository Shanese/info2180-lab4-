
window.onload = function()
	{
		var boundary=document.querySelectorAll('.boundary');
		var end=document.querySelector('#end');
		var start=document.querySelector('#start');
		start.onclick = function()
		{
			restart(boundary);
		}
		end.onmouseover = function()
		{ 
			gameover();
		}
		for (var i = 0; i <boundary.length; i++) 
			{
				boundary[i].onmouseover = function()
				{
					changeColour(boundary);
				}	
 			} 
	}

	function changeColour(element)
	{
		for (var x = 0; x < element.length; x++) {
			element[x].setAttribute("class","boundary youlose");
		}
	}

	function gameover()
	{ 
		var youlose=document.querySelectorAll('.youlose');
		if (youlose.length > 0) 
			{
				alert("You Lose!");
			} else 
			{
				alert("You Win!");
			}
	}

	function restart(element)
	{
		for (var x = 0; x < element.length; x++) 
		{
			element[x].setAttribute("class","boundary");
		}
	}