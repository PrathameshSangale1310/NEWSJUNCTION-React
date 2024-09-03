import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, newsDate, author, source } = props;
    return (
        <div className="my-1">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger" style={{ zIndex: '1', left: '87%' }}>{source}</span>
                </div>
                <img
                    src={
                        imageUrl
                            ? imageUrl
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&s"
                    }
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p>
                        <small className="text-muted">
                            By {author} on {new Date(newsDate).toGMTString()}
                        </small>
                    </p>
                    <a
                        rel="noreferrer"
                        href={newsUrl}
                        target="_blank"
                        className="btn btn-sm btn-dark"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );

}


export default NewsItem;
