import React from 'react'
import Avitar from "../assets/images/Mohan-muruge.jpg";

class AllComments extends React.Component {

    state = {
        comments : [
            {
            name:'Theodore Duncan',
            date: '11/15/2018',
            commentCopy: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!'
            },

            {
            name: 'Gary Wong',
            date: '12/12/2018',
            commentCopy: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
            },

            {
            name: 'Michael Lyons',
            date: '12/18/2018',
            commentCopy: 'They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
            }
        ]
    } 



addComment = comment =>{
    let addedToList = this.state.comments
    addedToList.unshift(comment)

        this.setState({
            comments: addedToList
        })
}


    render(){
        return (
            <div className="comments">
                <div className="comments-wrapper__form-wrap">
                        <div className="comments-wrapper__image">
                            <img src={Avitar} alt="avitar"/>
                        </div>

                        <NewComments addComment={this.addComment}/>

                    </div>

                <CommentsList comments={this.state.comments}/>
                
            </div>
        )
    }
}


function NewComments(props) {
    const handleSubmit = event => {
        event.preventDefault()

        let newComment = {
            name: "Annonymous",
            date: "today",
            commentCopy: event.target.commentCopy.value
        }
        props.addComment(newComment)
       
        event.target.reset();

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

function CommentsList(props) {
    const commentList = props.comments.map(comment => {
        return <li className="comments__list--item">
                    <div className="avitar">
                        <img src={Avitar} alt="avitar" />
                    </div>
                    <div className="details">
                        <div className="details__header">
                            <h4 className="name">{comment.name}</h4>
                            <h4 className="date">{comment.date}</h4>
                            {/* <h4 className="since-posted">' + timeSincePosted(commentObject.timestamp) + '</h4> */}
                </div></div>
                        <h4 className="comment-copy">{comment.commentCopy}</h4>
                </li>;
    });
    return <ul className="comments__list">{commentList}</ul>;
}

export default AllComments;

