
function doIt()
{
$.ajax({
				type: "POST",
				url:  "https://movilmultimediasa.com/abcMobil/post.php",  
				data: {id: "dd"},
				success: function(data) {				
				alert(data);				
				}
			});
	
}

function sum(a,b)
{
	return (a+b);
}
