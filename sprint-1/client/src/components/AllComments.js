import React from 'react'
import Avitar from "../assets/images/Mohan-muruge.jpg";

function AllComments(props){

        return (
            <div className="comments">
                <h4 className="comments__counter">{props.comments.length} Comments</h4>
                <div className="comments-wrapper__form-wrap">
                       
                    <div className="comments-wrapper__image">
                        <img src={Avitar} alt="avitar"/>
                    </div>

                    <NewComments addComment={props.addComment}/>

                </div>

                <CommentsList comments={props.comments}/>

            </div>
        )
}



//Provides form for new comment and adds to list of comments
function NewComments(props) {

    const handleSubmit = event => {
        event.preventDefault()

        let newComment = {
            name: "Annonymous",
            date: "today",
            commentCopy: event.target.commentCopy.value
        }

        props.addComment(newComment)
       
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



// Takes current comment list and provides output for display
function CommentsList(props) {

    const commentList = props.comments.map(comment => {

        return <li key={comment.date} className="comments__list--item">
                    
                    <div className="avitar">
                        <img src={Avitar} alt="avitar" />
                    </div>

                    <div className="details">
                        <div className="details__header">
                            <h4 className="name">{comment.name}</h4>
                            <h4 className="date">{comment.date}</h4>
                            {/* <h4 className="since-posted">' + timeSincePosted(commentObject.timestamp) + '</h4> */}
                        </div>
                        <h4 className="comment-copy">{comment.commentCopy}</h4>
                    </div>

                </li>
    })

    return <ul className="comments__list">{commentList}</ul>
}

export default AllComments;

