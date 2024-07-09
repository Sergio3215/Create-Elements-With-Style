"use client"
import Control from "./control";
import Display from "./display";
import React, { useEffect, useState } from 'react'
import "../public/container.css"
import "../public/display.css"
import Swal from 'sweetalert2'

export default function Container() {

    const [element, setElement] = useState(`<button>button</button>`);

    const [justifyContentElement, setJustifyContentElement] = useState(`left`);
    const [alignItemsElement, setAlignItemsElement] = useState(`flex-start`);
    const [paddingLR, setPaddingLR] = useState(`0%`);
    const [paddingTB, setPaddingTB] = useState(`0%`);
    const [borderRadius, setBorderRadius] = useState(`0%`);
    const [fontSize, setFontSize] = useState(`12px`);
    const [fontColor, setFontColor] = useState(`#000000`);
    const [backgroundColor, setBackgroundColor] = useState(`#f0f0f0`);
    const [placeholderColor, setPlaceholderColor] = useState(`#000000`);
    const [borderColor, setBorderColor] = useState(`#000000`);
    const [borderSize, setBorderSize] = useState(`1px`);


    const [elementSyle, setElementSyle] = useState(`cursor:${element.includes(`type="text"`) ?
        "text" :
        "pointer"
        };
    padding: ${paddingTB} ${paddingLR}; 
    border-radius: ${borderRadius};
    font-size:${fontSize};
    color:${fontColor};
    background-color:${backgroundColor}; 
    border:${borderSize} solid ${borderColor};`);

    const [containerStyle, setContainerStyle] = useState(`display:flex;justify-content:${justifyContentElement};height: 98vh;align-items:${alignItemsElement};`);

    const [todoElemento, setTodoElemento] = useState(`
            <div id="iframe--container">
                    ${element}
                </div>
        `);

    const updateCodeElement = (value) => {
        setTodoElemento(value);
    }

    const getCodeElement = async () => {
        console.log(todoElemento);
        await Swal.fire({
            icon: "success",
            // input: "textarea",
            // inputLabel: "Code Element",
            // inputPlaceholder: "Type your message here...",
            // inputValue:todoElemento,
            // inputAttributes: {
            //     "readonly": "true"
            // },
            html: `
            <div style="display:flex">
                <div>
                    <textarea style="height: 20vh; width: 20vw;">${todoElemento}</textarea>
                </div>
                <div style="cursor: pointer;" id="popup--copyboard">
                <?xml version="1.0" encoding="UTF-8"?>
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.58 59.88" style="width:50px;height:50px">
                      <defs>
                        <style>
                          .cls-1 {
                            fill: #fff;
                            stroke: #231f20;
                            stroke-miterlimit: 10;
                            stroke-width: 2px;
                          }
                        </style>
                      </defs>
                      <g id="Layer_1-2" data-name="Layer 1">
                        <rect class="cls-1" x=".5" y="2.01" width="20.89" height="24.78" rx="3.1" ry="3.1"/>
                        <rect class="cls-1" x="5.14" y=".5" width="22.94" height="28.88" rx="3.1" ry="3.1"/>
                      </g>
                    </svg>
                </div>
            </div>
            `,
            showCloseButton: true
        });

    }

    
    const copyToClipboard = () => {
        var textField = document.createElement('textarea')
        textField.innerText = todoElemento
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }



    const handlerChangeElement = (value) => {

        let el = `<button>button</button>`;

        switch (value.toLowerCase()) {
            case 'button':
                el = `<button>button</button>`;
                break;
            case 'input':
                el = `<input type="text" placeholder="text"/>`;
                break;
            case 'input checkbox':
                el = `<input type="checkbox" />`;
                break;
        }

        setElement(el);
    }


    useEffect(() => {
        updateStyle();
    }, [justifyContentElement, alignItemsElement]);


    useEffect(() => {
        updateElementStyle();
    }, [paddingTB, paddingLR, borderRadius, fontSize, element, backgroundColor, fontColor, borderColor, borderSize]);

    const handlerJustifyContent = (value) => {
        setJustifyContentElement(value);
    }


    const handlerAlignItems = (value) => {
        setAlignItemsElement(value);
    }

    const updateStyle = () => {
        setContainerStyle(`display:flex;justify-content:${justifyContentElement};height: 98vh;align-items:${alignItemsElement};`)
    }


    const updateElementStyle = () => {
        setElementSyle(`cursor:${element.includes(`type="text"`) ?
            "text" :
            "pointer"
            };
    padding: ${paddingTB} ${paddingLR}; 
    border-radius: ${borderRadius};
    font-size:${fontSize};
    color:${fontColor};
    background-color:${backgroundColor}; 
    border:${borderSize} solid ${borderColor};`)
    }

    return (
        <div id="container--general">
            <div className="title--app">
                Create Component Syles
            </div>
            <div className="container--action">
                <div>
                    <Display element={element}
                        containerStyle={containerStyle}
                        elementSyle={elementSyle}
                        placeholderColor={placeholderColor}
                        updateCodeElement={updateCodeElement}
                    />
                </div>

                <div>
                    <Control handlerAlignItems={handlerAlignItems}
                        handlerJustifyContent={handlerJustifyContent}
                        setPaddingTB={setPaddingTB}
                        setPaddingLR={setPaddingLR}
                        setBorderRadius={setBorderRadius}
                        handlerChangeElement={handlerChangeElement}
                        element={element} setFontSize={setFontSize}
                        setFontColor={setFontColor}
                        setBackgroundColor={setBackgroundColor}
                        backgroundColor={backgroundColor}
                        fontColor={fontColor}
                        setPlaceholderColor={setPlaceholderColor}
                        placeholderColor={placeholderColor}
                        borderColor={borderColor}
                        setBorderColor={setBorderColor}
                        setBorderSize={setBorderSize} />
                    <button id="generate--code" onClick={getCodeElement}>Generar Codigo</button>
                </div>
            </div>
        </div>
    )
}