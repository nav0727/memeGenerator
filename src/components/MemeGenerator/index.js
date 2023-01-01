/* eslint-disable no-unused-vars */
import {Component} from 'react'

import {
  MemeContainer,
  Paragraph,
  BgContainer,
  InputContainer,
  ContainerMain,
  GenerateBtn,
  GenHeading,
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

class MemeGenerate extends Component {
  state = {
    imgUrl: '',
    topInput: '',
    bottomInput: '',
    selectOption: fontSizesOptionsList[0].optionId,
    generate: false,
  }

  onGenerate = event => {
    event.preventDefault()

    const {imgUrl, topInput, bottomInput, selectOption, generate} = this.state
    this.setState({
      imgUrl,
      bottomInput,
      topInput,
      selectOption,
      generate: true,
    })
  }

  onChangeFont = event => {
    this.setState({selectOption: event.target.value})
  }

  changeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topInput: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomInput: event.target.value})
  }

  renderInputs = () => {
    const {imgUrl, topInput, bottomInput, selectOption} = this.state
    return (
      <>
        <form onSubmit={this.onGenerate}>
          <ContainerMain>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              value={imgUrl}
              onChange={this.changeUrl}
              placeholder="Enter the Image URL"
            />
          </ContainerMain>

          <ContainerMain>
            <label htmlFor="topText">Top Text</label>
            <input
              type="text"
              id="topText"
              value={topInput}
              onChange={this.changeTopText}
              placeholder="Enter the Top Text"
            />
          </ContainerMain>

          <ContainerMain>
            <label htmlFor="bottomText">Bottom Text</label>
            <input
              type="text"
              id="bottomText"
              value={bottomInput}
              onChange={this.changeBottomText}
              placeholder="Enter the Bottom Text"
            />
          </ContainerMain>

          <ContainerMain>
            <label htmlFor="select">Font Size</label>
            <select
              id="select"
              value={selectOption}
              onChange={this.onChangeFont}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </ContainerMain>

          <GenerateBtn type="submit">Generate</GenerateBtn>
        </form>
      </>
    )
  }

  renderMeme = () => {
    const {imgUrl, topInput, bottomInput, selectOption} = this.state

    return (
      <>
        <MemeContainer bgImage={imgUrl} data-testid="meme">
          <Paragraph fontSize={selectOption} up="true">
            {topInput}
          </Paragraph>

          <Paragraph fontSize={selectOption}>{bottomInput}</Paragraph>
        </MemeContainer>
      </>
    )
  }

  render() {
    const {generate} = this.state
    return (
      <BgContainer>
        <InputContainer>
          <GenHeading>Meme Generator</GenHeading>
          {this.renderInputs()}
        </InputContainer>
        {generate && this.renderMeme()}
      </BgContainer>
    )
  }
}

export default MemeGenerate
