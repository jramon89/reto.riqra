import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';


const deleteCommentMutation = gql`
     mutation($id: ID!){
        deleteComment(id: $id){
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

class CommentsList extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        data: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    render() {
        const { data } = this.props;
        const comments = data.comments ? data.comments.map((value, index) => {
            return (
                <li key={ index }>
                    <div>
                        { value.content }
                    </div>
                    <div>
                        <a href="#" onClick={ (e) => this.deleteComment(e,value.id) }>
                            Eliminar
                        </a>
                    </div>
                </li>
            );
        }) : 'Loading...';

        return(
            <ul>
                { comments }
            </ul>
        );
    }

    deleteComment(e, id) {
        const { deleteCommentMutation } = this.props;
        e.preventDefault;
        deleteCommentMutation({
            variables: {
                id,
            },
            refetchQueries:[{
                query: getComments
            }]
        })

    }
}
export default compose(
    graphql(getComments),
    graphql(deleteCommentMutation,{name:"deleteCommentMutation"})
)(CommentsList);
