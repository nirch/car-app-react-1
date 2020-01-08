import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarsComponent from './CarComponent';
import HomePage from './HomePage';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndexToShow: 0
    }

    // this.pages = [<HomePage notifyEnter={this.goToCarComponent}/>,  <CarsComponent/>]

    this.goToCarComponent = this.goToCarComponent.bind(this);
  }

  goToCarComponent() {
    this.setState({
      pageIndexToShow: 1
    })
  }

  render() {
    
    const { pageIndexToShow } = this.state;
    // const pageIndexToShow = this.state.pageIndexToShow;

    let pageToRender;
    if (pageIndexToShow === 0) {
      pageToRender = <HomePage notifyEnter={this.goToCarComponent}/>
    } else if (pageIndexToShow === 1) {
      pageToRender = <CarsComponent/>
    }

    return (

        <div>
          {pageToRender}
        </div>
        // <CarsComponent/>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload. {this.props.x}
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
      );
  }

}


export default App;
