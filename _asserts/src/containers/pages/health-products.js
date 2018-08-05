import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabHealth } from '../../actions';
import { renderCards } from '../../helpers/render-cards';
import Spinner from '../../components/spinner';

class HealthProductsCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabHealth();
    }

    render () {
        if(!this.props.health || this.props.health.length === 0) {
            return (
                <Spinner />
            )
        }
        return (
            <div className="row mx-3">
                {this.props.health.map(renderCards)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    health: state.health.health
});

export default connect(mapStateToProps, {grabHealth})(HealthProductsCompo);