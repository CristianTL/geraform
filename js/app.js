jQuery(document).ready(function(){

	let parte = ['contratante', 'contratado', 'dos_servico', 'do_honorario', 'do_foro']

	for (var i = 0; i < parte.length; i++) {

		getButton(i)

	}

	function getButton(i){
		$('button.prx_'+parte[i]).bind("click", function(){

			$('#'+parte[i]).fadeToggle("slow", function(){
				$('#'+parte[i+1]).fadeToggle("slow")
				
			})

		})

		$('button.volta_'+parte[i+1]).bind("click", function(){

			$('#'+parte[i+1]).fadeToggle("slow", function(){
				$('#'+parte[i]).fadeToggle("slow")
			})
			
		})
	}
	
	// obsoleto
	/*
	$('button.prx_contratante').bind("click", function(){
		//alert('ok')
		$('#contratante').fadeToggle("slow", function(){
			$('#contratado').fadeToggle("slow")
		})
		
	})

	$('button.prx_contratado').bind("click", function(){
		$('#contratado').fadeToggle("slow", function(){
			$('#dos_servico').fadeToggle("slow")
		})
	})

	$('button.prx_dos_servico').bind("click",function(){
		$('#dos_servico').fadeToggle("slow", function(){
			$('#do_honorario').fadeToggle("slow")
		})
	})

	$('button.prx_do_honorario').bind("click",function(){
		$('#do_honorario').fadeToggle("slow", function(){
			$('#do_foro').fadeToggle("slow")
		})
	})
	

	$('button.volta_contratado').bind("click", function(){
		$('#contratado').fadeToggle("slow", function(){
			$('#contratante').fadeToggle("slow")
		})
		
	})
	
	$('button.volta_dos_servico').bind("click",function(){
		$('#dos_servico').fadeToggle("slow", function(){
			$('#contratado').fadeToggle("slow")
		})
	})

	$('button.volta_do_honorario').bind("click",function(){
		$('#do_honorario').fadeToggle("slow", function(){
			$('#dos_servico').fadeToggle("slow")
		})
	})

	$('button.volta_do_foro').bind("click",function(){
		$('#do_foro').fadeToggle("slow", function(){
			$('#do_honorario').fadeToggle("slow")
		})
	})

	*/

	



});