
function doIt()
{
$.ajax({
				type: "POST",
				url:  "https://movilmultimediasa.com/abcMobil/post.php",  
				data: {id: "dd"},
				success: function(data) {				
				alert("La receta se comparti� con �xito puedes ver la publicaci�n en tu muro");				
				}
			});
	
}

function sum(a,b)
{
	return (a+b);
}
