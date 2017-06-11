import React, { Component } from 'react';

class CarroCard extends Component{

	detalharCarroButtonClick (event) {
		event.preventDefault();
        this.props.detalharCarro(this.props.carro);
	}

	removerCarro (event) {
		event.preventDefault();
        this.props.removerCarro(this.props.carro);
	}

    render() {
		return (
        <div className="col-p-4 col-m-4 col-g-4">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.fabricante + ' ' + this.props.nome}</h3>
                    <a href="#" className="close" onClick={this.removerCarro.bind(this)}
                        title="Remover Carro"
                        style={{position: 'relative', float: 'right', top: -20 + 'px'}}>×</a>
                </div>
                <div className="panel-body">
                    <a href="#" onClick={this.detalharCarroButtonClick.bind(this)} title="Detalhar os dados do carro">
                        <img src={this.props.imagem} alt={this.props.nome} title="Detalhar os dados do carro" />
                    </a>
                    <table className="table" style={{marginTop: 15 + 'px'}}>
                    <thead>
                        <tr>
                            <th colSpan={2}  style={{textAlign: 'center'}}>Ficha Técnica</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Motorização</td>
                            <td>{this.props.motorizacao}</td>
                        </tr>                                        
                        <tr>
                            <td>Potência</td>
                            <td>{this.props.potencia}</td>
                        </tr>
                    </tbody>
                    </table>                                        
                </div>
            </div>
        </div>
        );
    }
}

export default CarroCard;