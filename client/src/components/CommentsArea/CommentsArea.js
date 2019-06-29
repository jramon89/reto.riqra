import React, { Component } from 'react';


import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';

const addCommentMutation = gql`
    mutation($content: String!){
        addComment(content: $content){
            content
        }
    }
`;

const getComments = gql`{
    comments{
        content,
        id
    }
}`;

class CommentsArea extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };


        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return(
            <div className="msg-text-field">
                <form action="#" onSubmit={(e) => this.onSubmit(e)}>
                    <textarea name="" id="" cols="30" rows="10"
                              value={ this.state.value }
                              onChange={ this.onChange }
                              ref="comment"
                              placeholder="Comenta algo!!!">
                    </textarea>
                    <button>Enviar comentario</button>
                </form>
            </div>
        );
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { addCommentMutation } = this.props;
        addCommentMutation({
            variables: {
                content: this.state.value
            },
            refetchQueries:[{query: getComments }]
        });
        this.setState({
            value: ''
        })
    }
}
export default compose(
    graphql(addCommentMutation,{name: "addCommentMutation"})
)(CommentsArea)

