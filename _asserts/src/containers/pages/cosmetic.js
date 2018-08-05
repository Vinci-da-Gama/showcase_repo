import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabCosmetic } from '../../actions';
import { renderCards } from '../../helpers/render-cards';

class CosmeticCompo extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.grabCosmetic();
    }

    render () {
        return (
            <div className="row mx-3">
                {this.props.cosmetic.map(renderCards)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cosmetic: state.cosmetic.cosmetic
});

export default connect(mapStateToProps, {grabCosmetic})(CosmeticCompo);