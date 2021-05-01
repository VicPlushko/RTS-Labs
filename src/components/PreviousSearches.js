import { connect } from 'react-redux'
import Dropdown from 'react-dropdown'

const PreviousSearches = (props) => {
    const {prevSearch} = props
    const options = prevSearch.map((search) => search)
    
    return (
        <div>
           <Dropdown className="dropdown" options={options} placeholder=' Click here to see previous searches' />
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        prevSearch: globalState.prevSearch
    }
}

export default connect(mapStateToProps)(PreviousSearches) 