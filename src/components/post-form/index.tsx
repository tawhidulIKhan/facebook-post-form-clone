import React, { useState } from 'react'
import BgColor from '../bg-color';
import Emoji from '../emoji';
import "./style.scss";

export default function PostForm() {
    const [color, setColor] = useState('');
    const [text, setText] = useState('');
    const [placeholder, setPlaceholder] = useState("What's on your mind, Jhon?");
    const onChangeHandler = (ev: any) => {
        ev.target.innerText ? setPlaceholder("") : setPlaceholder("What's on your mind, Jhon?");
        setText(ev.target.innerText);
    }
    const onEmojiChange = (emoji: string) => {
        const editor: any = document.querySelector("#editor");
        text ? setPlaceholder("") : setPlaceholder("What's on your mind, Jhon?");
        editor.innerHTML += emoji;
    }
    return (
        <div className='f-form f-form-modal'>
            <div className='f-form-modal-content'>
                <div className='f-form-modal-header'>
                    <h2>Create post</h2>
                    <span className='f-form-modal-close'>&times;</span>
                    <div className='f-form-intro'>
                        <div className='f-form-intro-avatar'>
                            <img src='https://via.placeholder.com/150' alt='placeholder' />
                        </div>
                        <div className='f-form-intro-left'>
                            <h3 className='f-form-intro-name'>John Doe</h3>
                            <div className='f-form-intro-privacy'>Only me</div>
                        </div>
                    </div>

                </div>
                <div className='f-form-modal-body'>
                    <div style={{ background: color }} className='f-form-input-color'>
                        <div className='f-form-input'>
                            <div
                                className={`f-form-editor ${color && 'f-form-editor-with-color'}`}
                                id="editor"
                                onInput={onChangeHandler}
                                role="textbox" contentEditable="true"
                                placeholder={placeholder}
                                aria-placeholder="5-digit zipcode"
                                aria-labelledby="txtboxLabel"
                            ></div>
                        </div>
                        <div className='f-form-color-emo'>
                            <BgColor onChange={(color: string) => setColor(color)} />
                            <Emoji onChange={onEmojiChange} />
                        </div>
                    </div>
                </div>
                <div className='f-form-modal-footer'>
                    <div className='f-form-modal-footer-extra'>
                        Add To your Post
                    </div>
                    <button className='f-form-modal-btn f-form-modal-btn-post'>Post</button>
                </div>
            </div>
        </div>
    )
}
