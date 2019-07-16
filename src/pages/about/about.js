import React from 'react'
import './about.css'
import Picture from '../../assets/picture.jpg'

const About = _ => {
    return (
        <>
            <h2 className="subtitle">Annie Pham</h2>
            <div className="aboutcontainer">
                <img src={Picture} className="picture"></img>
                <p className="abouttext">Praesent consequat molestie placerat. Integer mattis purus non tincidunt interdum. Aliquam non justo eget elit dapibus tristique. Nulla risus eros, molestie id lacus vel, cursus vulputate erat. Proin non commodo urna. Sed eget egestas ante. Proin ut egestas lacus. Vestibulum volutpat purus ac nisl lobortis scelerisque. Donec vel tortor sed lorem finibus viverra at vitae arcu. Phasellus dapibus vel neque et consequat. Phasellus sodales venenatis felis, a dapibus elit lacinia commodo. Aliquam non sapien metus. Proin ultricies eget velit a maximus. Phasellus egestas diam at nunc semper sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lectus rutrum, fringilla urna sed, dictum felis. Curabitur gravida sollicitudin fringilla. Sed ullamcorper vitae mauris a tempor. Proin vel aliquam felis. Duis non fermentum urna, placerat suscipit dolor. Praesent interdum semper auctor. Integer dapibus sit amet quam id condimentum. Ut id facilisis ex, a cursus ante. In egestas nisi lectus, non mollis est viverra eu. Curabitur risus quam, placerat et luctus in, ornare ut arcu.</p>
            </div>
        </>
    )
}

export default About