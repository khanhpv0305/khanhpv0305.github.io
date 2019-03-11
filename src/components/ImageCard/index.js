import React from 'react'

// Componenst
import ImageCard from './styled'

// Containers
import ActionBtns from './containers/ActionBtns'

export default props => {
  const {
    id,
    thumbnailUrl,
    photographer,
    dateCreated,
    title,
    descr,
    isFavorite
  } = props

  return <ImageCard>
    <ImageCard.ThumbnailWrapper>
      <ImageCard.Thumbnail src={thumbnailUrl} />
    </ImageCard.ThumbnailWrapper>

    <ImageCard.PhotographerAndDateCreated>
      <ImageCard.Photographer>{photographer}</ImageCard.Photographer>

      <ImageCard.DateCreated>{dateCreated}</ImageCard.DateCreated>
    </ImageCard.PhotographerAndDateCreated>

    <ImageCard.Title>{title}</ImageCard.Title>

    <ImageCard.Descr>{descr}</ImageCard.Descr>

    <ActionBtns {...{ id, isFavorite }} />
  </ImageCard>
}