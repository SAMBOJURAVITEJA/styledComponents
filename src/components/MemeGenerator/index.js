import {Component} from 'react'

import {
  bgContainer,
  formContainer,
  formElement,
  customButton,
  topBottomText,
  imageContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {topText: '', bottomText: '', imageUrl: '', fontSize: ''}

  fontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  topText = event => {
    this.setState({topText: event.target.value})
  }

  bottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  image = event => {
    this.setState({imageUrl: event.target.value})
  }

  Submitting = event => {
    event.preventDefault()
  }

  render() {
    const {topText, bottomText, fontSize, imageUrl} = this.state
    return (
      <bgContainer data-testid="meme">
        <formContainer>
          <formElement>
            <label htmlFor="image">Image URL</label>
            <br />
            <input type="text" id="image" onChange={this.image} />
          </formElement>
          <formElement>
            <label htmlFor="Top Text">Top Text</label>
            <br />
            <input type="text" id="Top Text" onChange={this.topText} />
          </formElement>
          <formElement>
            <label htmlFor="Bottom Text">Bottom Text</label>
            <br />
            <input type="text" id="Bottom Text" onChange={this.bottomText} />
          </formElement>
          <formElement>
            <label htmlFor="Font Size">Font Size</label>
            <br />
            <select id="Font Size" onChange={this.fontSize}>
              {fontSizesOptionsList.map(event => (
                <option id={event.optionId}>{event.displayText}</option>
              ))}
            </select>
          </formElement>
          <formElement>
            <customButton type="button" onSubmit={this.submitting}>
              Generator
            </customButton>
          </formElement>
        </formContainer>
        <imageContainer src={imageUrl}>
          <topBottomText fontSize={fontSize}>{topText}</topBottomText>
          <topBottomText fontSize={fontSize}>{bottomText}</topBottomText>
        </imageContainer>
      </bgContainer>
    )
  }
}

export default MemeGenerator
