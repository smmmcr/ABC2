var datos15;
var datos1;
function doIt()
{
$.ajax({
				type: "POST",
				url:  "https://movilmultimediasa.com/abcMobil/post.php",  
				data: {id: "dd"},
				success: function(data) {
				//alert("data")				
				datos1=data;				
				}
			});
			alert("dd");
		return datos1;
}
function getinfo()
{
uri="https://movilmultimediasa.com/abcMobil/post.php";
$.getJSON(uri + '?function=' + 'check' + '&callback=?', function (json_data) {
/*    if (json_data == 'true'){	
                }*/
			//	alert(json_data);
			datos15=json_data;
});

return datos15;
}


/*function obtenreTextoSemana()
{
return "ss";
/*	return "Estilos de Aprendizaje"+
"Dummy text of the printing and typesetting industry."+ 
"has been the industry's standard dummy text ever "+
"since the 1500s, when an unknown printer took a galley "+
"of type and scrambled it to make a type specimen book. "+
"It has survived not only five centuries, but also the leap "+
"into electronic typesetting, remaining essentially "+
"unchanged.  It was popularised in the 1960s with the"+ 
"release of Letraset sheets containing Lorem Ipsum "+
"passages, and more recently with desktop publishing."+
"Contrary to popular belief, is not simply random text. "+
"It has roots in a piece of classical Latin literature from "+
"45 BC, making it over 2000 years old. Richard McClintock, "+
";*/
//}
