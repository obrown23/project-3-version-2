import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";




// export default 
class EditFilmmakers extends Component {
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
        isEditFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get(`/api/${this.props.match.params.id}`).then(res => {
            this.setState({ filmmakers: res.data })
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleChange = (e) => {
        const cloneNewFilmmaker = { ...this.state.newFilmmaker }
        cloneNewFilmmaker[e.target.name] = e.target.value
        this.setState({ newFilmmaker: cloneNewFilmmaker })
    }

    createFilmmaker = (e) => {
        e.preventDefault()
        console.log(this.state.newFilmmaker.name)
        axios
            .post(`/api/${this.props.match.params.id}`, {
                name: this.state.newFilmmaker.name,
                description: this.state.newFilmmaker.description,
                website: this.state.newFilmmaker.website,
                questions: this.state.newFilmmaker.questions,
                comments: this.state.newFilmmaker.comments,
                email: this.state.newFilmmaker.email,
                goal: this.state.newFilmmaker.goal,
            })
            .then(res => {
                const editFilmmakersList = [...this.state.filmmakers]
                editFilmmakersList.unshift(res.data)
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
                    isEditFormDisplayed: false,
                    filmmakers: editFilmmakersList

                })
            })
    }

    render() {
        return (
            <div>
                <h1>Filmmakers</h1>
                {
                    this.state.filmmakers.map(filmmaker => {
                        return (
                            <div key={filmmaker._id}>
                                <Link
                                    to={`/${filmmaker._id}`}
                                >
                                    {filmmaker.name}
                                </Link>
                            </div>
                        )
                    })
                }
                <button onClick={this.toggleEditForm}> New Filmmaker</button>
                {
                    this.state.isEditFormDisplayed

                        ? <form onSubmit={this.updateFilmmaker}>

                            <div className="form-Command">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                    name="name"
                                    className="form-control"
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-Command">
                                <label htmlFor="name">Description</label>
                                <input type="text"
                                    name="description"
                                    className="form-counter"
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-Command">
                                <label htmlFor="name">Website</label>
                                <input type="text"
                                    className="form-counter"
                                    name="website"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-Command">
                                <label htmlFor="name">Questions</label>
                                <input type="text"
                                    className="form-counter"
                                    name="questions"
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-Command">
                                <label htmlFor="name">Comments</label>
                                <input type="text"
                                    className="form-counter"
                                    name="comments"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-Command">
                                <label htmlFor="name">Email</label>
                                <input type="text"
                                    className="form-counter"
                                    name="email"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-Command">
                                <label htmlFor="name">Goal</label>
                                <input type="text"
                                    className="form-counter"
                                    name="goal"
                                    onChange={this.handleChange} />
                            </div>
                            <button>Create</button>
                        </form>
                        : null

                }
            </div>
        )
    }
}

export default EditFilmmakers