import React, { Component } from 'react'
import api from '../api'
import FileBase64 from 'react-file-base64'
import Loader from '../components/Loader'
import styled from 'styled-components'



const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            year: '',
            language: '',
            thumbnail: '',
            video: '',
            loading: false,
            error: ''
        }
    }


    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputYear = async event => {
        const year = event.target.validity.valid
            ? event.target.value
            : this.state.year

        this.setState({ year })
    }

    handleChangeInputLanguage = async event => {
        const language = event.target.value
        this.setState({ language })
    }

    handleIncludeMovie = async () => {
        const { name, year, language, thumbnail, video } = this.state
        const payload = { name, year, language, thumbnail, video }
       
        const textentionStartIndex = thumbnail.indexOf('/');
        const tfiletypeStartIndex = thumbnail.indexOf(':');

        const thumbnailType = thumbnail.substring(tfiletypeStartIndex + 1, textentionStartIndex);
        const vextentionStartIndex = video.indexOf('/');
        const vfiletypeStartIndex = video.indexOf(':');

        const videoType = video.substring(vfiletypeStartIndex + 1, vextentionStartIndex);

        if(!(thumbnailType === 'image')){
            this.setState({
                error: this.state.error + ' thumbnail type is wrong'
            })
            return
        }

        if(!(videoType === 'video')){
            this.setState({
                error: this.state.error + ' video type is wrong'
            })
            return
        }
        this.setState({ loading: true }); 
        await api.insertMovie(payload).then(res => {
            this.setState({ loading: false });
            window.alert(`Movie inserted successfully`);
            window.location.reload();
        })
    }

    render() {
        const { name, year, language, loading, error } = this.state
        return (<div>
    {loading ? <Loader/>:
            (<Wrapper>
                <Title>Create Movie</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Year Of Release: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="9999"
                    pattern="[0-9][0-9[0-9][0-9]"
                    value={year}
                    onChange={this.handleChangeInputYear}
                />

                <Label>Language: </Label>
                <InputText
                    type="text"
                    value={language}
                    onChange={this.handleChangeInputLanguage}
                />

                <Label>Thumbnail:   (Max File Size 4 mb)   :</Label>
                <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => this.setState({ thumbnail: base64 })}
                />

                <Label>Video:   (Max File Size 10 mb) :</Label>
                <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => this.setState({ video: base64 })}
                />

                <Button onClick={this.handleIncludeMovie}>Add Movie</Button>
                <CancelButton href={'/list'}>Cancel</CancelButton>
                <div>{ error }</div>
            </Wrapper>)}
        </div>
        )
    }
}

export default MoviesInsert