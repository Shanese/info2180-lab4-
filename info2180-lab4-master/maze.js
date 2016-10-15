window.onload = function()
	{
		var boundary=document.querySelectorAll('.boundary');
		for (var i = 0; i <boundary.length; i++) 
			{
				boundary[i].onmouseover = function()

				{
					for (var x = 0; x < boundary.length; x++) {
						boundary[x].setAttribute("class","boundary youlose");
					}
				}
 			} 
	}



