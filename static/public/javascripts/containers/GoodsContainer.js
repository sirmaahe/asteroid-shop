import React from 'react'
import Good from '../components/Good'

export default class GoodsContainer extends React.Component {
    render() {
        let rows = []
        this.props.goods.forEach((good, i) => {
            rows.push(<Good
                key={i}
                title={good.title}
                url={`/catalogue/products/${good.id}`}
                image={good.images[0].original}
                className="col-md-4"
            />)
        })
        return (
            <div className={this.props.className}>
                <div className="row">
                    { rows }
                </div>
            </div>
        )
    }
}