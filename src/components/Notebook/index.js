import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MediaCard from 'MediaCard'

const NotebookMediaCard = styled(MediaCard)`
  && {
    width: 160px;
  }
`

export default class Notebook extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

  render() {
    const { title, description } = this.props
    return <NotebookMediaCard title={title}>{description}</NotebookMediaCard>
  }
}
