import React from 'react'
import Avitar from "../assets/images/Mohan-muruge.jpg";
import axios from 'axios';
// const api_url = 'https://project-2-api.herokuapp.com/videos';
// const my_key = '?api_key=4f6764a2-4a25-45a8-90b7-d7e52c6890f8'; 
const api_url = 'http://localhost:8080/videos/';

function AllComments({currentVideoId, comments, makeDateReadable, addComment}){
console.log("all comments: ",comments)
        return (
            <div className="comments">
                <h4 className="comments__counter">{comments.length} Comments</h4>
                <div className="comments-wrapper__form-wrap">
                       
                    <div className="comments-wrapper__image">
                        <img src={Avitar} alt="avitar"/>
                    </div>

                    <NewComments
                        currentVideoId={currentVideoId}
                        addComment={addComment}
                    />

                </div>

                <CommentsList 
                    comments={comments} 
                    makeDateReadable={makeDateReadable}
                />

            </div>
        )
}



// Add new comment to current video comment list
function NewComments({currentVideoId, addComment}) {

    const handleSubmit = event => {
        event.preventDefault()

        let newComment = {
            name: "Annonymous",
            comment: event.target.commentCopy.value
        }

        let type = { 'content-type': 'application/json' }

        // axios.post(api_url + `/${currentVideoId}/comments` + my_key, newComment, type)
        axios.post(api_url + `/${currentVideoId}/comments`, newComment, type)
            .then(response => {

                addComment(response.data, currentVideoId) 

            }).catch(err => console.log(err));
        

        event.target.reset()
     
    }

    return (
        <form className="comments__form" onSubmit={handleSubmit}>
            <label className="comment-label">
                <h5>Join the conversation</h5>
            </label>
            <textarea placeholder="Add a new comment" name="commentCopy" required></textarea>
            <button className="comments__form--button">Comment</button>
        </form>
    )
}



// Takes current comment list and provides output for display with newest first
function CommentsList({ comments, makeDateReadable }) {

    let ascendingList = comments.sort((commentOne, commentTwo) => {
        return commentTwo.timestamp - commentOne.timestamp
    })

    const commentList = ascendingList.map(comment => {

        return <li key={comment.id} className="comments__list--item">
                    
                    <div className="avitar">
                        <img src={Avitar} alt="avitar" />
                    </div>

                    <div className="details">
                        <div className="details__header">
                            <h4 className="name">{comment.name}</h4>
                    <h4 className="date">{makeDateReadable(comment.timestamp)}</h4>
                    <h4 className="since-posted">{timeSincePosted(comment.timestamp)}</h4>
                        </div>
                        <h4 className="comment-copy">{comment.comment}</h4>
                    </div>

                </li>
    })

    return <ul className="comments__list">{commentList}</ul>
}



function timeSincePosted(timePosted) {

    let current = new Date()
    let timeSince = Math.floor((current.getTime() - timePosted)) / 1000 //seconds

    switch (true) {

        case timeSince >= 60 && timeSince < 3600:
            return Math.round(timeSince / 60) + ' minutes ago'

        case timeSince >= 3600 && timeSince < 86400:
            return Math.round(timeSince / 3600) + ' hours ago';

        case timeSince >= 86400 && timeSince < 2629743:
            return Math.round(timeSince / 86400) + ' days ago';

        case timeSince >= 2629743:
            return Math.round(timeSince / 2629743) + ' months ago';            
        
        default:
            return 'Now';
            
    }
}


export default AllComments;

