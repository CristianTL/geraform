class DadosPessoa{

	constructor(
		nome,
		nacionalidade,
		estadocivil,
		profissao,
		rg,
		cpf,
		endereco,
		num,
		compl,
		bairro,
		cep,
		cidade,
		estado	
		){

		this.nome = nome
		this.nacionalidade = nacionalidade
		this.estadocivil = estadocivil
		this.profissao = profissao
		this.rg = rg
		this.cpf = cpf
		this.endereco = endereco
		this.num = num
		this.compl = compl
		this.bairro = bairro
		this.cep = cep 
		this.cidade = cidade
		this.estado = estado

	}

	validarDados(pessoa = 'contratante'){
		for (let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null){
				document.getElementById(`${i}_${pessoa}`).classList.add('is-invalid')
				return false
			} else {
				document.getElementById(`${i}_${pessoa}`).classList.add('is-valid')
				document.getElementById(`${i}_${pessoa}`).classList.remove('is-invalid')
			}
		}
		return true
	}
}

class DoServico{
	constructor(
		dos_servicos, 
		dos_honorarios, 
		local, 
		data, 
		testemunha1, 
		rg1, 
		testemunha2, 
		rg2
		){
		this.dos_servicos = dos_servicos
		this.dos_honorarios = dos_honorarios
		this.local = local
		this.data = data
		this.testemunha1 = testemunha1 
		this.rg1 = rg1
		this.testemunha2 = testemunha2
		this.rg2 = rg2
	}

	validarDados(){
		for(let i in this){
			if(this[i] == undefined || this[i] == '' || this == null){
				document.getElementById(`${i}`).classList.add('is-invalid')
				return false
			} else {
				document.getElementById(`${i}`).classList.add('is-valid')
				document.getElementById(`${i}`).classList.remove('is-invalid')
			}
		}
		return true
	}
}

class Bd{
	constructor(){
		let id = localStorage.getItem('id')

		if(id == null){
			localStorage.setItem('id', 0)
		}
	}

	getProximoId(){
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId)+1
	}

	gravar(dt){
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(dt))
		localStorage.setItem('id', id)
	}

	listaRegistro(pessoa = 'contratante'){
		
		//array para contratos
		let contratos = Array()

		let id = localStorage.getItem('id')
		
		//listando
		for(let i = 1; i <= id; i++){
			
			let retorno_db = JSON.parse(localStorage.getItem(i))

			if(retorno_db == null){
				continue
			}

			let contrato = retorno_db[pessoa]

			contrato.id = i
			contratos.push(contrato)
		}

		return contratos
		
	}

	remover(id){
		localStorage.removeItem(id)
	}
}

let nome, nacionalidade, estadocivil, profissao, rg, cpf, endereco, num, compl, bairro, cep, cidade, estado

let bd = new Bd()

//contratante ou contratado
function getDados(pessoa){
	nome = document.getElementById('nome_'+pessoa)
	nacionalidade = document.getElementById('nacionalidade_'+pessoa)
	estadocivil = document.getElementById('estadocivil_'+pessoa)
	profissao = document.getElementById('profissao_'+pessoa)
	rg = document.getElementById('rg_'+pessoa)
	cpf = document.getElementById('cpf_'+pessoa)
	endereco = document.getElementById('endereco_'+pessoa)
	num = document.getElementById('num_'+pessoa)
	compl = document.getElementById('compl_'+pessoa)
	bairro = document.getElementById('bairro_'+pessoa)
	cep = document.getElementById('cep_'+pessoa)
	cidade = document.getElementById('cidade_'+pessoa)
	estado = document.getElementById('estado_'+pessoa)
}

