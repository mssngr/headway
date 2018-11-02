import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from 'react-loading'
import MuiBookmark from '@material-ui/icons/Bookmark'

import MediaCard from 'components/MediaCard'

import { colors } from 'common'

/* GRAPHQL */
const getAllNotebooks = gql`
  {
    allNotebooks {
      id
      title
      description
    }
  }
`

/* STYLES */
const NotebooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;

  > *:not(:first-child) {
    margin-left: 3.375rem;
  }
`

const Notebook = styled(MediaCard)`
  && {
    position: relative;
    width: 160px;
    overflow: hidden;
  }
`

const Bookmark = styled(MuiBookmark)`
  && {
    position: absolute;
    top: -10px;
    left: 5px;
    width: 50px;
    height: 50px;
  }
`

const Spacer = styled.div`
  min-height: 1.5rem;
`

/* PRESENTATION */
export default class Notebooks extends React.Component {
  render() {
    return (
      <NotebooksContainer>
        <Query query={getAllNotebooks}>
          {({ loading, error, data }) => {
            if (loading) return <Loading type="bubbles" color={colors.white} />
            if (error) return <p>Couldn't load Notebooks...</p>
            return data.allNotebooks.map(notebook => (
              <Notebook
                key={notebook.id}
                title={notebook.title}
                caption={
                  <Fragment>
                    <Bookmark />
                    <Spacer />
                  </Fragment>
                }
              >
                {notebook.description}
              </Notebook>
            ))
          }}
        </Query>
      </NotebooksContainer>
    )
  }
}
