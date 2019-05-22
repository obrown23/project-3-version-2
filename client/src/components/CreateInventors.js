import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class CreateInventors extends Component {
    state = {
        Inventors: [],
        newInventor: {
            name: '',
            description: '',
            website: '',
            questions: '',
            comments: '',
            email: '',
            goal: ''
        },
        isInventorFromDisplayed: false
    }

    componentDidMount = () => {
        axios.get('/api/inventors').then(res => {
            this.setState({ inventors: res.data })
        })
    }

    toggleInventorForm = () => {
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