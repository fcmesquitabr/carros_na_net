import React, { Component } from 'react';
import CarroCard from './CarroCard';
import jQuery from 'jquery';

class Grid extends Component {

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
		this.state = { carros: [] };
    }

    render(){
        const carrosCardArray = this.getCarrosCardArray();
        const gridElements = []
        for(var i=0; i<carrosCardArray.length; i++){
            gridElements.push(carrosCardArray[i]);
            //Adiciona a cada 4 carros uma div com clear : both, para não quebrar se um dos cards tiver
            //uma altura maior
            if((i % 3) === 2){
                gridElements.push(<div style={{clear: 'both'}}></div>);
            }
        }

        return(
            <div>
                {gridElements}
            </div>
        );
    }

    getCarrosCardArray(){
        return this.state.carros.map(
                carro=><CarroCard detalharCarro={this.detalharCarro.bind(this)}
                        key={carro.id} fabricante={carro.fabricante} carro={carro}
                        imagem={carro.imagem} nome={carro.nome} 
                        motorizacao='1.0' potencia='100 cv' 
                        />
                );
    }

   	detalharCarro (carro) {
        this.props.detalharCarro(carro);
	}

}

export default Grid;