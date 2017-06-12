import React, { Component } from 'react';
import CarroCard from './CarroCard';

class Grid extends Component {

    render() {
        const carrosCardArray = this.getCarrosCardArray();
        const gridElements = [];

        for (var i = 0; i < carrosCardArray.length; i++) {
            gridElements.push(carrosCardArray[i]);

            //Adiciona a cada 3 carros uma div com "clear: both", para não quebrar se um dos cards tiver
            //uma altura maior.
            if ((i % 3) === 2) {
                gridElements.push(<div key={'divAjusteGrid' + i} style={{ clear: 'both' }}></div>);
            }
        }

        return (
            <div>
                {gridElements}
                <div style={{ clear: 'both' }}></div>
            </div>
        );
    }

    getCarrosCardArray() {
        return this.props.carros.map(
            carro => <CarroCard
                detalharCarro={this.detalharCarro.bind(this)}
                removerCarro={this.removerCarro.bind(this)}
                key={carro.id} fabricante={carro.fabricante} carro={carro}
                imagem={carro.imagem} nome={carro.nome}
                motorizacao={carro.motorizacao} potencia={carro.potencia} />
        );
    }

    detalharCarro(carro) {
        this.props.detalharCarro(carro);
    }

    removerCarro(carro) {
        this.props.removerCarro(carro);
    }
}

export default Grid;