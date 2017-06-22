import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>)
            }
            rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}