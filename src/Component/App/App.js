import React , {Component} from 'react'
import './App.css'
import Nav from '../Nav/Nav'
import NoNetworkFound from '../NoNetworkFound/NoNetworkFound'
import NewsBox from '../NewsBox/NewsBox'

class App extends Component{
  constructor(){
    super();
    this.state = {
      "updateCounter":0,
      "offline": this.handleCheckOnline()
    }
  }
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }
  handleCheckOnline = () => window.navigator.onLine
  handleScroll = (event) =>{
    if(!window.scrollY){
      this.setState({
        "updateCounter":this.state.updateCounter +1,
        "offline": this.handleCheckOnline()
      });
    }
  }
  render(){
    return(
      <div className="App">
        <h1>HCL Car Parking Mgmt. {this.state.updateCounter}</h1>
        {this.state.offline?null:<NoNetworkFound/>}
        <NewsBox updateCounter = {this.state.updateCounter}/>
      </div>
    );
  }
}

export default App;
