import React from 'react'
import ListOfPhotoCardsComponent from "../components/ListOfPhotoCards"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import getPhotos from "../graphql/getPhotos.gql"
import { Loading } from './../components/Loader/index';

const GET_PHOTOS = gql`
${getPhotos}`

export const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })
    if (loading) <Loading />
    if (error) return <h1>Error</h1>
    return <ListOfPhotoCardsComponent {...data} />
}
