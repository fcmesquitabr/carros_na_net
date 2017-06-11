import React, { Component } from 'react';
import Topo from './Topo';
import Rodape from './Rodape';
import Grid from './Grid';
import DetalheCarro from './DetalheCarro';
import CarroForm from './CarroForm';

class CarrosGrid extends Component {

    constructor(){
		super();
		this.state = { carroDetalhado: { 
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
                <Grid detalharCarro={this.detalharCarro.bind(this)} />
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

    adicionarCarro(fabricante,nome,motorizacao,potencia,comprimento,largura,entreeixos){
		const carro = {
			fabricante,
			nome,
			motorizacao,
            potencia,
            comprimento,
            largura,
            entreeixos,
			id: this.state.carros.length+1
		};

		this.setState(
			{carros:this.state.carros.concat([carro])}
		);
	}
}

export default CarrosGrid;