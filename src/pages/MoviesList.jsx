import React, { Component } from 'react'
import api from '../api'
import Loader from '../components/Loader'
import ReactPlayer from 'react-player'
import ReactTable from 'react-table-6'
import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Footer = styled.footer`
    text-align: center;
    margin-top: 2rem
`;

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false
            })
        })

        
    }

    render() {
        const { movies, isLoading } = this.state
        const columns = [
            {
                Header: 'Video',
                accessor: 'video',
                Cell: function(props) {
                    return (
                        <span>
                            <ReactPlayer className="videoFrame activator" url={props.value} light={props.original.thumbnail} playing controls />
                        </span>
                    )
                },
                width: 700
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Language',
                accessor: 'language',
            },
            {
                Header: 'Year Of Realease',
                accessor: 'year',
            },
        ]
        let showTable = true
        if (!movies.length) {
            showTable = false
            
        }
        return (
            <Wrapper>
                {isLoading ? <Loader/> : 
                showTable && (
                    <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
                <Footer>
                <a href="https://github.com/lakshayman/MoviesApp/tree/master" target="_blank">Repository Link</a>
                </Footer>
           </Wrapper>
        )
    }
}

export default MoviesList