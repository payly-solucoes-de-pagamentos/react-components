import React, { Component } from 'react'
import Modal from './Components/Modal'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
        <Modal active  ContentComponent={false}/>

    )
  }
}
