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
}

class Contratante{

	constructor(obj){
		this.tipo = obj
	}	
}

class Contratado{
	constructor(
		dos_servicos, 
		dos_honorarios, 
		local, 
		data, 
		testemunha1, 
		rg1, 
		testemunha2, 
		rg2,
		obj
		){
		this.dosServicos = dos_servicos
		this.dosHonorarios = dos_honorarios
		this.local = local
		this.data = data
		this.testemunha1 = testemunha1 
		this.rg1 = rg1
		this.testemunha2 = testemunha2
		this.rg2
		this.tipo = {
			contratado: obj
		}
	}
}


function cadastraContrato(){
	let nome = document.getElementById('nome_contratante')
	let nacionalidade = document.getElementById('nacionalidade_contratante')
	let estadocivil = document.getElementById('estadocivil_contratante')
	let profissao = document.getElementById('profissao_contratante')
	let rg = document.getElementById('rg_contratante')
	let cpf = document.getElementById('cpf_contratante')
	let endereco = document.getElementById('endereco_contratante')
	let num = document.getElementById('num_contratante')
	let compl = document.getElementById('compl_contratante')
	let bairro = document.getElementById('bairro_contratante')
	let cep = document.getElementById('cep_contratante')
	let cidade = document.getElementById('cidade_contratante')
	let estado = document.getElementById('estado_contratante')

	let dados = new DadosPessoa(
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

	//let contratante = new Contratante(dados)


	console.log(dados)

	let cont = new Contratante(dados)

	console.log(cont)

	console.log('fim')
}