function cadastraContrato(){

	getDados('contratante');
	
	let dados_contratante = new DadosPessoa(
		nome.value,
		nacionalidade.value,
		estadocivil.value,
		profissao.value,
		rg.value,
		cpf.value,
		endereco.value,
		num.value,
		compl.value,
		bairro.value,
		cep.value,
		cidade.value,
		estado.value
	)

	getDados('contratado');
	
	let dados_contratado = new DadosPessoa(
		nome.value,
		nacionalidade.value,
		estadocivil.value,
		profissao.value,
		rg.value,
		cpf.value,
		endereco.value,
		num.value,
		compl.value,
		bairro.value,
		cep.value,
		cidade.value,
		estado.value
	)

	let dos_servicos = document.getElementById('dos_servicos')
	let dos_honorarios = document.getElementById('dos_honorarios') 
	let local = document.getElementById('local')
	let data = document.getElementById('data') 
	let testemunha1 = document.getElementById('testemunha1') 
	let rg1 = document.getElementById('rg1') 
	let testemunha2 = document.getElementById('testemunha2')  
	let rg2 = document.getElementById('rg2') 

	let do_servico = new DoServico(
		dos_servicos.value,  
		dos_honorarios.value,  
		local.value,  
		data.value,  
		testemunha1.value,  
		rg1.value,  
		testemunha2.value,  
		rg2.value
	)


	if(dados_contratante.validarDados() && dados_contratado.validarDados('contratado') && do_servico.validarDados()){
		
		let contrato = {
			contratante: dados_contratante,
			contratado: dados_contratado,
			do_servico: do_servico
		}
		bd.gravar(contrato)

		window.location.href = "servico.html?"+localStorage.getItem('id')

	} else {

		$('#modalValidacao').modal('show')
		console.log('Preencha corretamente!')
	}

	
}

function carregaContrato(){

	let retorno = window.location.search.replace('?','')
	let id = retorno == ''? 1 : retorno

	console.log(id)

	let tipo = {contratante:1,contratado:2}

	for(let pessoa in tipo){

		document.getElementById('nome_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].nome
		document.getElementById('nacionalidade_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].nacionalidade
		document.getElementById('estadocivil_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].estadocivil
		document.getElementById('profissao_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].profissao
		document.getElementById('rg_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].rg
		document.getElementById('cpf_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].cpf
		document.getElementById('endereco_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].endereco
		document.getElementById('num_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].num
		document.getElementById('compl_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].compl
		document.getElementById('bairro_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].bairro
		document.getElementById('cep_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].cep
		document.getElementById('cidade_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].cidade
		document.getElementById('estado_'+pessoa).innerHTML = JSON.parse(localStorage.getItem(id))[pessoa].estado

	}

	let opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	let data = new Date(JSON.parse(localStorage.getItem(id)).do_servico.data)

	let formatoData = new Intl.DateTimeFormat('pt-BR', opcoes)
	document.getElementById('data').innerHTML = formatoData.format(data)

	document.getElementById('dos_servicos').innerHTML = JSON.parse(localStorage.getItem(id)).do_servico.dos_servicos
	document.getElementById('dos_honorarios').innerHTML = JSON.parse(localStorage.getItem(id)).do_servico.dos_honorarios
	document.getElementById('local').innerHTML = JSON.parse(localStorage.getItem(id)).do_servico.local	
	document.getElementById('testemunha1').innerHTML = JSON.parse(localStorage.getItem(id)).do_servico.testemunha1
	document.getElementById('rg1').innerHTML = JSON.parse(localStorage.getItem(id)).do_servico.rg1
	document.getElementById('testemunha2').innerHTML = JSON.parse(localStorage.getItem(id)).do_servico.testemunha2
	document.getElementById('rg2').innerHTML = JSON.parse(localStorage.getItem(id)).do_servico.rg2

	
	//console.log(JSON.parse(localStorage.getItem(1)).contratante.nome)

}

function listandoContrato(){

	let contratos = bd.listaRegistro()

	//elementos para o tbody
	var listaContratos = document.getElementById('listaContratos')
	listaContratos.innerHTML = ''

	contratos.forEach(function(d){

		//criando a linha (tr)
		let linha = listaContratos.insertRow()

		linha.insertCell(0).innerHTML = d.nome
		linha.insertCell(1).innerHTML = d.cpf

		//criando o botão
		let btnAbrir = document.createElement("button")
		btnAbrir.className = 'btn btn-primary'
		btnAbrir.innerHTML = '<i class="fas fa-print"></i>'
		linha.insertCell(2).append(btnAbrir)
		btnAbrir.onclick = function(){
			window.location.href = "servico.html?"+d.id
		}

		//excluir o botão
		let btnExcluir = document.createElement("button")
		btnExcluir.className = 'btn btn-danger'
		btnExcluir.innerHTML = '<i class="fas fa-times"></i>'
		linha.insertCell(3).append(btnExcluir)
		btnExcluir.onclick = function(){
			var retorno = confirm('Tem certeza que deseja excluir?')
			if(retorno){
				console.log('ok')
				bd.remover(d.id)
				window.location.reload()
			}
			
		}


	})

}
