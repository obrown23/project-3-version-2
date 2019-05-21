import React, { Component } from 'react'
// import {Link} from 'react-router-dom'



// export default 
class FilmmakersList extends Component {
  render(){
    return(
      <div>
        <p>
        Welcome to Filmmakers List
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
      }
      
  }

  
}

export default FilmmakersList