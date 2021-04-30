import React from 'react'

const Article = (props) => {
    return (
        <div className='article-info'>
            <h2 className='article-title'>"{props.title}"</h2>
            <h3 className='author-name'>Author: {props.author}</h3>
            <h3>Written on: {props.written_on}</h3>
            <h4>Upvotes: {props.upvotes}</h4>
            <a href={props.url} target='_blank' rel='noreferrer'>Read this article here</a>
            <div className='line-break'>
               <hr /> 
            </div>
        </div>
    )
}

export default Article
