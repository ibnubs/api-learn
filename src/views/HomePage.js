import React, {Fragment, Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


class HomePage extends Component {
    state = {
        countries: []
    }

    // getByCountries = () => {
    //     axios.get("https://api.covid19api.com/countries")
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err)) //handel error
    // }

    //async
    getByCountries = async () => {
        try {
            const res = await axios.get("https://api.covid19api.com/countries")
            console.log(res)
            this.setState({countries: res.data})
        } catch (err){ //untuk handle error
            console.log(err)
        }
    }



    render(){
        const lists = this.state.countries.map(list => 
                <div key={list.IS02}>
                    <p>{list.Country}</p>
                    <Link to={`/${list.Slug}`}>View detail</Link>
                </div>
            )


        return(
            <Fragment>
                <h1>Covid 19 Report</h1>
                <button onClick={this.getByCountries}>Click</button>
                <div> {lists}</div>
            </Fragment>
        )
    }
} 




export default HomePage;