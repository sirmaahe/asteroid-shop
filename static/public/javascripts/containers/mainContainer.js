import React from 'react'
import ReactDOM from 'react-dom'
import categoryNamesContainer from '../containers/categoryNamesContainer'

export default class mainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: ['test', 'bam', 'beep'],
            activeCategory: 'test'
        }
    }

    onCategoryClick(name) {
        this.setState({activeCategory: name})
    }

    render() {
        return (
            <div>
                <categoryNamesContainer
                    categories={this.state.categories}
                    activeCategory={this.state.activeCategory}
                    onCategoryClick={this.onCategoryClick}
                />
            </div>
        )
    }
}
