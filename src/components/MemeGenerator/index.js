import {Component} from 'react'

import {
  BgContainer,
  FormsContainer,
  MemeHeading,
  FormsAndMeme,
  TextLabel,
  TextInput,
  InputAndLabelDiv,
  SelectOptions,
  SubmitButton,
  MemeVIewContainer,
} from './styledComponents.js'

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
    onSubmit: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    selectedFontSize: fontSizesOptionsList[0].optionId,
    img: '',
    top: '',
    bottom: '',
    font: '',
  }

  onSubmitToGenerateMeme = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, selectedFontSize} = this.state

    this.setState({
      onSubmit: true,
      img: imageUrl,
      top: topText,
      bottom: bottomText,
      font: fontSizesOptionsList,
    })
  }

  onChangeInputImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({selectedFontSize: event.target.value})
  }

  renderMemeView = () => {
    return (
      <MemeVIewContainer
        data-testid="meme"
        fontSize={this.state.selectedFontSize}
        bgImage={this.state.img}
      >
        <p>{this.state.top}</p>
        <p>{this.state.bottom}</p>
      </MemeVIewContainer>
    )
  }

  render() {
    const {onSubmit, imageUrl, topText, bottomText, selectedFontSize} =
      this.state

    return (
      <BgContainer>
        <MemeHeading>Meme Generator</MemeHeading>
        <FormsAndMeme>
          <FormsContainer onSubmit={this.onSubmitToGenerateMeme}>
            <InputAndLabelDiv>
              <TextLabel htmlFor="image" value={imageUrl}>
                Image URL
              </TextLabel>
              <TextInput
                id="image"
                onChange={this.onChangeInputImageUrl}
                type="text"
              />
            </InputAndLabelDiv>
            <InputAndLabelDiv>
              <TextLabel htmlFor="toptext" value={topText}>
                Top Text
              </TextLabel>
              <TextInput
                id="toptext"
                onChange={this.onChangeTopText}
                type="text"
              />
            </InputAndLabelDiv>
            <InputAndLabelDiv>
              <TextLabel htmlFor="bottomtext" value={bottomText}>
                Bottom Text
              </TextLabel>
              <TextInput
                id="bottomtext"
                onChange={this.onChangeBottomText}
                type="text"
              />
            </InputAndLabelDiv>
            <InputAndLabelDiv>
              <TextLabel htmlFor="fontsize">Font Size</TextLabel>
              <SelectOptions
                id="fontsize"
                value={selectedFontSize}
                onChange={this.onChangeSelectOption}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId} vlaue={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </SelectOptions>
            </InputAndLabelDiv>
            <SubmitButton type="submit">Generate</SubmitButton>
          </FormsContainer>
          {onSubmit && this.renderMemeView()}
        </FormsAndMeme>
      </BgContainer>
    )
  }
}

export default MemeGenerator
