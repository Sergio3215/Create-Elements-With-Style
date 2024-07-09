"use client"
import React, { useEffect, useState } from 'react'
import CopyBoard from './copyboard';
import "../public/control.css"
export default function Control({ handlerJustifyContent, handlerAlignItems,
    setPaddingLR, setPaddingTB, setBorderRadius, handlerChangeElement, element, setFontSize, setBackgroundColor, setFontColor, fontColor, backgroundColor, setPlaceholderColor, placeholderColor, setBorderColor, borderColor, setBorderSize }) {

    const [options, setOptions] = useState([
        "Button",
        "Input",
        "Input Checkbox",
    ]);

    const [radiusBorder, setRadiusBorder] = useState(0);
    const [paddingT, setPaddingT] = useState(0);
    const [paddingL, setPaddingL] = useState(0);
    const [sizeFont, setsizeFont] = useState(12);
    const [sizeBorder, setsizeBorder] = useState(1);

    useEffect(() => {

        setPaddingT(0);
        setPaddingTB(0 + "%");

        setPaddingLR(0 + "%");
        setPaddingL(0);

        setRadiusBorder(0);
        setBorderRadius(0 + "px");

        handlerJustifyContent("left");

        handlerAlignItems("start");

        setFontSize("12px");
        setsizeFont(12);

        let colorBack = "#ffffff";
        if (element.includes("button")) {
            colorBack = "#f0f0f0";
        }
        setBackgroundColor(colorBack);

        setFontColor("#000000");

    }, [element]);

    const copyToClipboard = (value) => {
        var textField = document.createElement('textarea')
        textField.innerText = value
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <div>
                <label>Select your element</label><br />
                <select onChange={(e) => handlerChangeElement(e.target.value)}>
                    {
                        options.map(op => {
                            return (
                                <option value={op}>{op}</option>
                            )
                        })
                    }
                </select>
            </div>
            <hr />
            <div>
                <label>Select your horizontal element</label><br />
                <button onClick={(e) => {
                    handlerJustifyContent("left");
                }}>left</button>
                <button onClick={(e) => {
                    handlerJustifyContent("center");
                }}>center</button>
                <button onClick={(e) => {
                    handlerJustifyContent("right");
                }}>right</button>
            </div>
            <hr />
            <div>
                <label>Select your vertical element</label><br />
                <button onClick={() => {
                    handlerAlignItems("start");
                }}>top</button>
                <button onClick={() => {
                    handlerAlignItems("center");
                }}>center</button>
                <button onClick={() => {
                    handlerAlignItems("end");
                }}>bottom</button>
            </div>
            {
                (element.includes("button")) ?
                    <>
                        <div>
                            <label>Padding top and bottom element</label><br />
                            <div>
                                <input type="range" min={0} max={100} value={paddingT} step="1" onChange={(e) => {
                                    setPaddingTB(e.target.value + "%");
                                    setPaddingT(parseInt(e.target.value));
                                }} list="cienPorciento" />
                                <input type="number" value={paddingT} min={0} max={100} onChange={(e) => {
                                    if (e.target.value == '') {
                                        e.target.value = '0';
                                    }
                                    setPaddingT(parseInt(e.target.value));
                                    setPaddingTB(e.target.value + "%");
                                }} />
                            </div>
                        </div>
                        <hr />
                    </>
                    :
                    <></>
            }
            {
                element.includes(`type="checkbox"`) ?
                    <></>
                    :
                    <>
                        <div>
                            <label>Padding left and right element</label><br />
                            <div>
                                <input type="range" min={0} max={100} value={paddingL} step="1" onChange={(e) => {
                                    setPaddingLR(e.target.value + "%");
                                    setPaddingL(parseInt(e.target.value));
                                }} list="cienPorciento" />
                                <input type="number" value={paddingL} min={0} max={100} onChange={(e) => {
                                    if (e.target.value == '') {
                                        e.target.value = '0';
                                    }
                                    setPaddingL(parseInt(e.target.value));
                                    setPaddingLR(e.target.value + "%");
                                }} />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Border Radius</label><br />
                            <div>
                                <input type="range" min={0} max={50} value={radiusBorder} step="1" onChange={(e) => {
                                    setRadiusBorder(parseInt(e.target.value));
                                    setBorderRadius(e.target.value + "px");
                                }} list="cincuentaPorciento" />
                                <input type="number" value={radiusBorder} min={0} max={50} onChange={(e) => {
                                    if (e.target.value == '') {
                                        e.target.value = '0';
                                    }
                                    setRadiusBorder(parseInt(e.target.value));
                                    setBorderRadius(e.target.value + "px");
                                }} />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Font Size</label><br />
                            <div>
                                <input type="number" value={sizeFont} min={1} onChange={(e) => {
                                    if (parseInt(e.target.value) < 1) {
                                        e.target.value = "12";
                                    }
                                    setsizeFont(parseInt(e.target.value));

                                    if (e.target.value == "") {
                                        e.target.value = "12";
                                    }
                                    setFontSize(e.target.value + "px");
                                }} /> px
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Background Color</label><br />
                            <div className='withCopyboard'>
                                <input type="color" value={backgroundColor} onChange={(e) => {
                                    setBackgroundColor(e.target.value);
                                }} /> px
                                <CopyBoard handlerClick={() => {
                                    copyToClipboard(backgroundColor);
                                }} />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Border Size</label><br />
                            <div>
                                <input type="range" value={sizeBorder} min={0} onChange={(e) => {
                                    setBorderSize(e.target.value + "px");
                                    setsizeBorder(parseInt(e.target.value));
                                }} list="cienPorciento" /> px
                                <input type="number" value={sizeBorder} min={0} onChange={(e) => {
                                    setsizeBorder(parseInt(e.target.value));
                                    setBorderSize(e.target.value + "px");
                                }} />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Border Color</label><br />
                            <div className='withCopyboard'>
                                <input type="color" value={borderColor} onChange={(e) => {
                                    setBorderColor(e.target.value);
                                }} /> px
                                <CopyBoard handlerClick={() => {
                                    copyToClipboard(fontColor);
                                }} />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <label>Font Color</label><br />
                            <div className='withCopyboard'>
                                <input type="color" value={fontColor} onChange={(e) => {
                                    setFontColor(e.target.value);
                                }} /> px
                                <CopyBoard handlerClick={() => {
                                    copyToClipboard(fontColor);
                                }} />
                            </div>
                        </div>
                    </>
            }
            {
                element.includes(`type="text"`) ?
                    <>
                        <hr />
                        <div>
                            <label>Placeholder Color</label><br />
                            <div className='withCopyboard'>
                                <input type="color" value={placeholderColor} onChange={(e) => {
                                    setPlaceholderColor(e.target.value);
                                }} /> px
                                <CopyBoard handlerClick={() => {
                                    copyToClipboard(fontColor);
                                }} />
                            </div>
                        </div>
                    </>
                    :
                    <></>
            }

            <datalist id="cienPorciento">
                <option value="25"></option>
                <option value="50"></option>
                <option value="75"></option>
                <option value="100"></option>
            </datalist>

            <datalist id="cincuentaPorciento">
                <option value="25"></option>
                <option value="50"></option>
            </datalist>
        </div>
    )
}