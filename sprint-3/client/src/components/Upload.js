import React from 'react'
import axios from 'axios';
import VideoThumb from "../assets/images/Upload-video-preview.jpg"

const api_url = 'http://localhost:8080/videos'

function handleSubmit (event){
    event.preventDefault()

    let newVideo = {
        id: '',
        title: event.target.title.value,
        channel: "Michael",
        description: event.target.descriptionCopy.value,
        image: VideoThumb 
    }

    let type = { 'content-type': 'application/json' }

    axios.post(api_url, newVideo, type)
        .then(response => {

            console.log("new video to add: ",response.data)

        }).catch(err => console.log(err));
    
    
    event.target.reset()
}

export default function Upload () {

        return (

                <main>
                    <div className="upload">
                    <h1 className="upload__title">Upload Video</h1>

                    <section>

                        <div className="upload__image-area">
                            <label>
                                <h5>Video Thumbnail</h5>
                            </label>
                            <img className="upload__thumbnail" src={VideoThumb} alt="video-thumbnail"/>
                        </div>
                    
                       
                        <form className="upload__form" onSubmit={handleSubmit}>  
                            
                                <label>
                                    <h5>Title Your Video</h5>
                                </label>
                                <input className="upload__form--title" type="text" placeholder="Add a title to your video" name="title" required/>
                                
                                <label>
                                    <h5 className="description-heading">Add a Video Description</h5>
                                </label>
                            <textarea className="upload__form--description" placeholder="Add a description of your video" name="descriptionCopy" required></textarea>
                            
                            <div className="upload__buttons">
                                <button className="publish-btn" >Publish</button>
                                <input className="clear-btn" type="reset" value="Clear" />
                            </div>

                        </form>
                        
                    </section>

                    </div>                                       
                </main>
               
           
        )

}
