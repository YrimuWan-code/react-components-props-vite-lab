import React from 'react';

function Article({title, date= "January 1, 1970", preview}) {
    return (
        <article>
            <h3>{title}-Components 101</h3>
            <small>{date}</small>
            <p>{preview}- Setting up the building blocks of your site</p>
        </article>
    );
}

export default Article;