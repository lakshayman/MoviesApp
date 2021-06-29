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
            },
            {
                Header: 'Name',
                accessor: 'name',
                width: 500
            },
            {
                Header: 'Language',
                accessor: 'language',
                width: 400
            },
            {
                Header: 'Year Of Realease',
                accessor: 'year',
                width: 200
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
            
           </Wrapper>
        )
    }
}

export default MoviesList