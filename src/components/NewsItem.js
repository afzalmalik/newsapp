import React, { Component } from 'react'

class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, source, author, publishedAt, badgeColor } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${badgeColor}`} style={{ zIndex: "1", left: "90%" }}>{source}</span>
                    <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2017/11/RTX30SOV-770x433.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-primary">By {author ? author : "Unknown"} on {new Date(publishedAt).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel='noreferrer'>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem