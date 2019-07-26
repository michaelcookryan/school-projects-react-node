import React from 'react'
import Avitar from "../assets/images/Mohan-muruge.jpg";

export default function Comments() {



    return (
        <div className="comments">
            {/* <h1 className="comments__titles">Join the Conversation</h1> */}
            <div className="comments__wrapper">
                <div className="comments__wrapper--form-wrap">
                    <div className="comments__wrapper--image">
                        <img src={Avitar} /></div>

                    <form className="comments__form">
                        {/* <lable className="input-lable">
                            <h5>Name</h5>
                        </lable>
                        <input type="text" name="name" required /> */}

                        <lable className="input-lable">
                            <h5>Join the conversation</h5>
                        </lable>
                        <textarea placeholder="Add a new comment" name="commentCopy" required></textarea>

                        <button className="comments__form--button">Comment</button>
                    </form>

                </div>
                <ul className="comments__list"></ul>
            </div>
        </div>
    )
}
