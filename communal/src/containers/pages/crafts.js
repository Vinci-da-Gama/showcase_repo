import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabCrafts } from '../../actions';
import { renderCards } from '../../helpers/render-cards';
import Spinner from '../../components/spinner';

class CraftsCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabCrafts();
    }

    render () {
        if(!this.props.crafts || this.props.crafts.length === 0) {
            return (
                <Spinner />
            )
        }
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