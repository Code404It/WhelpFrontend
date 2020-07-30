import React from 'react'


const Kid = (props) => {

  let kid =props.kids.filter(kid => kid.id.toString() === props.match.params.id)[0]
 
return (

    <div>
      <h2>
        {kid ? kid.name : null} - {kid ? kid.discipline_level : null} - {kid ? kid.image_url : null}
      </h2>
    </div>
  )


}

export default Kid 