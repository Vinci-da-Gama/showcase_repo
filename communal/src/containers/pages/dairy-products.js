import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabDairy } from '../../actions';
import { renderCards } from '../../helpers/render-cards';
import Spinner from '../../components/spinner';

class DairyProductsCompo extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.grabDairy();
    }

    render () {
        if(!this.props.dairy || this.props.dairy.length === 0) {
            return (
                <Spinner />
            )
        }
        return (
            <div className="row mx-3">
                {this.props.dairy.map(renderCards)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dairy: state.dairy.dairy
})

export default connect(mapStateToProps, {grabDairy})(DairyProductsCompo);