import React , {Component} from 'react'

class SearchTest extends Component{

constructor(props) {
    super(props)
    this.state = {
        itemFilter : ""
    }
}

handleChange = (e) => {
    this.setState({
        itemFilter : e.target.value
    })
    this.props.onChange(event.target.value)
}

render() {
    return (
<div>
<label htmlFor="filter">Filter:</label>
<input type="text" id="filter"
    value={this.state.itemFilter}
    onChange={this.handleChange}/>
</div>
    )
    }
}
export default SearchTest;