import React, { Component } from 'react';
import MainMenu from "../mainMenu/index"

class Header extends Component {
    render() {
      return (
        <>
          <header className="main__header">
            <MainMenu locationClass={'top'} menuLocation={'main-menu'} />
          </header>
        </>
      )
    }
}

export default Header