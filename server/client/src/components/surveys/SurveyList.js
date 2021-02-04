import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import axios from 'axios';



class SurveyList extends Component {
    // grab the surveys when component mounts.
    componentDidMount() {
        this.props.fetchSurveys();
    }

    handleDelete = async (e) => {
      await axios.delete(`/api/delete-survey/${e.target.dataset.item}`);
      this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
          return (
            <div className="card blue-grey darken-1" key={survey._id}>
              <div className="card-content white-text">
                  <span className="card-title">{survey.title}</span>
                  <p>
                    {survey.body}
                  </p>
                  <p className="right">
                    Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
              </div>
              <div className="card-action">
                <a>Yes: {survey.yes}</a>
                <a>No: {survey.no}</a>
                <a data-item={survey._id} onClick={this.handleDelete} className="waves-effect waves-light btn">delete</a>
              </div>
            </div>
          )
        })
      }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

// surveys destructuring from state.surveys
function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);