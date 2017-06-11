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
            carroDetalhado: { 
                id: 20,
                fabricante: "Fiat",
                nome: "up",            
                motorizacao: "1.0",
                potencia: "75 cv",
                comprimento: "3850 mm",
                largura: "1555 mm",
                entreeixos: "1400 mm",
                imagem: "images/up.jpg"
            }};
    }

	render() {
		return (
			<div>
				<Topo />
                <Grid detalharCarro={this.detalharCarro.bind(this)} carros={this.state.carros}/>
                <div style={{clear: 'both'}}> </div>
                <DetalheCarro key={this.state.carroDetalhado.id}
                    imagem={this.state.carroDetalhado.imagem} 
                    fabricante={this.state.carroDetalhado.fabricante} 
                    nome={this.state.carroDetalhado.nome}
                    potencia={this.state.carroDetalhado.potencia}
                    motorizacao={this.state.carroDetalhado.motorizacao}
                    comprimento={this.state.carroDetalhado.comprimento}
                    largura={this.state.carroDetalhado.largura}
                    entreeixos={this.state.carroDetalhado.entreeixos}
                />
                <CarroForm adicionarCarro={this.adicionarCarro.bind(this)} />
				<Rodape />
			</div>
			); 
	}

    detalharCarro (carro) {
        this.setState({carroDetalhado : carro});
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
                alert( 'Carro Salvo: ' + msg );
            });
		this.setState(
			{carros:this.state.carros.concat([carro])}
		);
	}
}

export default CarrosGrid;