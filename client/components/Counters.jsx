import React from 'react'
import Counter from './Counter'
import Header from './Header'

class Counters extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Header />
                <Counter />
            </React.Fragment>
        )
    }
}

export default Counters