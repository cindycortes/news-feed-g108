import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleTitle: props.articleTitle,
            articleImg: props.articleImg
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state
        console.log(data)
    }

    handleInputChange = (e) => {
        e.preventDefault()
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        // console.log(this.props.articles);
        const { articleTitle, articleImg } = this.state
        const { articles } = this.props

        console.log(articles);
        const articleList = articles.map(article => {
            return <Article key={article.id} article={article} />
        })


        return (
            <>
                {articleList}

                <p>Article Title is : {articleTitle} </p>
                <p>Article Img is : {articleImg} </p>


                <div className="container">

                    <h1 className="article">Add An Article</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="formgroup">
                            <label>Article Title</label>
                            <input type="text" name="articleTitle" className="form-control" onChange={this.handleInputChange} placeholder="Article Title" ></input>
                        </div>

                        <div className="formgroup">
                            <label>Image</label>
                            <input type="text" name="articleImg" className="form-control" onChange={this.handleInputChange} placeholder="Img Link..."></input>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>


            </>
        )
    }
}

export default ArticleList;