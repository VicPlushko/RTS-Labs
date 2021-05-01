import React from 'react'

const Article = (props) => {

    const {
        title,
        author,
        written_on,
        upvotes,
        url
    } = props

    return (
        <div className='article-info'>
            <a 
            href={url} 
            target='_blank' 
            rel='noreferrer'>
            <h2 className='article-title'>"{title}"</h2>
            </a>
            <h3 className='author-name'>Author: {author}</h3>
            <h3>Written on: {written_on}</h3>
            <h4>Upvotes: {upvotes}</h4>
            <div className='line-break'>
               <hr /> 
            </div>
        </div>
    )
}

export default Article
