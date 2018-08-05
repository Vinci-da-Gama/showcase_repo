import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabDairy } from '../../actions';
import { renderCards } from '../../helpers/render-cards';

class DairyProductsCompo extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.grabDairy();
    }

    render () {
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