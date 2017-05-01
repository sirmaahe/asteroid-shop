import React from 'react'
import CategoryName from '../components/CategoryName'


export default class CategoryNamesContainer extends React.Component {
    render() {
        let rows = []
        this.props.categories.forEach((category, i) => {
            rows.push(<CategoryName
                key={i}
                name={category}
                active={category == this.props.activeCategory}
                onCategoryClick={this.props.onCategoryClick}/>)
        })
        return (
            <div className={this.props.className}>
                { rows }
            </div>
        )
    }
}