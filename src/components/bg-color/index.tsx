import React, { useState } from 'react'
import './style.scss';

interface Props {
    onChange: (color: string) => void
}

export default function BgColor({
    onChange
}: Props) {
    const [colorListOn, setColorListOn] = useState(false)
    const [color, setColor] = useState('')
    const onChangeColor = (color: string) => {
        setColor(color)
        onChange(color)
    }
    const colors = [
        '#f44336',
        '#e91e63',
        '#9c27b0',
        '#673ab7',
        '#3f51b5',
        '#2196f3',
        '#03a9f4',
        '#00bcd4'];
    const resetColor = () => {
        setColor('')
        onChange('')
        setColorListOn(false)
    }
    return (
        <div className='f-bg-color'>
            {colorListOn ? (
                <div className='f-bg-color-list'>
                    <div onClick={resetColor} className={`f-bg-color-item f-bg-color-item-back`}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z" fill="#030D45" />
                        </svg>
                    </div>
                    {colors.map((itr, index) => {
                        return (
                            <div key={index} onClick={() => onChangeColor(itr)} className={`f-bg-color-item ${color === itr && 'f-bg-color-item-active'}`}
                                style={{ backgroundColor: itr }}></div>
                        )
                    })}
                </div>
            ) : (<div className='f-bg-color-toggle' onClick={() => setColorListOn(!colorListOn)}>
                Aa
            </div>)}
        </div>
    )
}
