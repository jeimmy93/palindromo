window.onload = function()
{	
	nom_div("envio").addEventListener('click', function(event)
	{
		//console.log("hola");
		var letras = document.getElementById("palabra").value;
        //console.log(letras);   
        var pal2 = letras.toLowerCase();
        var pal3 = pal2.replace(/\s/g,'');// reemplaza caracteres de espacio de manera global
        var pal4 = pal3.split("");
        console.log(pal4);
        //var aum = 0;



		for ( var a = 0 ; a < pal4.length;a++) 
		{


			for (var b = pal4.length-1; b >= 0; b--)
			{ 
				if ( pal4[a] == pal4[b])	
				{

					
                   console.log("es palindromo");
                
				
				}

				else 
				{
					
                   console.log("no es palindromo");
					
					
			
				}

				break;
			    

			}

			break;

			} 

	});		
	//Accedera los elementos de HTML...
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}