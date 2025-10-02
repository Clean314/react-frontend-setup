import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from '../../places/components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'N서울타워',
        description: '서울특별시 용산구 남산에 있는 송신탑이자 서울을 대표하는 랜드마크',
        imageUrl: 'https://i.namu.wiki/i/DK-BcaE6wDCM-N9UJbeQTn0SD9eWgsX9YKWK827rqjbrzDz0-CxW-JFOCiAsUL3CBZ4zE0UDR-p4sLaYPiUjww.webp',
        address: '서울 용산구 남산공원길 105',
        location: {
            lat: 37,
            lng: 127
        },
        creator: 'u1'
    },
        {
        id: 'p2',
        title: 'N서울타워',
        description: '서울특별시 용산구 남산에 있는 송신탑이자 서울을 대표하는 랜드마크',
        imageUrl: 'https://i.namu.wiki/i/DK-BcaE6wDCM-N9UJbeQTn0SD9eWgsX9YKWK827rqjbrzDz0-CxW-JFOCiAsUL3CBZ4zE0UDR-p4sLaYPiUjww.webp',
        address: '서울 용산구 남산공원길 105',
        location: {
            lat: 37,
            lng: 127
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = 
        DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces}/>
    );
}

export default UserPlaces;