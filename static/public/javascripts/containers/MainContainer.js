import React from 'react'
import _ from 'lodash'
import CategoryNamesContainer from './CategoryNamesContainer'
import GoodsContainer from './GoodsContainer'

export default class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            activeCategory: 'None',
            goods: {}
        }
        fetch('/api/categories/')
            .then((response) => {return response.json()})
            .then((data) => {
                const categories = data.map((e) => {return e.name});
                this.setState({categories: categories, activeCategory: categories[0]})
                return categories
            })
            .then((categories) => {
                categories.map((e) => {
                    fetch(`/api/products?category=${e}`)
                    .then((response) => {return response.json()})
                    .then((data) => {
                        let goods = this.state.goods;
                        goods[e] = data
                        this.setState({goods: goods})
                    })
                })
            });
    }

    onCategoryClick(name) {
        this.setState({activeCategory: name})
    }

    render() {
        console.log(!(_.isEmpty(this.state.categories) || _.isEmpty(this.state.goods)))
        return (
            <div className="row">
                <CategoryNamesContainer
                    className="col-md-3"
                    categories={this.state.categories}
                    activeCategory={this.state.activeCategory}
                    onCategoryClick={this.onCategoryClick.bind(this)}
                />
                <GoodsContainer
                    className="col-md-9"
                    goods={_.has(this.state.goods, this.state.activeCategory)? this.state.goods[this.state.activeCategory]: []}
                />
            </div>
        )
    }
}
