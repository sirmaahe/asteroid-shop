import React from 'react'

export default class CategoryName extends React.Component {
    render() {
        return (
            <div class={ this.props.active && "active-link" } onClick={ () => {this.props.onCategoryClick(this.props.name) }} >
                <p>{ this.props.name }</p>
            </div>
        )
    }
}