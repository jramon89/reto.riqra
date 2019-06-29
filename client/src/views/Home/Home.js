import React, { Component } from 'react';
import HomeComponent from '../../components/Home/Home';

class Home extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        const { } = this.props;
        return(
            <div>
               <HomeComponent/>
            </div>
        );
    }

}

export default Home;