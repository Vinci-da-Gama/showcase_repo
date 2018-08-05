import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabPastry } from '../../actions';
import { renderCards } from '../../helpers/render-cards';

class PastryCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabPastry();
    }

    render () {
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