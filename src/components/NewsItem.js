import React from 'react';

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, source, author, publishedAt, badgeColor } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div className='d-flex justify-content-end position-absolute' style={{ right: 0 }}>
                    <span className={`badge rounded-pill bg-${badgeColor}`}>{source}</span>
                </div>
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

export default NewsItem