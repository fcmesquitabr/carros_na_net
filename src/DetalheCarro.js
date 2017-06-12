import React, { Component } from 'react';

class DetalheCarro extends Component {

    voltarParaGrid(event) {
        this.props.voltarParaGrid(event);
    }

    render() {
        return (
            <div className="col-p-10 col-m-10 col-g-10" style={{ display: 'inline-grid' }}>
                <button className="btn btn-primary"
                    style={{ width: 100 + 'px', margin: 5 + 'px' }}
                    onClick={this.voltarParaGrid.bind(this)}
                    title="Voltar para a lista de carros">
                    Voltar
                </button>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Detalhes {this.props.fabricante + ' ' + this.props.nome}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="col-p-6 col-m-6 col-g-6" style={{ marginBottom: 10 + 'px' }}>
                            <img src={this.props.imagem} alt={this.props.nome} title={this.props.nome} />
                        </div>
                        <div className="col-p-4 col-m-4 col-g-4">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Fabricante</td>
                                        <td>{this.props.fabricante}</td>
                                    </tr>
                                    <tr>
                                        <td>Nome do Modelo</td>
                                        <td>{this.props.nome}</td>
                                    </tr>
                                    <tr>
                                        <td>Motorização</td>
                                        <td>{this.props.motorizacao}</td>
                                    </tr>
                                    <tr>
                                        <td>Potência</td>
                                        <td>{this.props.potencia}</td>
                                    </tr>
                                    <tr>
                                        <td>Comprimento</td>
                                        <td>{this.props.comprimento}</td>
                                    </tr>
                                    <tr>
                                        <td>Largura</td>
                                        <td>{this.props.largura}</td>
                                    </tr>
                                    <tr>
                                        <td>Entre-eixos</td>
                                        <td>{this.props.entreeixos}</td>
                                    </tr>
                                    <tr>
                                        <td>Ano</td>
                                        <td>{this.props.ano}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetalheCarro;