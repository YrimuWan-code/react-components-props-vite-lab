import React from 'react';

function Article({title, date, preview}) {
    return (
        <article>
            <h3>{title}-Components 101</h3>
            <small>{date}-December 15,2020</small>
            <p>{preview}- Setting up the building blocks of your site</p>
        </article>
    );
}
function Small({date}) {
    return date ? <small>{date}</small> : <small>January 1, 1970</small>;
}


export default Article;