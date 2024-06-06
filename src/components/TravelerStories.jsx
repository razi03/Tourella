import React from 'react';
import './TravelerStoriesForm.css';
import DestinationData from "./DestinationData";/
import Destination from './Destination';
import ClientReview from './ClientReview';

function TravelerStoriesForm() {
    return (
        <div className="traveler-stories-form">
            <Destination />
            <ClientReview />
        </div>
    );
}

export default TravelerStoriesForm;
