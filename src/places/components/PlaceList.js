import React from "react";

import Card from '../../shared/components/UIElements/Card'
import './PlaceList.css'
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
    if(props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>장소가 없습니다. 새로 추가하시겠어요?</h2>
                    <button>+</button>
                </Card>
            </div>
        );
    }

    return <ul className="place-list">
        {props.items.map(place => <PlaceItem 
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
        />)}
    </ul>
};

export default PlaceList;