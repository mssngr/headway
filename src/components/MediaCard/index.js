import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MuiPaper from '@material-ui/core/Paper'
import Ellipsis from 'react-lines-ellipsis'

import { Caption } from 'components/Text'

import { colors } from 'common'

/* STYLES */
const Container = styled(MuiPaper)`
  && {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 220px;
    border-radius: 10px;
    background-color: ${colors.blue2};
    padding: 1.5rem;
  }
`

const ContentContainer = styled.div`
  flex: 1;
`

/* PRESENTATION */
export default class MediaCard extends React.Component {
  static propTypes = {
    caption: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { caption, title, className, children } = this.props
    return (
      <Container className={className}>
        {caption && typeof caption === 'string' ? (
          <Caption>{caption}</Caption>
        ) : (
          caption
        )}
        {title && <h4>{title}</h4>}
        {children && (
          <ContentContainer>
            {typeof children === 'string' ? (
              <Ellipsis
                text={children}
                maxLine={caption ? 5 : 6}
                ellipsis="..."
                component="p"
                trimRight
              />
            ) : (
              children
            )}
          </ContentContainer>
        )}
      </Container>
    )
  }
}
