

import React, { useState } from 'react'
import Smiles from '../smiles';
import './style.scss'
interface Props {
    onChange: (text: string) => void
}
export default function Emoji({ onChange }: Props) {
    const [smiles, setSmiles] = useState(false)
    return (
        <div className='f-emoji'>
            <div onClick={() => setSmiles(!smiles)} className='f-emoji-toggler'>😀</div>
            {smiles && <div className='f-emoji-content'><Smiles onChange={onChange} /></div>}
        </div>
    )
}
