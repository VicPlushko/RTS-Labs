import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown from 'react-dropdown'


class PreviousSearches extends Component {

    

    render() {
        console.log("previous search state is", this.props)

        const options = this.props.prevSearch.map((search) => search)
    
        
         
            
        
        return (
            <div>
                <Dropdown className="dropdown" options={options} placeholder=' Click here to see previous searches' />
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    
    return {
        prevSearch: globalState.prevSearch
    }
}

export default connect(mapStateToProps)(PreviousSearches) 
