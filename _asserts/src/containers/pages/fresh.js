import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabFresh } from '../../actions';
import { renderCards } from '../../helpers/render-cards';
import Spinner from '../../components/spinner';

class FreshCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabFresh();
    }

    render () {
        if(!this.props.fresh || this.props.fresh.length === 0) {
            return (
                <Spinner />
            )
        }
        return (
            <div className="row mx-3">
                {this.props.fresh.map(renderCards)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fresh: state.fresh.fresh
    }
};

export default connect(mapStateToProps, {grabFresh})(FreshCompo);
