import React, { Component } from 'react'


class Article extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <img src={this.props.article.img} className="card-img-top" alt="cardImage"></img>
                    <div className="card-body">
                        <h5 className="card-title" title={this.props.article.title}>Cart Title: {this.props.article.title} </h5>
                    </div>
                </div>

            </>
        )
    }
}

export default Article;