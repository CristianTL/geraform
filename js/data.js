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

		console.log(contrato)
	} else {
		console.log('Preencha corretamente!')
	}

	
}

function carregaContrato(){

	document.getElementById('nome_contratante').innerHTML = JSON.parse(localStorage.getItem(1)).contratante.nome
	console.log(JSON.parse(localStorage.getItem(1)).contratante.nome)

}