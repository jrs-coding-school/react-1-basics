import React from 'react'

export default function UsingJSX() {

    var foo = 'bar';

    return (
        <div>
            <p>
                React uses a syntax extention for JavaScript called 'JSX.'
            </p>
            <p>
                JSX allows html syntax inside of a js file.
            </p>
            <p>
                JSX elements can be used like other js values.
            </p>
            <p>
                JSX also allows js values to be inserted into HTML!
            </p>
            <p>
                Just use curly braces: {'{jsValue}'}
            </p>
            <p>
                Foo: {foo}
            </p>
        </div>
    )
}
