import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
        }
    }

    async componentDidMount(){ 
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=18c202d4151d4ac6ac2dabe02c3f7060";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    render() { 
        return (
            <div className="container">
                <h1 className='text-center' style={{ color: 'white' }}>NewsApp - Top Headlines</h1> 
                <div className="row"> 
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })} 
                </div> 
            </div>
        )
    }
}

export default News