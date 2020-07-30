export const newReview = (review, kidId, history) => {
    
    
     return (dispatch) => {
         fetch(`http://localhost:3000/kids/${kidId}/reviews`, {
          method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
          },
           
           body: JSON.stringify(review)
         })
         .then(response => response.json())
         .then(kid => {
           dispatch({type: 'ADD_REVIEW', payload: kid})
           history.push(`/kids/${kidId}`)
         })
       }
    
     }