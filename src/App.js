import React from 'react'
import styled from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import MuiAppBar from '@material-ui/core/AppBar'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiDrawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuIcon from '@material-ui/icons/Menu'
import 'normalize.css'

import Notebooks from 'screens/Notebooks'

import 'App.css'
import { colors } from 'common'
import logo from 'assets/images/headwayLogo.svg'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCOOL_SIMPLE_ENDPOINT,
  fetchOptions: {
    headers: `Bearer ${process.env.REACT_APP_GRAPHCOOL_PERMANENT_AUTH_TOKEN}`,
  },
})

/* STYLES */
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
  color: ${colors.white};
`

const AppBar = styled(props => <MuiAppBar {...props} />)`
  && {
    background-color: ${colors.gray3};
    z-index: 1201;
  }
`

const Toolbar = styled(props => <MuiToolbar {...props} />)``

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

// prettier-ignore
const AppDrawer = styled(({isDrawerOpen, ...props}) => <MuiDrawer classes={{ paper: 'paper' }} {...props} />)`
  && {
    margin-left: ${props => props.isDrawerOpen ? 0 : '-240px'};
    transition-property: margin-left;
    transition-duration: 250ms;
  }

  & .paper {
    position: relative;
    width: 240px;
    height: 100%;
    background-color: ${colors.gray3};
    color: ${colors.white};
  }
`

const AppScreen = styled.div`
  flex: 1;
  padding: 2rem;
  overflow: scroll;
  background-color: ${colors.gray1};
`

/* PRESENTATION */
export default class App extends React.Component {
  state = {
    isDrawerOpen: true,
  }

  toggleDrawer = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen })
  }

  render() {
    const { isDrawerOpen } = this.state
    const drawer = (
      <div>
        <List>
          <ListItem>List</ListItem>
        </List>
      </div>
    )

    return (
      <ApolloProvider client={client}>
        <AppContainer>
          <AppBar position="static" elevation={4}>
            <Toolbar>
              <IconButton
                onClick={this.toggleDrawer}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <img style={{ marginLeft: '1rem' }} src={logo} />
            </Toolbar>
          </AppBar>
          <AppContent>
            <AppDrawer isDrawerOpen={isDrawerOpen} variant="permanent" open>
              {drawer}
            </AppDrawer>
            <AppScreen>
              <Notebooks />
            </AppScreen>
          </AppContent>
        </AppContainer>
      </ApolloProvider>
    )
  }
}
