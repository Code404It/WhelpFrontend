export const newKid = (kid, history) => {
    
       return (dispatch) => {
         fetch('http://localhost:3000/kids', {
           headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
           },
           method: 'POST',
           body: JSON.stringify(kid)
         })
         .then(response => response.json())
         .then(kid => {
           dispatch({type: 'ADD_KID', payload: kid})
           history.push(`/kids/${kid.id}`)
         })
       }
    
     }