import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";




// export default 
class EditInventors extends Component {
    state = {
        filmmaker: {
            name: '',
            description: '',
            website: '',
            questions: '',
            comments: '',
            email: '',
            goal: ''
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get(`/api/inventors/${this.props.match.params.id}`).then(res => {
            this.setState({ inventor: res.data })
        })
    }

    deleteInventor = () => {
        axios.delete(`/api/filmmaker/${this.props.match.params.id}`).then(res => {
            this.setState({ redirectToHome: true })
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleChange = (e) => {
        const cloneFilmmaker = { ...this.state.filmmaker }
        cloneFilmmaker[e.target.name] = e.target.value
        this.setState({ filmmaker: cloneFilmmaker })
    }

    updateFilmmaker = (e) => {
        e.preventDefault()
        console.log('submit clicked')
        axios
            .put(`/api/filmmakers/${this.props.match.params.id}`, {
                name: this.state.filmmaker.name,
                description: this.state.filmmaker.description
            })
            .then(res => {
                this.setState({ filmmaker: res.data, isEditFormDisplayed: false })
            })
    }

    render() {
        console.log(this.state)
        if (this.state.redirectToHome) {
            return (<Redirect to="/" />)
        }

        return (
            <div>
                <h1>Film</h1>
                <div>
                    <div>
                        Film Name: {this.state.filmmaker.name}
                    </div>
                    <div>
                        Description: {this.state.filmmaker.description}
                    </div>
                    <div>
                        Website: {this.state.filmmaker.website}
                    </div>
                    <div>
                        Questions: {this.state.filmmaker.questions}
                    </div>
                    <div>
                        Comments: {this.state.filmmaker.comments}
                    </div>
                    <div>
                        Email: {this.state.filmmaker.email}
                    </div>
                    <div>
                        Goal: {this.state.filmmaker.goal}
                    </div>
                    <button onClick={this.deletefilmmaker}>Delete</button>
                </div>

                <form onSubmit={this.updateFilmmaker}>

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
                    <input type="submit" value="update filmmaker"/>
                </form>
            </div>
        );
    }
}

export default EditInventors