import React, { memo } from 'react'
import { connect } from 'react-redux'

// Components
import { Row, Col } from 'reactstrap'
import Wrapper from './components/Wrapper'
import Form from './components/Form'

// Actions
import { update as updateImage } from 'actions/image'

const Edit = memo(props => {
  const {
    imageId,
    image,
    updateImage
  } = props

  return <Row>
    <Col xs={{ size: 8, offset: 2 }}>
      <Wrapper>
        <Form
          data={image}
          onSubmit={updateImage}
        />
      </Wrapper>
    </Col>
  </Row>
})

const mapStateToProps = (state, ownProps) => {
  const imageId = ownProps.match.params.imageId
  const foundImage = state.image.items.find(item => item.id === imageId)

  return {
    imageId,
    image: foundImage
  }
}

const mapDispatchToProps = {
  updateImage
}

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Edit)