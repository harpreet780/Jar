import React, { useState } from 'react';
import "./style.css"
const BorderJar = () => {
    const [selected, setSelected] = useState(0);
    const Hanldedate = (e) => {
        if (e.target.value <= 100) {
            setSelected(Number(e.target.value));
        }
        else {
            alert('Not more than 100');
        }
    }
    const jarHeight = 400;
    const jarwidth = 400;
    const num = 10;
    const spanHeight = jarHeight / num
    const spanWidth = jarwidth / num
    return (
        <>
            <div className="wrapper">
                <p className="perText">
                    {selected >= 100 ? '100%' :
                        `${selected}%`}
                </p>
                <div>
                    <div className="jarCap"></div>
                    <div className="jarbox" style={{ width: `${jarwidth}px`, height: `${jarHeight}px` }}>
                        <div className="jarWrap">
                            {selected ?
                                <>
                                    {Array(selected)?.fill(null)?.map(() => {
                                        return (
                                            <span
                                                className='price'
                                                style={{ width: `${spanWidth}px`, height: `${spanHeight}px` }}
                                            >
                                                $
                                            </span>
                                        )
                                    })}
                                </>
                                : null
                            }
                        </div>
                    </div>
                </div>
                <input
                    className="inputField"
                    type="number"
                    name="text"
                    placeholder="Enter amount"
                    value={selected >= 100 ? 100 : selected}
                    onChange={(e) => Hanldedate(e)}
                />
            </div>
        </>
    );
};

export default BorderJar;