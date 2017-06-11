import React, { Component } from 'react';
import Topo from './Topo';
import Rodape from './Rodape';
import Grid from './Grid';
import DetalheCarro from './DetalheCarro';
import CarroForm from './CarroForm';

import jQuery from 'jquery';

class CarrosGrid extends Component {

    componentWillMount(){
		this.buscarCarros();
	}

	buscarCarros(){
		jQuery.ajax(
		{
			method:'GET',
			url:'http://localhost:3001/carros/',
			success:(carros)=>{this.setState({carros})}
		});
	}

    constructor(){
		super();
		this.state = { 
            carros: [],
            exibeGrid: true,
            exibeCadastro: false,
            exibeDetalhe: false,
            carroDetalhado: {}
        };
    }

	render() {
        let grid;
        let cadastro;
        let detalheCarro;
        let botaoNovoCarro;

        if(this.state.exibeGrid){
            grid = <Grid key="gridCarros" 
                        detalharCarro={this.detalharCarro.bind(this)} 
                        removerCarro={this.removerCarro.bind(this)} 
                        carros={this.state.carros}/>;
            botaoNovoCarro = <button key="novoCarroButton" 
                                className="btn btn-primary" 
                                style={{margin: 5 + 'px'}}
                                onClick={this.exibirCadastro.bind(this)}> Novo Carro 
                             </button>;
        }

        if(this.state.exibeDetalhe){
            detalheCarro = <DetalheCarro key={this.state.carroDetalhado.id}
                    imagem={this.state.carroDetalhado.imagem} 
                    fabricante={this.state.carroDetalhado.fabricante} 
                    nome={this.state.carroDetalhado.nome}
                    potencia={this.state.carroDetalhado.potencia}
                    motorizacao={this.state.carroDetalhado.motorizacao}
                    comprimento={this.state.carroDetalhado.comprimento}
                    largura={this.state.carroDetalhado.largura}
                    entreeixos={this.state.carroDetalhado.entreeixos}
                    voltarParaGrid={this.voltarParaGrid.bind(this)}
                />;
        }
        if(this.state.exibeCadastro){
            cadastro = <CarroForm key="novoCarroFormCadastro" 
                            adicionarCarro={this.adicionarCarro.bind(this)} 
                            voltarParaGrid={this.voltarParaGrid.bind(this)}
                        />;
        }
		return (
			<div>
				<Topo key="topoPagina" />
                {botaoNovoCarro}
                {grid}
                {detalheCarro}
                {cadastro}
				<Rodape key="rodapePagina" />
			</div>
			); 
	}

    detalharCarro (carro) {
        this.setState(
            {   carroDetalhado : carro, 
                exibeDetalhe: true, 
                exibeGrid: false
            }
        );
	}

    exibirCadastro (carro) {
        this.setState(
            {   exibeCadastro: true, 
                exibeGrid: false
            }
        );
	}

    voltarParaGrid(event){
        this.setState(
            {   carroDetalhado : {}, 
                exibeDetalhe: false, 
                exibeCadastro: false,
                exibeGrid: true
            }
        );        
    }

    adicionarCarro(fabricante,nome,motorizacao,potencia,comprimento,largura,entreeixos,imagem){
		const carro = {
			fabricante,
			nome,
			motorizacao,
            potencia,
            comprimento,
            largura,
            entreeixos,
            imagem,
			id: this.state.carros.length+1
		};
        jQuery.ajax({
            method: 'POST',
            url: 'http://localhost:3001/carros/',
            data: carro
            })
            .done(function( msg ) {
            });
		this.setState(
			{carros:this.state.carros.concat([carro])}
		);
	}

    removerCarro (carro) {
       jQuery.ajax({
            method: 'DELETE',
            url: 'http://localhost:3001/carros/' + carro.id,
            data: carro
            })
            .done(function( msg ) {
        });
		this.setState(
			{carros:this.state.carros.filter(carroItem => carroItem.id != carro.id)}
		);

	}
}

export default CarrosGrid;