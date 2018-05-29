import React from 'react'
import Markdown from 'markdown-to-jsx'

export default class Home extends React.Component {
  state = {
    markdown: '# h1\n\nthis is a test'
  }

  handleChange = e => this.setState({ markdown: e.target.value })

  render() {
    return (
      <div>
        <textarea value={this.state.markdown} onChange={this.handleChange} />
        <div>
          <Markdown>
            {this.state.markdown}
          </Markdown>
        </div>
      </div>
    )
  }
}
