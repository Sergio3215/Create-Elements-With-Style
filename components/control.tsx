"use client"
import React, { useEffect, useState } from 'react'
export default function Control({ handlerJustifyContent, handlerAlignItems,
    setPaddingLR, setPaddingTB, setBorderRadius, handlerChangeElement, element }) {

    const [options, setOptions] = useState([
        "Button",
        "Input",
        "Input Checkbox",
    ]);

    const [radiusBorder, setRadiusBorder] = useState(0);
    const [paddingT, setPaddingT] = useState(0);
    const [paddingL, setPaddingL] = useState(0);

    useEffect(()=>{
        
        setPaddingT(0);
        setPaddingTB(0 + "%");
        
        setPaddingLR(0+ "%");
        setPaddingL(0);
        
        setRadiusBorder(0);
        setBorderRadius(0 + "px");
        
        handlerJustifyContent("left");
        
        handlerAlignItems("start");
    }, [element])

    return (
        <>
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
                            <label>Select your padding top and bottom element</label><br />
                            <div>
                                <input type="range" min={0} max={100} defaultValue={0} value={paddingT} onChange={(e) => {
                                    setPaddingTB(e.target.value + "%");
                                    setPaddingT(parseInt(e.target.value));
                                }} />
                                <input type="number" value={paddingT} min={0} max={100} onChange={(e) => {
                                    if (e.target.value == '') {
                                        e.target.value = '0';
                                    }
                                    setPaddingT(parseInt(e.target.value));
                                    setPaddingTB(e.target.value + "%");
                                }} />
                            </div>
                        </div>
                    </>
                    :
                    <></>
            }
            <div>
                <label>Select your padding left and right element</label><br />
                <div>
                    <input type="range" min={0} max={100} defaultValue={0} value={paddingL} onChange={(e) => {
                        setPaddingLR(e.target.value + "%");
                        setPaddingL(parseInt(e.target.value));
                    }} />
                    <input type="number" value={paddingL} min={0} max={100} onChange={(e) => {
                        if (e.target.value == '') {
                            e.target.value = '0';
                        }
                        setPaddingL(parseInt(e.target.value));
                        setPaddingLR(e.target.value + "%");
                    }} />
                </div>
            </div>
            <div>
                <label>Select your border radius element</label><br />
                <div>
                    <input type="range" min={0} max={50} defaultValue={0} value={radiusBorder} onChange={(e) => {
                        setRadiusBorder(parseInt(e.target.value));
                        setBorderRadius(e.target.value + "px");
                    }} />
                    <input type="number" value={radiusBorder} min={0} max={50} onChange={(e) => {
                        if (e.target.value == '') {
                            e.target.value = '0';
                        }
                        setRadiusBorder(parseInt(e.target.value));
                        setBorderRadius(e.target.value + "px");
                    }} />
                </div>
            </div>
        </>
    )
}