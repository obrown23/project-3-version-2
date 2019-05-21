import React, {Component} from 'react'
// import {Link} from 'react-router-dom'



// export default 
class EditFilmmakers extends Component {
  render(){
    return(
      <div>
        <p>
        Welcome to Edit Filmmakers 
        </p>
      </div>
    )
  }
  state = {
      filmmakers: [],
      newFilmmaker: {
          name: '',
          description: '',
          website:'',
          questions:'',
          comments: '',
          email: '',
          goal: '',
      },
      
  }

  
}

export default EditFilmmakers