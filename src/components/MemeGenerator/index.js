import {Component} from 'react'

import {
  BgContainer,
  FormContainer,
  FormElement,
  CustomButton,
  TopBottomText,
  ImageContainer,
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
  state = {
    topTextInput: '',
    bottomTextInput: '',
    imageUrlInput: '',
    fontSizeInput: '',
    topText: '',
    bottomText: '',
    imageUrl: '',
    fontSize: fontSizesOptionsList[0].displayText,
  }

  fontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  topText = event => {
    this.setState({topTextInput: event.target.value})
  }

  bottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  image = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  submitting = event => {
    event.preventDefault()
    console.log('submitting')

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      fontSize: fontSizeInput,
      imageUrl: imageUrlInput,
      bottomText: bottomTextInput,
      topText: topTextInput,
    })
  }

  render() {
    const {topText, bottomText, fontSize, imageUrl} = this.state
    return (
      <BgContainer data-testid="meme">
        <FormContainer>
          <FormElement>
            <label htmlFor="image">Image URL</label>
            <br />
            <input type="text" id="image" onChange={this.image} />
          </FormElement>
          <FormElement>
            <label htmlFor="Top Text">Top Text</label>
            <br />
            <input type="text" id="Top Text" onChange={this.topText} />
          </FormElement>
          <FormElement>
            <label htmlFor="Bottom Text">Bottom Text</label>
            <br />
            <input type="text" id="Bottom Text" onChange={this.bottomText} />
          </FormElement>
          <FormElement>
            <label htmlFor="Font Size">Font Size</label>
            <br />
            <select id="Font Size" onChange={this.fontSize}>
              {fontSizesOptionsList.map(event => (
                <option value={event.displayText} key={event.optionId}>
                  {event.displayText}
                </option>
              ))}
            </select>
          </FormElement>
          <CustomButton type="submit" onSubmit={this.submitting}>
            Generator
          </CustomButton>
        </FormContainer>
        <ImageContainer src={imageUrl}>
          <TopBottomText fontSize={fontSize}>{topText}</TopBottomText>
          <TopBottomText fontSize={fontSize}>{bottomText}</TopBottomText>
        </ImageContainer>
      </BgContainer>
    )
  }
}

export default MemeGenerator
