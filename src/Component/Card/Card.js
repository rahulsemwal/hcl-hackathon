import React from 'react';
// import LazyBox from '../LazyBox/LazyBox'
import './Card.css'
// const Card = (props) => {
// console.log(props);
// const handleBookSubmit = (event)=>{debugger;
//    // alert('A name was submitted: ');
//    var a = service("book",{emId:"51677488",band:"e6",bookDate:"07/09/2019"})
//    if(a.status == "w"){
//      console.log(this.state);
//    }
//    event.preventDefault();
//  }
// const handleChange = (event) => {
//   // this.setState({value: event.target.value.toUpperCase()});
//
// }
// const service =(type,data)=>{
//
//     if(type == "book"){
//       return {
//         status:"w",
//         slotNo:null,
//         date:null,
//         msg:null
//       }
//       let url = ""
//       return fetch(url)
//       .then(function(response) {
//         return response.json()
//       })
//       .then(function(data) {
//         return data
//       })
//       .catch(function(err){
//         const error = {
//           "error":err
//         }
//         console.log("Error in network call", err);
//         return error
//       });
//     }
//   }
//   return (
//     	<article className="card">
//     		<header>
//     			<h3 className="heading">{props.article.empId}</h3>
//           <small className="source">By: {props.article.source}</small>
//     		</header>
//     		<section>
//         <form>
//           <label>
//             Name:
//             <input type="text" value={props.article.empId}  onChange={handleChange}/>
//             <input type="text" value={props.article.band}  onChange={handleChange}/>
//             <input type="date" value={props.article.date}  onChange={handleChange}/>
//           </label>
//           <input type="button" value="Book" onClick={this.props.handleBookSubmit}/>
//         </form>
//     		</section>
//     		<footer>
//     			<p>I am footer</p>
//     		</footer>
//       </article>
//     );
// }
//
// export default Card;

class Card extends React.Component {
  render() {
    return <button onClick = {this.props.handleBookSubmit}>book</button>
  }
}
export default Card;
