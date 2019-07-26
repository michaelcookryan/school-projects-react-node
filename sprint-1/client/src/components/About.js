import React from 'react'
import Views from "../assets/icons/SVG/Icon-views.svg"
import Likes from "../assets/icons/SVG/Icon-likes.svg"
import Comments from './Comments';

export default function About() {
    return (
        <div className="about">
            <div className="about__header">
                <h1 className="about__title">BMX Rampage: 2018 Highlights</h1>
                <div className="about__subtitle">
                    <div className="about__subtitle--left">
                        <h4 className="author">By Red Cow</h4>
                        <h4 className="date">12/18/2018</h4>
                    </div>
                    <div className="about__subtitle--right">
                        <div className="views">
                            <img src={Views}/><span>1,001,023</span>
                        </div>
                        <div className="likes">
                            <img src={Likes} /><span>110,985</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__body">
                <h4 className="about__body--copy">
                    On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title
                </h4>
            </div>
            <Comments/>
        </div>
    )
}
