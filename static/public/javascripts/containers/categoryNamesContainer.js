import React from 'react'
import categoryName from '../components/categoryName'


export default class categoryNamesContainer extends React.Component {
    render() {
        let rows = []
        this.props.categories.forEach(function(category) {
            rows.push(<categoryName name={category} active={category == this.props.activeCategory} onClick={this.props.onCategoryClick}/>)
        })
        return (
            <div>
                { rows }
            </div>
        )
    }
}