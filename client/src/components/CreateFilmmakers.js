import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class CreateFilmmakers extends Component {
    state = {
        filmmakers: [],
        newFilmmaker: {
            name: '',
            description: '',
            website: '',
            questions: '',
            comments: '',
            email: '',
            goal: ''
        },
        isFilmmakerFromDisplayed: false
    }

    componentDidMount = () => {
        axios.get('/api/filmmakers').then(res => {
            this.setState({ filmmakers: res.data })
        })
    }

    toggleFilmmakerForm = () => {
        this.setState((state, props) => {
            return ({ isFilmmakerFormDisplayed: !state.isFilmmakerFormDisplayed })
        })
    }
    handleChange = (e) => {
        const cloneNewFilmmaker = { ...this.state.newFilmmaker }
        cloneNewFilmmaker[e.target.name] = e.target.value
        this.setState({ newFilmmaker: cloneNewFilmmaker }, () => { console.log(this.state.newFilmmaker) })
    }

    createFilmmaker = (e) => {
        e.preventDefault()
        console.log(this.state.newFilmmaker.name)
        axios
            .post('/api/filmmakers', {
                name: this.state.newFilmmaker.name,
                description: this.state.newFilmmaker.description
            })
            .then(res => {
                const filmmakersList = [...this.state.filmmakers]
                filmmakersList.unshift(res.data)
                this.setState({
                    newFilmmaker: {
                        name: '',
                        description: '',
                        website: '',
                        questions: '',
                        comments: '',
                        email: '',
                        goal: ''
                    },
                    isFilmmakerFormDisplayed: false,
                    filmmakers: filmmakersList
                })
            })

    }

    render() {
        return (
            <div>
                <h1>Films</h1>
                {
                    this.state.filmmakers.map(filmmaker => {
                        return (
                            <div key={filmmaker._id}>
                                <Link
                                    to={`/filmmakers/${filmmaker._id}`}
                                >
                                    {filmmaker.name}
                                </Link>
                            </div>
                        )
                    })
                }
                <button onClick={this.toggleFilmmakerForm}>+ New Film</button>
                {
                    this.state.isFilmmakerFormDisplayed
                        ? <form onSubmit={this.onSubmit}>

                            <div className="formInfo">
                                <label>Name:</label>
                                <input type='text'
                                    className="formOption"
                                    value={this.state.filmmaker_name}
                                    onChange={this.onChangeFilmmakerName} />
                            </div>
                            <div className="formInfo">
                                <label>Description:</label>
                                <input type='text'
                                    className="formOption"
                                    value={this.state.filmmaker_description}
                                    onChange={this.onChangeFilmmakerDescription} />
                            </div>
                            <div className="formInfo">
                                <label>Website:</label>
                                <input type='text'
                                    className="formOption"
                                    value={this.state.filmmaker_website}
                                    onChange={this.onChangeFilmmakerWebsite} />
                            </div>
                            <div className="formInfo">
                                <label>Questions:</label>
                                <input type='text'
                                    className="formOption"
                                    value={this.state.filmmaker_questions}
                                    onChange={this.onChangeFilmmakerQuestions} />
                            </div>
                            <div className="formInfo">
                                <label>Comments:</label>
                                <input type='text'
                                    className="formOption"
                                    value={this.state.filmmaker_comments}
                                    onChange={this.onChangeFilmmakerComments} />
                            </div>
                            <div className="formInfo">
                                <label>Email:</label>
                                <input type='text'
                                    className="formOption"
                                    value={this.state.filmmaker_email}
                                    onChange={this.onChangeFilmmakerEmail} />
                            </div>

                            <label htmlFor="name">Phone</label>
                            <input type="text"
                                className="form-control"
                                name="phone"
                                onChange={this.handleChange} />
                            <div className="form-group">
                                <label htmlFor="name">Specialty</label>
                                <input type="text"
                                    className="form-control"
                                    name="specialty"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="formInfo">
                                <label>Goal:</label>
                                <input type='text'
                                    className="formOption"
                                    value={this.state.filmmaker_goal}
                                    onChange={this.onChangeFilmmakerGoal} />
                            </div>

                            <button>Create</button>
                        </form>
                        : null
                }
            </div>
        )
    }
}
export default CreateFilmmakers








// class CreateFilmmakers extends Component {
//     constructor(props) {
//       super(props);

//   this.onChangeFilmmakerName = this.onChangeFilmmakerName.bind(this);
//   this.onChangeFilmmakerDescription = this.onChangeFilmmakerDescription.bind(this);
//   this.onChangeFilmmakerWebsite = this.onChangeFilmmakerWebsite.bind(this);
//   this.onChangeFilmmakerQuestions = this.onChangeFilmmakerQuestions.bind(this);
//   this.onChangeFilmmakerComments = this.onChangeFilmmakerComments.bind(this);
//   this.onChangeFilmmakerEmail = this.onChangeFilmmakerEmail.bind(this);
//   this.onChangeFilmmakerGoal = this.onChangeFilmmakerGoal.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);

