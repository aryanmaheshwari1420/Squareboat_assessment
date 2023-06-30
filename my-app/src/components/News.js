import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row"> 
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div> 
                </div> 
            </div>
        )
    }
}

export default News