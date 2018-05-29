import React from 'react'
import styled from 'styled-components'
import MuiDrawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import MuiDivider from '@material-ui/core/Divider'
import 'normalize.css'

import Home from 'screens/Home'

import { styledMui } from 'utils'
import 'App.css'

/* STYLES */
const AppContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  width: 100%;
  background-color: #212121;
  color: white;
  overflow: hidden;
`

const AppDrawer = styledMui(MuiDrawer)(
  theme => ({
    paper: {
      width: 240,
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
  }),
  { name: 'AppDrawer' }
)

const DrawerDivider = styledMui(MuiDivider)({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
})

/* PRESENTATION */
export default class App extends React.Component {
  state = {
    isMobileOpen: false,
  }

  toggleDrawer = () => {
    this.setState({ isMobileOpen: !this.state.isMobileOpen })
  }

  render() {
    const drawer = (
      <div>
        <List>List</List>
        <DrawerDivider />
        <List>Other List</List>
      </div>
    )

    return (
      <AppContainer>
        <Hidden mdUp>
          <button onClick={this.toggleDrawer}>Click Me</button>
          <AppDrawer
            open={this.state.isMobileOpen}
            onClose={this.toggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}
            >
              {drawer}
            </div>
          </AppDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <AppDrawer variant="permanent" open>
            {drawer}
          </AppDrawer>
        </Hidden>
        <Home />
      </AppContainer>
    )
  }
}
