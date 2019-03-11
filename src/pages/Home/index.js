import React from 'react'
import { connect } from 'react-redux'

// Components
import ImageCard from 'components/ImageCard'
import { Row, Col } from 'reactstrap'
import Wrapper from './components/Wrapper'
import ImageListWrapper from 'components/ImageListWrapper'
import Filter from 'containers/Filter'

// Selectors
import { itemsSelector } from 'selectors/image'

const Home = props => {
  const {
    images
  } = props

  return <Wrapper>
    <Row>
      {/* <Col xs={3}>
        <Filter />
      </Col> */}

      <Col xs={12}>
        <ImageListWrapper>
          <Row>
            {images.map(image => <Col key={image.id} md={4}>
              <ImageCard {...image} />
            </Col>)}
          </Row>
        </ImageListWrapper>
      </Col>
    </Row>
  </Wrapper>
}

const mapStateToProps = state => ({
  images: itemsSelector(state)
})

export default connect(mapStateToProps)(Home)