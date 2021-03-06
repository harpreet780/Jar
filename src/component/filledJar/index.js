import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';
import "./style.css";
const Jar = () => {
    const [selected, setSelected] = useState(0);
    const Hanldedate = (e) => {
            if (e.target.value <= 100) {
                setSelected(Number(e.target.value));
            }
    }
    const jarHeight = 400;
    const jarwidth = 400;
    const num = 10;
    const spanHeight = jarHeight / num
    const spanWidth = jarwidth / num
    return (
        <div className="jarWrapper">
            <p className="perText">
                {selected >= 100 ? '100%' :
                    `${selected}%`}
            </p>
            <div className="filledJar">
                <img
                    style={{ width: `${jarwidth}px`, height: `${jarHeight}px` }}
                    src="./images/jar-pic.svg"
                    alt="jar"
                    className="jarImg" />
                <div className="priceData">
                    {selected ?
                        <>
                            {Array(selected)?.fill(null)?.map(() => {
                                return (
                                        <span
                                            className='price'
                                            style={{ width:`${spanWidth}px`, height: `${spanHeight}px` }}
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
            <input
                className="inputField"
                type="number"
                name="text"
                placeholder="Enter amount"
                value={selected >= 100 ? 100 : selected}
                onChange={(e) => Hanldedate(e)}
            />
        </div>
    );
};

export default Jar;