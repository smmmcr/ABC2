
function doIt()
{
var url = 'http://www.jquery4u.com/scripts/jquery4u-sites.json?callback=?';
/*
$.ajax({
   type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
       console.dir(json.sites);
    },
    error: function(e) {
       console.log(e.message);
    }
});*/
userName="dd";
password="dd";
 $.ajax
    ({
        type: "POST",
        //the url where you want to sent the userName and password to
        url: 'https://movilmultimediasa.com/abcMobil/post.php',
        dataType: 'jsonp',
        async: false,
        //json object to sent to the authentication url
        data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
        success: function (data) {

        alert(data); 
        }
    })

	
}

function sum(a,b)
{
	return (a+b);
}
