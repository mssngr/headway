import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const GET_NOTE = gql`
  {
    Note(id: "cjhww26txg1nf01830h7xvk43") {
      text
    }
  }
`

const UPDATE_NOTE = gql`
  mutation updateNote($text: String!) {
    updateNote(id: "cjhww26txg1nf01830h7xvk43", text: $text) {
      id
      text
    }
  }
`

export default class Home extends React.Component {
  render() {
    let input
    return (
      <Query query={GET_NOTE}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error)
            return (
              <p>
                Error :(
                <br />
                <br />
                {error.message}
              </p>
            )
          const { Note } = data
          return (
            <Mutation
              mutation={UPDATE_NOTE}
              update={(cache, { data: { updateNote } }) => {
                cache.writeQuery({
                  query: GET_NOTE,
                  data: { Note: updateNote },
                })
              }}
            >
              {updateNote => (
                <div>
                  <div>
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                        updateNote({ variables: { text: input.value } })
                      }}
                    >
                      <input
                        ref={node => {
                          input = node
                        }}
                      />
                      <button type="submit">Update Note</button>
                    </form>
                  </div>
                  <div>
                    <Markdown>{Note.text}</Markdown>
                  </div>
                </div>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}
