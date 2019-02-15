import React, { Component } from 'react'


const Article = ({ article }) => {
    // console.log(article, 'mitch')
    const { img, title } = article
    // console.log(article)

    return (
        <>
        <div className="container">

            <div className="single_card">
                <div className="card" style={{width: "30rem"}}>
                    <img src={img} className="card-img-top" alt="cardImage"/>
                    <div className="card-body">
                        <h5 className="card-title">Cart Title: {title} </h5>
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}




export default Article;