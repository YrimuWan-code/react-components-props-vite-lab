import React from 'react';

function Article({title, date, preview}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}
function Small({date}) {
    return date ? <small>{date}</small> : <small>January 1, 1970</small>;
}


export default Article;