import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Components
import ImageCard from '../styled'
import { FaRegHeart, FaHeart, FaTrashAlt, FaPen } from 'react-icons/fa'

// Actions
import { markAsFavorite, removeFavorite, remove } from 'actions/image'

const ActionBtns = props => {
  const {
    id,
    isFavorite,
    markAsFavorite,
    removeFavorite,
    remove
  } = props

  const editUrl = `/edit/${id}`

  // Event handlers
  const handleMarkImageAsFavorite = useCallback(() => markAsFavorite(id), [])
  const handleRemoveFavorite = useCallback(() => removeFavorite(id), [])
  const handleRemoveImage = useCallback(() => remove(id), [])

  return <ImageCard.ActionBtnsWrapper>
    {isFavorite
      ? <ImageCard.ActionBtn onClick={handleRemoveFavorite} {...{ isFavorite }}>
        <FaHeart />
      </ImageCard.ActionBtn>
      : <ImageCard.ActionBtn onClick={handleMarkImageAsFavorite}>
        <FaRegHeart />
      </ImageCard.ActionBtn>
    }

    <ImageCard.ActionBtn onClick={handleRemoveImage}>
      <FaTrashAlt />
    </ImageCard.ActionBtn>

    <ImageCard.ActionBtn
      as={Link}
      to={editUrl}
      state={{ modal: true }}
    >
      <FaPen />
    </ImageCard.ActionBtn>
  </ImageCard.ActionBtnsWrapper>
}

const mapDispatchToProps = {
  markAsFavorite,
  removeFavorite,
  remove
}

export default connect(null, mapDispatchToProps)(ActionBtns)