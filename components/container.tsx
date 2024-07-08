"use client"
import Control from "./control";
import Display from "./display";
import React, { useEffect, useState } from 'react'
import "../public/container.css"
import "../public/display.css"

export default function Container() {

    const [element, setElement] = useState(`<button>button</button>`);

    const [justifyContentElement, setJustifyContentElement] = useState(`left`);
    const [alignItemsElement, setAlignItemsElement] = useState(`flex-start`);
    const [paddingLR, setPaddingLR] = useState(`0%`);
    const [paddingTB, setPaddingTB] = useState(`0%`);
    const [borderRadius, setBorderRadius] = useState(`0%`);


    const [elementSyle, setElementSyle] = useState(`cursor:pointer;padding: ${paddingTB} ${paddingLR}; border-radius: ${borderRadius}`);

    const [containerStyle, setContainerStyle] = useState(`display:flex;justify-content:${justifyContentElement};height: 98vh;align-items:${alignItemsElement};`);


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
    }, [paddingTB, paddingLR, borderRadius]);

    const handlerJustifyContent = (value) => {
        console.log(value)
        console.log(containerStyle)
        setJustifyContentElement(value);
    }


    const handlerAlignItems = (value) => {
        console.log(value)
        console.log(containerStyle)
        setAlignItemsElement(value);
    }

    const updateStyle = () => {
        setContainerStyle(`display:flex;justify-content:${justifyContentElement};height: 98vh;align-items:${alignItemsElement};`)
    }


    const updateElementStyle = () => {
        setElementSyle(`cursor:pointer; padding: ${paddingTB} ${paddingLR}; border-radius: ${borderRadius}`)
    }

    return (
        <div id="container--general">
            <div className="title--app">
                Create Component Syles
            </div>
            <div className="container--action">
                <div>
                    <Display element={element} containerStyle={containerStyle} elementSyle={elementSyle} />
                </div>

                <div>
                    <Control handlerAlignItems={handlerAlignItems}
                        handlerJustifyContent={handlerJustifyContent}
                        setPaddingTB={setPaddingTB}
                        setPaddingLR={setPaddingLR}
                        setBorderRadius={setBorderRadius}
                        handlerChangeElement={handlerChangeElement}
                        element={element} />
                </div>
            </div>
        </div>
    )
}