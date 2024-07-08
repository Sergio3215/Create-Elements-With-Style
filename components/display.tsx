import React from 'react'
export default function Display({ element, containerStyle, elementSyle }) {
    return (
        <>
            <iframe srcDoc={
                `
                <style>
                    #iframe--container{
                        ${containerStyle}
                    }
                    #iframe--container *{
                        ${elementSyle}
                    }
                </style>

                <div id="iframe--container">
                    ${element}
                </div>`
            } style={{
                height:"95vh",
                width:"80vw",
            }}>

            </iframe>
        </>
    )
}