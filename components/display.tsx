"use client"
import React, { useEffect, useState } from 'react'
export default function Display({ element, containerStyle, elementSyle, placeholderColor, updateCodeElement }) {

    const [cssElement, setCssElement] = useState(`
                    #iframe--container{
                        ${containerStyle}
                    }
                    #iframe--container *{
                        ${elementSyle}
                    }
                        ${element.includes("button") ?
            `#iframe--container button:active{
                        filter:contrast(0.8);
                        transform:scale(0.9);
                    }`
            :
            ""
        }
                ${element.includes(`type="text"`) ?
            `#iframe--container input::placeholder {
                      color: ${placeholderColor};
                    }`
            :
            ""
        }`);

    const [htmlElement, setHtmlElement] = useState(`
                <div id="iframe--container">
                    ${element}
                </div>`);

    useEffect(() => {
        elementUpdate();
        updateCodeElement(`/*CSS*/
            ${cssElement}
            
            <!-- html -->
            ${htmlElement}`);
    }, [element, containerStyle, elementSyle, placeholderColor]);

    const elementUpdate = () => {
        setCssElement(`
                #iframe--container{
                    ${containerStyle}
                }
                #iframe--container *{
                    ${elementSyle}
                }
                    ${element.includes("button") ?
                `#iframe--container button:active{
                    filter:contrast(0.8);
                    transform:scale(0.9);
                }`
                :
                ""
            }
            ${element.includes(`type="text"`) ?
                `#iframe--container input::placeholder {
                  color: ${placeholderColor};
                }`
                :
                ""
            }`);
        setHtmlElement(`
                <div id="iframe--container">
                    ${element}
                </div>`);
    }



    return (
        <>
            <iframe srcDoc={
                `
                <style>
                ${cssElement}
                </style>
                ${htmlElement}
                `
            } style={{
                height: "95vh",
                width: "80vw",
            }}>

            </iframe>
        </>
    )
}