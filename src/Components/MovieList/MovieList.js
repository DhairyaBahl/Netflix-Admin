import React from 'react';
import './MovieList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';

class MovieList extends React.Component {
    render() {

        const columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'User', headerName: 'User', renderCell:(cellValues)=>{
                return (
                    <div className="movie__list__movie">
                        <img className = "movie__list__img" src = {cellValues.row.img} alt = {cellValues.row.name}/>
                        {cellValues.row.name}
                    </div>
                )
            }, width: 200 },
            {
              field: 'trailer',
              headerName: 'Trailer',
              renderCell: (cellValues) => <div className = {"status " + cellValues.row.status} />,
              width: 120,
            },
            {
                field: 'action',
                headerName: 'Action',
                renderCell: (cellValues) => 
                <>
                    {/* <Link className = "movie__edit__link" to={`/movie/${cellValues.row.id}`} >
                        <Add className = "movie__edit"/>
                    </Link> */}
                    <DeleteOutline className = "movie__delete"/>
                </>,
                width: 120,
            }
          ];
          
          const rows = [
            { id: 1, name: 'Money Heist', status:"NotActive", img:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif"},
            { id: 2, name: 'Cars 1', status:"NotActive",img:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif"},
            { id: 3, name: 'John Wick 3', status:"NotActive",img:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif"},
            { id: 4, name: 'Lucifer', status:"NotActive",img:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif"},
            { id: 5, name: 'Dark', status:"NotActive",img:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif"},
          ];

        return (
            <div className = "movie__list">
                <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </div>
        )
    }
}

export default MovieList;