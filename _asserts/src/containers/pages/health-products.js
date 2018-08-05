import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabHealth } from '../../actions';
import { renderCards } from '../../helpers/render-cards';

class HealthProductsCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabHealth();
    }

    render () {
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