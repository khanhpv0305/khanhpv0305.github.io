import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Components
import { Container, Row, Col } from 'reactstrap'

// Actions
import { search } from 'actions/image'

const Layout = props => {
  const {
    children,
    hasData,
    search,
    isLoading
  } = props

  useEffect(() => {
    if (!hasData) {
      search({
        keyword: '""'
      })
    }
  }, [])

  if (isLoading) return null

  return <Container fluid>
    <Row>
      <Col xs={12}>
        {children}
      </Col>
    </Row>
  </Container>
}

const mapStateToProps = state => ({
  isLoading: state.image.isLoading,
  hasData: state.image.hasData
})

const mapDispatchToProps = {
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)