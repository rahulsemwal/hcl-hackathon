import React from 'react';
import LazyBox from '../LazyBox/LazyBox'
import './Card.css'
const Card = (props) => {
  console.log(props);
  const handleBookSubmit = (event)=>{
   alert('A name was submitted: ');
   event.preventDefault();
 }
 const handleChange = (event) => {
  // this.setState({value: event.target.value.toUpperCase()});
}
  return (
    	<article className="card">
    		<header>
    			<h3 className="heading">{props.article.empId}</h3>
          <small className="source">By: {props.article.source}</small>
    		</header>
    		<section>
        <form onSubmit={handleBookSubmit}>
          <label>
            Name:
            <input type="text" value={props.article.empId}  onChange={handleChange}/>
            <input type="text" value={props.article.band}  onChange={handleChange}/>
            <input type="date" value={props.article.date}  onChange={handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
    		</section>
    		<footer>
    			<p>I am footer</p>
    		</footer>
      </article>
    );
}

export default Card;
