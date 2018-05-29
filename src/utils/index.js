import React from 'react'
import { withStyles } from '@material-ui/core/styles'

export const styledMui = Component => (style, options) => {
  const StyledComponent = props => <Component {...props} />
  const styles =
    typeof style === 'function' ? theme => ({ ...style(theme) }) : { ...style }
  return withStyles(styles, options)(StyledComponent)
}
