import styled from 'styled-components'
import is, { isNot } from 'styled-is'

const ImageCard = styled.div`
  margin-bottom: 30px;
  background: rgba(0, 0, 0, 0.05);
  padding: 0 15px 15px;
`

ImageCard.ThumbnailWrapper = styled.div`
  position: relative;
  padding-top: 60%;
  overflow: hidden;
  margin: 0 -15px 1rem;
`

ImageCard.Thumbnail = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
`

ImageCard.PhotographerAndDateCreated = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

ImageCard.Photographer = styled.span``

ImageCard.DateCreated = styled.span``

ImageCard.Title = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
`

ImageCard.Descr = styled.div`
  display: -webkit-box;
  line-height: 1.5rem;
  height: 4.5rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.5rem;
`

ImageCard.ActionBtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

ImageCard.ActionBtn = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 1px solid #cecccc;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;
  background: white;

  &:not(:last-child) {
    margin-right: 12px;
  }

  > svg {
    color: #cecccc;
    font-size: 1.25em;

    ${is('isFavorite')`
      color: red;
    `}
  }

  &:hover {
    border-color: #b0acac;
    
    ${isNot('isFavorite')`
      > svg {
        color: #b0acac;
      }
    `}
  }
`

export default ImageCard