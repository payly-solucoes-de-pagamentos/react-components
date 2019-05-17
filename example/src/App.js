import React, { Component } from 'react'

import {Modal} from 'payly-components'

export default class App extends Component {
  render () {
    return (
      <div>
        <Modal active ContentComponent={() =>(<p>Testezinho</p>)} />
      </div>
    )
  }
}
