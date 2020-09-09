import React, { Component } from 'react';
// import axios from 'axios'


class Fileselector extends Component {


// componentDidMount(){
//     axios.get('https://filedrop-fa092.firebaseio.com/files.json')
//     .then(response => {
//         this.setState({files: response.data})
//     })
// }



    render() {
        return (
            <div className="Fileselector">

                <input className="input" type="file" onChange={this.handleChange}>

                </input>

            </div>
        )
    

    }

};

export default Fileselector;
