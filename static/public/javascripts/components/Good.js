import React from 'react'

export default class Good extends React.Component {
    render() {
        return (
            <a href={this.props.url}>
                <div className={`${this.props.className} good`}>
                    <div>
                        <h1>{ this.props.title }</h1>
                        <img width="200px" src={ this.props.image }/>
                    </div>
                </div>
            </a>
        )
    }
}