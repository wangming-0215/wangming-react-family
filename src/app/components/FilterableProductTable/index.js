import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}