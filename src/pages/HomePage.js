import React from 'react';
import {LINK} from "../NavMenu";

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <a href={LINK.twitterTweet}>Twitter Feed</a>
        </div>
    )
}