import "../public/copyboard.css"
export default function CopyBoard({handlerClick}) {

    const Styled = {
        cls1: {
            fill: "#fff",
            stroke: "#231f20",
            strokeMiterLimit: "10px",
            strokeWidth: "2px"
        },
        cls2: {
            fill: "#231f20",
            strokeWidth: "0px"
        }
    }

    return (
        <div className="copyboard" onClick={handlerClick}>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.58 59.88" style={{
                width: "35px",
                height: "35px"
            }}>
                <defs>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <rect style={Styled.cls1} x=".5" y="2.01" width="22.89" height="34.78" rx="3.1" ry="3.1" />
                    <rect style={Styled.cls1} x="10" y=".5" width="24.94" height="38.88" rx="3.1" ry="3.1" />
                </g>
            </svg>
        </div>
    )
}