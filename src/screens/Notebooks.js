import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from 'react-loading'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import IconNotebook from 'components/Icon/Notebook2'

import { colors } from 'common'

/* QUERIES */
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
  align-items: center;
`

const NotebookContainer = styled.div`
  position: relative;

  & + & {
    margin-left: 4rem;
  }
`

const NotebookImage = styled(IconNotebook)`
  height: 300px;
`

const NotebookContent = styled(CardContent)`
  && {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1rem 1rem 0 3rem;
  }
`

const NotebookText = styled(Typography)`
  && {
    color: ${colors.gray10};
  }
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
              <NotebookContainer>
                <NotebookImage />
                <NotebookContent>
                  <NotebookText gutterBottom variant="headline" component="h2">
                    {notebook.title}
                  </NotebookText>
                  <NotebookText component="p">
                    {notebook.description}
                  </NotebookText>
                </NotebookContent>
              </NotebookContainer>
            ))
          }}
        </Query>
      </NotebooksContainer>
    )
  }
}
