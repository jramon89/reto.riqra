import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentsList from '../CommentsList/CommentsList';
import CommentsArea from '../CommentsArea/CommentsArea';

class Home extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        data: PropTypes.object,
    };

    constructor(props){
        super(props);

    }



    render() {
        return(
            <div className="container">
                 <div className="content">
                     <CommentsArea/>
                     <div className="msg-list">
                         <ComponentsList/>
                     </div>
                 </div>
            </div>
        );
    }
}

export default Home;