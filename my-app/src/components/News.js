import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){ 
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=18c202d4151d4ac6ac2dabe02c3f7060";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

     
    

    render() { 
        return (
            <div className="container my-3">
                <h1>NewsMonkey - Top Headlines</h1> 
                <div className="row"> 
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News