//   this.state = {
//       filmmaker_name: '',
//       filmmaker_description: '',
//       filmmaker_website: '',
//       filmmaker_questions: '',
//       filmmaker_comments: '',
//       filmmaker_email: '',
//       filmmaker_goal: '',
//   }
//     }
//   // function to update filmmakers list
//   onChangeFilmmakerName(e) {
//     this.setState({
//       filmmaker_name: e.target.value
//     });
//   }
//   onChangeFilmmakerDescription(e) {
//     this.setState({
//       filmmaker_description: e.target.value
//     });
//   }
//   onChangeFilmmakerWebsite(e) {
//     this.setState({
//       filmmaker_website: e.target.value
//     });
//   }
//   onChangeFilmmakerQuestions(e) {
//     this.setState({
//       filmmaker_questions: e.target.value
//     });
//   }
//   onChangeFilmmakerComments(e) {
//     this.setState({
//       filmmaker_comments: e.target.value
//     });
//   }
//   onChangeFilmmakerEmail(e) {
//     this.setState({
//       filmmaker_email: e.target.value
//     });
//   }
//   onChangeFilmmakerGoal(e) {
//     this.setState({
//       filmmaker_goal: e.target.value
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     console.log(`Form Submitted`);
//     console.log(`Filmmaker name: ${this.state.filmmaker_name}`);
//     console.log(`Filmmaker description: ${this.state.filmmaker_description}`);
//     console.log(`Filmmaker website: ${this.state.filmmaker_website}`);
//     console.log(`Filmmaker questions: ${this.state.filmmaker_questions}`);
//     console.log(`Filmmaker comments: ${this.state.filmmaker_comments}`);
//     console.log(`Filmmaker email: ${this.state.filmmaker_email}`);
//     console.log(`Filmmaker goal: ${this.state.filmmaker_goal}`);

//     const newFilmmakers ={
//       filmmaker_name: this.state.filmmaker_name,
//       filmmaker_description: this.state.filmmaker_description,
//       filmmaker_website: this.state.filmmaker_website,
//       filmmaker_questions: this.state.filmmaker_questions,
//       filmmaker_comments: this.state.filmmaker_comments,
//       filmmaker_email: this.state.filmmaker_email,
//       filmmaker_goal: this.state.filmmaker_goal,
//     }
//   axios.post('http://localhost:3001/', newFilmmakers )
//   .then(res => console.log(res.data));

//     this.setState({
//       filmmaker_name: '',
//       filmmaker_description: '',
//       filmmaker_website: '',
//       filmmaker_questions: '',
//       filmmaker_comments: '',
//       filmmaker_email: '',
//       filmmaker_goal: '',

//     });

//   }


//   render() {
//     return (
//       <div style={{ marginTop: 30 }}>
//         <h2>
//           Welcome, Create Your Filmmaker Profile!!
//           </h2>
//         <form onSubmit={this.onSubmit}>
//           <div className="formInfo">
//             <label>Name:</label>
//             <input type='text'
//               className="formOption"
//               value={this.state.filmmaker_name}
//               onChange={this.onChangeFilmmakerName} />
//           </div>

//           <div className="formInfo">
//             <label>Description:</label>
//             <input type='text'
//               className="formOption"
//               value={this.state.filmmaker_description}
//               onChange={this.onChangeFilmmakerDescription} />
//           </div>


//           <div className="formInfo">
//             <label>Website:</label>
//             <input type='text'
//               className="formOption"
//               value={this.state.filmmaker_website}
//               onChange={this.onChangeFilmmakerWebsite} />
//           </div>

//           <div className="formInfo">
//             <label>Questions:</label>
//             <input type='text'
//               className="formOption"
//               value={this.state.filmmaker_questions}
//               onChange={this.onChangeFilmmakerQuestions} />
//           </div>

//           <div className="formInfo">
//             <label>Comments:</label>
//             <input type='text'
//               className="formOption"
//               value={this.state.filmmaker_comments}
//               onChange={this.onChangeFilmmakerComments} />
//           </div>

//           <div className="formInfo">
//             <label>Email:</label>
//             <input type='text'
//               className="formOption"
//               value={this.state.filmmaker_email}
//               onChange={this.onChangeFilmmakerEmail} />
//           </div>


//           <div className="formInfo">
//             <label>Goal:</label>
//             <input type='text'
//               className="formOption"
//               value={this.state.filmmaker_goal}
//               onChange={this.onChangeFilmmakerGoal} />
//           </div>

//           <div className="formButton"> <input type="submit" value="Create Film Profile" className="btn btn-primary"/>
//           </div>
//         </form>
//       </div>
//     )
//   }
//   }
//   export default CreateFilmmakers


