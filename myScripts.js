
function doIt()
{
$.ajax({
				type: "POST",
				url:  "compartir.php",  
				data: {etiquetados: etiquetados},
				success: function(data) {				
				alert("La receta se compartió con éxito puedes ver la publicación en tu muro");				
				}
			});
	
}

function sum(a,b)
{
	return (a+b);
}
