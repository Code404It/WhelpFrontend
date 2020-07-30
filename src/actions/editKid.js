export const editKid = (kid) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/kids/${kid.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(kid)
      })
      .then(response => response.json())
      .then(kid => dispatch({type: 'EDIT_KID', payload: kid}))
    }
  
  }