function IsBlank(variable)
 {
   if(variable == null || variable == "")
   {
     return(true);
   }
   else
   {
     return(false);
   }
 }
 
function NotNum(variable)
{
  var array = variable.split("");
  var cant  = variable.length;
  var cont  = 0;
  
  for(var i=0;i<cant;i++)
   {
     if(array[i] >= '0' && array[i] <= '9')
	 {
	   cont++;
	 }
   }
   if(cont > 0)
   {
	return(true);
   }
   else 
   {
	return(false);
   }
}

function IsEmail(campo)
{
  var array = campo.split("");
  var cant  = campo.length;
  var cont  = 0;
  
  for(var i=0;i<cant;i++)
  {
    if(array[i] =='@')
	{
	  cont++;
	}
  }
  if (cont == 1)
  {
    return(true);
  }
  else 
  { 
    return(false);
  }
}

function NotAssigned(campo)
{
  if (campo == 0)
  {
    return(true);
  }
  else 
  { 
    return(false);
  }
}

 

function envioEmail(){
	var nombre  	= $('#nombre').val();
	var apellido	= $('#apellido').val();
	var empresa  	= $('#empresa').val();
	var web  	    = $('#web').val();
	var telefono 	= $('#telefono').val();
	var email    	= $('#email').val();
	var presupuesto = $('#presupuesto');
	var realiza     = $('#realizar');
	var comentarios = $('#comentarios');
	var dirige      = $('#dirigido');
	var flag        = 0;
	var mensaje     = "";
	
	
	if(IsBlank(nombre))
	{
		flag    = 1;
		mensaje = "Debe ingresar su nombre";
	}
	else
	{
		if(NotNum(variable))
		{
			flag    = 1;
			mensaje = "El nombre no debe contener números.";		
		}
		else
		{
			if(IsBlank(apellido))
			{
				flag    = 1;
				mensaje = "Debe ingresar el apellido.";				
			}
			else
			{
				if(NotNum(apellido))
				{
					flag    = 1;
					mensaje = "El apellido no debe contener números.";	
				}
				else
				{
					if(IsBlank(empresa))
					{
						flag    = 1;
						mensaje = "Debe ingresar la empresa.";
					}
					else
					{
						if(IsBlank(telefono))
						{
							flag    = 1;
							mensaje = "Debe ingresar el teléfono.";
						}
						else
						{
							if(IsBlank(email))
							{
								flag    = 1;
								mensaje = "Debe ingresar el email.";
							}
							else 
							{
								if(IsEmail(email))
								{
									flag    = 1;
									mensaje = "El e-mail ingresado no es válido.";		
								}
								else
								{
									if(NotAssigned(presupuesto))
									{
										flag    = 1;
										mensaje = "Debe seleccionar un presupuesto.";
									}
									else
									{
										if(NotAssigned(realiza))
										{
											flag    = 1;
										    mensaje = "Debe seleccionar lo que desea realizar.";
										}
										else
										{
											if(NotAssigned(dirige))
											{
												flag 	= 1;
												mensaje = "Debe seleccionar a quien va dirigido.";
											}
										}
								    }
								}
							}
						}
					}
				}
			}
		}
	}
	if(flag == 1)
	{	
		$('#ErrorModalTexto').html(mensaje);
		$('#ErrorModal').modal('show');		
	}
	else
	{
		var presup = $( "#presupuesto option:selected" ).text();
		var realiz = $( "#realizar option:selected" ).text();
		var dirigi = $( "#dirigido option:selected" ).text();
		
		var data = {'nombre':nombre, 
		            'apellido':apellido,
					'empresa':empresa,
					'web':web,
					'telefono':telefono,
					'email':email,
					'presupuesto':presup,
					'realiza':realiz,
					'dirige':dirigi,
					'comentarios':comentarios};

		$.ajax({
				url: 'EnvioEmail',
                type: "POST",
                data: data,
                dataType: "html",
                cache: false,
                success: function (response){
                    if(response == 'Send_ok'){
                        $('#ErrorModalTexto').html('¡Tu mensaje fue enviado! Te responderemos a la brevedad.');
						$('#ErrorModal').modal('show');	
                    }
                    else{
                        $('#ErrorModalTexto').html(response);
						$('#ErrorModal').modal('show');	
                    }
                }
            });
        }
	}
}