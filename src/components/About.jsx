import React from 'react';

function About({image, about, defaultValue}) {
    return (
        <aside>
            <img src={image} alt={defaultVaue} />
            <p>{about}</p>
        </aside>
    );
}

export default About;