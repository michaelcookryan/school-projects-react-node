import React, { Component } from 'react'
import VideoThumb from "../assets/images/Upload-video-preview.jpg"
export default class Upload extends Component {
    render() {
        return (

                <main>
                    <div className="upload">
                    <h1 className="upload__title">Upload Video</h1>
                    <section>
                        <div className="upload__image-area">
                            <label>
                                <h5>Video Thumbnail</h5>
                            </label>
                            <img className="upload__thumbnail" src={VideoThumb} />
                        </div>
                    
                       
                    <form className="upload__form">                       
                            <label>
                                <h5>Title Your Video</h5>
                            </label>
                            <input className="upload__form--title" type="text" placeholder="Add a title to your video" required/>
                            
                            <label>
                                <h5 className="description-heading">Add a Video Description</h5>
                            </label>
                            <textarea className="upload__form--description" placeholder="Add a description of your video" name="descriptionCopy" required></textarea>
                            
                            {/* <div className="upload__form--buttons">
                                <button className="publish-btn">Publish</button>
                                <label>
                                    <h5 className="clear-btn">Clear</h5>
                                </label>
                            </div> */}
                            
                    </form>
                    </section>
                    <div className="upload__buttons">
                        <button className="publish-btn">Publish</button>
                        <label>
                            <h5 className="clear-btn">Clear</h5>
                        </label>
                    </div>
                    </div>                                       
                </main>
               
           
        )
    }
}
