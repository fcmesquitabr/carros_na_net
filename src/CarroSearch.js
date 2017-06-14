import React, { Component } from 'react';

class CarroSearch extends Component {

    render() {
        return (
            <div className="col-p-10 col-m-10 col-g-10">
                <form id="buscarCarroForm">
                    <input type="text" className="form-control" ref="searchInput" onChange={this.handleChange.bind(this)} placeholder="Pesquisar..." />
                </form>
            </div>
        );
    }

    handleChange() {
        this.props.onChange(this.refs.searchInput.value);
    }
}

export default CarroSearch;