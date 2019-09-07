/*
@@DOCS
@React 16.8 - componentWillMount, componentWillReceiveProps, componentWillUpdate must not use if you are using "static getDerivedStateFromProps"
*/
import React from 'react'
import ApiProvider from '../../Service/ApiProvider'
import Card from '../Card/Card'
import "./NewsBox.css"
class NewsBox extends React.Component{
  constructor(props){
    super(props);
    this.apiProvider = new ApiProvider()
    this.state = {
      "buffer": {"articles":[{
        "step":0,
        "empId":"51766488",
        "band":"e6",
        "bookDate":""
        }]},
      "updateCounter":0,
    }
  }
  // static getDerivedStateFromProps(nextProps,state){
  //   console.log("inside getDerivedStateFromProps always call before render method", nextProps, state)
  //   return { "updateCounter": nextProps.data }
  // }
  // componentWillMount(){
  //   // console.log("inside willMount, called first time only before render")
  //   console.log("=============================================================")
  //   this.methods.engine("play",this.state)
  // }
  componentDidMount(){
    console.log("inside componentDidMount, called first time only after render")
    // this.methods.engine("play",this.state)
  }
  componentWillUnmount(){
    // console.log("inside willUnMount, called when component expires")
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("inside will receive props, will call when props changes, will not work if getDerivedStateFromProps method used",this.props, nextProps)
  //   // this.props = nextProps
  //   // this.methods.engine("play");
  //   // this.methods.updateState("updateCounter",nextProps.updateCounter);
  // }
  shouldComponentUpdate(nextProps, nextState){
    //trigger when
    // return a boolean value
    // console.log("inside shouldComponentUpdate, will call before render if and only if update in state happen",this.props, nextProps, this.state, nextState);
    console.log("INSIDE shouldComponentUpdate")
    console.log("current props     = ", this.props)
    console.log("current nextProps = ", nextProps)
    console.log("current state     = ", this.state)
    console.log("current nextState = ", nextState)
    console.log("=============================================================")

    if(nextProps.updateCounter!==this.props.updateCounter){
        //update happens
        this.methods.updateHappens(nextProps,nextState);
        return false
    }else if(!nextProps.updateCounter || nextProps.updateCounter===this.props.updateCounter){
        //for first update happen as well as if props are same
        return true
    }
    return false
  }
  // componentDidUpdate(prevProps, prevState){
  //   // console.log("inside didUpdate call after render if an only if state updated", prevProps, prevState)
  //   if(prevProps.updateCounter!=this.props.updateCounter){
  //     // this.methods.updateState("updateCounter",this.props.updateCounter)
  //   }
  // }
  handleBookSubmit(event){debugger;
     // alert('A name was submitted: ');
     var a = services("book",{emId:"51677488",band:"e6",bookDate:"07/09/2019"})
     if(a.status == "w"){
       console.log(this.state);
     }
     function services(type,data){
       if(type == "book"){
         return {
           status:"w",
           slotNo:null,
           date:null,
           msg:null
         }
         let url = ""
         return fetch(url)
         .then(function(response) {
           return response.json()
         })
         .then(function(data) {
           return data
         })
         .catch(function(err){
           const error = {
             "error":err
           }
           console.log("Error in network call", err);
           return error
         });
       }
     }
   }

  service = {
    "fetchPost":(config)=>{
      // return Buffer;
      //retuning a promise
      let o = this.apiProvider
      return o.get(config).then((res) => {
        return res
      })
    }
  }
  methods = {
    "engine":(plug,data)=>{
      let config = {}
      config = {type:"newsApi"}
      // config = {type:"newsApiEntertainment"}
      this.methods.getData(config).then((result)=>{
        // this.setState({"buffer":result})
        data.buffer = result;
        this.methods.updateState("",data);
      });
    },
    "getData":(config)=>{
      return this.service.fetchPost(config).then(result => {
        return result;
      });
    },
    "updateHappens":(nextProps,nextState)=>{
      let obj = {}
      obj.updateCounter = nextProps.updateCounter
      obj.buffer = {}
      this.methods.engine("play",obj)
    },
    "updateState":(key,data)=>{
      if(!key){
        this.setState(data)
      }else{
        let obj = {}
        obj[key] = data
        this.setState(obj)
      }
    }
  }
  //render
  render(){
    console.log("INSIDE RENDER", this.state, this.props);
    console.log("=============================================================")
    return(
      <div className="news-board">
        {this.state.buffer.articles.map((o,i) => {
          return <Card  key={i} article={o} handleBookSubmit = {this.handleBookSubmit} state={this.state}/>
        })}
      </div>
    )
  }
}

export default NewsBox
