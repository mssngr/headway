import React from 'react'
import styled from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import 'minireset.css'
import 'sanitize.css'

import Notebooks from 'screens/Notebooks'

import 'App.css'
import { colors } from 'common'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCOOL_SIMPLE_ENDPOINT,
  fetchOptions: {
    headers: `Bearer ${process.env.REACT_APP_GRAPHCOOL_PERMANENT_AUTH_TOKEN}`,
  },
})

/* STYLES */
const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
  color: ${colors.white};
  background-color: ${colors.blue3};
  overflow: hidden;
`

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-y: scroll;
`

const sidebarWidth = 300

const Sidebar = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  transform: translateX(-50%);
  width: ${sidebarWidth * 2}px;
  height: 300%;
  border-radius: 50%;
  background-color: ${colors.blue2};
  color: ${colors.white};
`

const Menu = styled.div`
  width: ${props => (props.isSidebarOpen ? `${sidebarWidth}px` : 0)};
  height: 100%;
`

const AppScreen = styled.div`
  flex: 1;
  padding: 2rem;
  overflow: scroll;
`

/* PRESENTATION */
export default class App extends React.Component {
  state = {
    isSidebarOpen: true,
  }

  toggleDrawer = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    const { isSidebarOpen } = this.state
    const menu = (
      <div>
        <List>
          <ListItem>All Notes</ListItem>
          <ListItem>Recent Note 1</ListItem>
          <ListItem>Recent Note 2</ListItem>
          <ListItem>Recent Note 3</ListItem>
        </List>
        <List>
          <ListItem>All Notebooks</ListItem>
          <ListItem>Recent Notebook 1</ListItem>
          <ListItem>Recent Notebook 2</ListItem>
          <ListItem>Recent Notebook 3</ListItem>
        </List>
      </div>
    )

    return (
      <ApolloProvider client={client}>
        <AppContainer>
          <Sidebar isOpen={isSidebarOpen} />
          <Menu isSidebarOpen={isSidebarOpen}>{menu}</Menu>
          <AppContent>
            <AppScreen>
              <Notebooks />
            </AppScreen>
          </AppContent>
        </AppContainer>
      </ApolloProvider>
    )
  }
}
