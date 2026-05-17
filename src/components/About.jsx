import React from 'react';

function About({image, about, defaultValue}) {
    return (
        <aside>
            <img src={image} alt={defaultVaue} />
            <p>{about}</p>
        </aside>
    );
}
function DefaultImage({image}) {
    return image ? <img src={image} alt="blog logo" /> : <img src="https://via.placeholder.com/215" alt="blog logo" />;
}

export default About;