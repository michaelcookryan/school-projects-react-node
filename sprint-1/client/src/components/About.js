import React from 'react'
import Views from "../assets/icons/SVG/Icon-views.svg"
import Likes from "../assets/icons/SVG/Icon-likes.svg"
import AllComments from './AllComments';

class About extends React.Component{

    state = {
    mainVideo: {
            id: '',
            title: 'BMX Rampage: 2018 Highlights',
            description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title',
            channel: 'By Red Cow',
            image: '',
            views: '1,001,023',
            likes: '110,985',
            duration: '',
            video: '',
            timestamp: '12/18/2018',
            comments: [
                {
                    name: 'Theodore Duncan',
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
    }

    addComment = comment => {
        
        let addedToList = this.state.mainVideo.comments
        addedToList.unshift(comment)
            this.setState({
                comments: addedToList
            })
    }
  
    render(){

    return (
        <div className="about">
            
            <div className="about__header">
                <h1 className="about__title">{this.state.mainVideo.title}</h1>
                <div className="about__subtitle">
                    <div className="about__subtitle--left">
                        <h4 className="channel">{this.state.mainVideo.channel}</h4>
                        <h4 className="date">{this.state.mainVideo.timestamp}</h4>
                    </div>
                    <div className="about__subtitle--right">
                        <div className="views">
                            <img src={Views} alt="views-icon"/><span>{this.state.mainVideo.views}</span>
                        </div>
                        <div className="likes">
                            <img src={Likes} alt="likes-icon" /><span>{this.state.mainVideo.likes}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__body">
                <h4 className="about__body--copy">
                    {this.state.mainVideo.description}
                </h4>
            </div>

            <AllComments comments={this.state.mainVideo.comments} addComment={this.addComment}/>

        </div>
    )
    }
   
}

export default About