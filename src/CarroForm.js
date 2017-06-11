import React, { Component } from 'react';

class CarroForm extends Component{
    render(){
        return( 
            <div className="col-p-5 col-m-5 col-g-5" style={{display: 'inline-grid'}}>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Cadastro Novo Carro</h3>
                    </div>
                    <div className="panel-body">
                        <form id="cadatroCarroForm" onSubmit={this.handleSubmit.bind(this)}>
                        <table className="table">
                        <tbody>
                            <tr>
                                <td>Fabricante</td>
                                <td><input type="text" className="form-control" ref={input=>this.fabricante=input}/></td>
                            </tr>
                            <tr>
                                <td>Nome do Modelo</td>
                                <td><input type="text" className="form-control" ref={input=>this.nome=input}/></td>
                            </tr>
                            <tr>
                                <td>Motorização</td>
                                <td><input type="text" className="form-control" ref={input=>this.motorizacao=input}/></td>
                            </tr>                                        
                            <tr>
                                <td>Potência</td>
                                <td><input type="text" className="form-control" ref={input=>this.potencia=input}/></td>
                            </tr>
                            <tr>
                                <td>Comprimento</td>
                                <td><input type="text" className="form-control" ref={input=>this.comprimento=input}/></td>
                            </tr>
                            <tr>
                                <td>Largura</td>
                                <td><input type="text" className="form-control" ref={input=>this.largura=input}/></td>
                            </tr>
                            <tr>
                                <td>Entre-eixos</td>
                                <td><input type="text" className="form-control" ref={input=>this.entreeixos=input}/></td>
                            </tr>
                            
                        </tbody>
                        </table>
                        </form>                                        
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit(event){
        event.preventDefault();
        let fabricante = this.fabricante.value;
        let nome = this.nome.value;
        let motorizacao = this.motorizacao.value;
        let potencia = this.potencia.value;
        let comprimento = this.comprimento.value;
        let largura = this.largura.value;
        let entreeixos = this.entreeixos.value;
        this.props.adicionarCarro(fabricante,nome,motorizacao,potencia,comprimento,largura,entreeixos);
    }

}

export default CarroForm;