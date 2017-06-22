import React, { Component } from 'react';
import './Header.css';

const data = [
  {
    "key": "AN",
    "name": "Andaman and Nicobar Islands"
  },
  {
    "key": "AP",
    "name": "Andhra Pradesh"
  },
  {
    "key": "AR",
    "name": "Arunachal Pradesh"
  },
  {
    "key": "AS",
    "name": "Assam"
  },
  {
    "key": "BR",
    "name": "Bihar"
  },
  {
    "key": "CG",
    "name": "Chandigarh"
  },
  {
    "key": "CH",
    "name": "Chhattisgarh"
  },
  {
    "key": "DH",
    "name": "Dadra and Nagar Haveli"
  },
  {
    "key": "DD",
    "name": "Daman and Diu"
  },
  {
    "key": "DL",
    "name": "Delhi"
  },
  {
    "key": "GA",
    "name": "Goa"
  },
  {
    "key": "GJ",
    "name": "Gujarat"
  },
  {
    "key": "HR",
    "name": "Haryana"
  },
  {
    "key": "HP",
    "name": "Himachal Pradesh"
  },
  {
    "key": "JK",
    "name": "Jammu and Kashmir"
  },
  {
    "key": "JH",
    "name": "Jharkhand"
  },
  {
    "key": "KA",
    "name": "Karnataka"
  },
  {
    "key": "KL",
    "name": "Kerala"
  },
  {
    "key": "LD",
    "name": "Lakshadweep"
  },
  {
    "key": "MP",
    "name": "Madhya Pradesh"
  },
  {
    "key": "MH",
    "name": "Maharashtra"
  },
  {
    "key": "MN",
    "name": "Manipur"
  },
  {
    "key": "ML",
    "name": "Meghalaya"
  },
  {
    "key": "MZ",
    "name": "Mizoram"
  },
  {
    "key": "NL",
    "name": "Nagaland"
  },
  {
    "key": "OR",
    "name": "Odisha"
  },
  {
    "key": "PY",
    "name": "Puducherry"
  },
  {
    "key": "PB",
    "name": "Punjab"
  },
  {
    "key": "RJ",
    "name": "Rajasthan"
  },
  {
    "key": "SK",
    "name": "Sikkim"
  },
  {
    "key": "TN",
    "name": "Tamil Nadu"
  },
  {
    "key": "TS",
    "name": "Telangana"
  },
  {
    "key": "TR",
    "name": "Tripura"
  },
  {
    "key": "UK",
    "name": "Uttar Pradesh"
  },
  {
    "key": "UP",
    "name": "Uttarakhand"
  },
  {
    "key": "WB",
    "name": "West Bengal"
  }
]

localStorage.setItem('data', JSON.stringify(data));
const datafromlocal = JSON.parse(localStorage.getItem('data'));

class Suggestion extends Component {
  render() {
    let arr = this.props.list,
        list = [];

    arr.forEach((stateList, i) => {
      list.push(<li key={i}><a href={stateList.input}>{stateList.input}</a></li>)
    });

    if(this.props.showSuggestion) {
      if(arr.length > 0) {
        return (
          <div className="suggestion-list">
            <ul>
              {list}
            </ul>
          </div>
        )
      } else {
        return (
          <div className="suggestion-list">
            <ul>
              <li>No suggestion found</li>
            </ul>
          </div>
        )
      }
    }
    return (
      null
    )
  }
}

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      stateName: '',
      showSuggestion: false,
      list: []
    }
  }
  handleChange = (e) => {
    let arr = [];

    this.setState({
      stateName: e.target.value
    });

    if(e.target.value.length > 2) {
      if(datafromlocal != null) {
        datafromlocal.filter(function(val){
          let temp = val.name.toLowerCase().match("\\w*"+e.target.value.toLowerCase()+"\\w*", "g");
          if(temp != null) {
            arr.push(temp)
          }
        });

        this.setState({
          showSuggestion: true,
          list: arr
        });
      } else {
        // call api
      }

      return arr;

    } else {
      this.setState({
        showSuggestion: false,
        list: []
      });
    }
  }

  handleSubmit = (e, message) => {
    e.preventDefault();
    let formData = {
      stateName: this.state.stateName
    }
    console.log(formData)
  }

  render() {
    return (
      <div className="header">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="stateName" placeholder="stateName" autoComplete="off" required onChange={this.handleChange} value={this.state.stateName}/>
          <button>GO</button>
        </form>
        <Suggestion showSuggestion={this.state.showSuggestion} list={this.state.list}/>
      </div>
    );
  }
}

export default Header;
