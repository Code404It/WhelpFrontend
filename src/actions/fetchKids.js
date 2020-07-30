export function fetchKids() {
    return (dispatch) => {
    fetch('http://localhost:3000/kids')
    .then(resp => resp.json())
    .then(kids => dispatch({
     type: 'FETCH_KIDS',
     payload: kids
     }))
    }
    }

