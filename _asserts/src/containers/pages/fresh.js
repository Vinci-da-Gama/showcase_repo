import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabFresh } from '../../actions';
import { renderCards } from '../../helpers/render-cards';

class FreshCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabFresh();
    }

    render () {
        return (
            <div className="row mx-3">
                {this.props.fresh.map(renderCards)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('26 -- state.fresh: ', state.fresh);
    return {
        fresh: state.fresh.fresh
    }
};

export default connect(mapStateToProps, {grabFresh})(FreshCompo);
