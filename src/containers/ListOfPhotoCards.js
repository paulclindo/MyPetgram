import React from 'react'
import ListOfPhotoCardsComponent from "../components/ListOfPhotoCards"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import getPhotos from "../graphql/getPhotos.gql"
import { Loading } from './../components/Loader/index';

const GET_PHOTOS = gql`
${getPhotos}`

export const ListOfPhotoCards = () => {
    const { loading, error, data } = useQuery(GET_PHOTOS)
    console.log(data, "desde gql")
    loading && <Loading />
    return <ListOfPhotoCardsComponent {...data} />
}
