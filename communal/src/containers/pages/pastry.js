import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabPastry } from '../../actions';
import { renderCards } from '../../helpers/render-cards';
import Spinner from '../../components/spinner';

class PastryCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabPastry();
    }

    render () {
        if(!this.props.pastry || this.props.pastry.length === 0) {
            return (
                <Spinner />
            )
        }
        return (
            <div className="row mx-3">
                {this.props.pastry.map(renderCards)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pastry: state.pastry.pastry
});

export default connect(mapStateToProps, {grabPastry})(PastryCompo);