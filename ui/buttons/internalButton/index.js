import React, { Component } from 'react';
import Link from 'next/link'


class InternalButton extends Component {
  render() {
    return (
      <>
        <button>
            <Link href={this.props.buttonLink}>
                <a>
                    {this.props.buttonText}
                </a>
            </Link>
        </button>
        
      </>
    )
  }
}
export default InternalButton