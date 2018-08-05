import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabCrafts } from '../../actions';
import { renderCards } from '../../helpers/render-cards';

class CraftsCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabCrafts();
    }

    render () {
        return (
            <div className="row mx-3">
                {this.props.crafts.map(renderCards)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    crafts: state.crafts.crafts
});

export default connect(mapStateToProps, {grabCrafts})(CraftsCompo);