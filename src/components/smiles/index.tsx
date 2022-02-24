import React from 'react'
import './style.scss';
interface Props {
    onChange: (text: string) => void
}
export default function Smiles({ onChange }: Props) {
    const facebook = {
        '😀': '1f600',
        '😁': '1f601',
        '😂': '1f602',
        '😃': '1f603',
        '😄': '1f604',
        '😅': '1f605',
        '😆': '1f606',
        '😉': '1f609',
        '😊': '1f60a',
        '😋': '1f60b',
        '😎': '1f60e',
        '😍': '1f60d',
        '😘': '1f618',
        '😗': '1f617',
        '😙': '1f61a',
        '😚': '1f61b',
        '☺': '263a',
        '😇': '1f607',
        '😐': '1f610',
        '😑': '1f611',
        '😶': '1f636',

    };

    return (
        <div className='f-smiles'>
            {
                Object.keys(facebook).map((key, index) => {
                    return (
                        <div onClick={() => onChange(key)} className='f-smile' key={index}>
                            {key}
                        </div>
                    )
                })
            }
        </div>
    )
}
