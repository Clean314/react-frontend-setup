import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH
} from'../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hooks';
import './PlaceForm.css';

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true
      },
      description: {
        value: identifiedPlace.description,
        isValid: true
      }
    },
    true
  );

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="제목"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="제목을 입력하세요."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="설명"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="5자 이상의 설명을 입력하세요."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        장소 수정
      </Button>
    </form>
  );
};

export default UpdatePlace;