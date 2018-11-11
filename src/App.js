import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){

    super(props);
    this.state = {
       balance:'',
       rate: '',
       term:'30',
       payment:'',
    }
  
    this.handleBalance = this.handleBalance.bind(this);	
    this.handleRate= this.handleRate.bind(this);
    this.handleTerm= this.handleTerm.bind(this);
    this.handleClick= this.handleClick.bind(this);
  }
  
  
  handleBalance(event) {
  
      this.setState({balance: event.target.value});
  
    }
  
  handleRate(event) {
      this.setState({rate: event.target.value});
    }
  
  handleTerm(event){
    this.setState({term:event.target.value});
  }  
  
  handleClick(event){
  
      event.preventDefault();
  
  
  let payment;
  let P = (this.state.balance);
  let I = (this.state.rate)/ 100/ 12;
  let N = (this.state.term) * 12;
  
  payment = monthlyPayment(P, N, I);
  
  function monthlyPayment(p, n, i) {
   return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) -1);
  }
     this.setState({payment:payment.toFixed(2)});
     console.log(this.state.handleClick);
  
  }
  
    render() {
      return (
  
        <div className='container'>
  
          <div className="col-lg-12">
          <h3 >Mortgage Calculator</h3>
        </div>   
          
          <div className="col-lg-12">
              <label>
              <h4>Loan Balance</h4>
             <input id="balance" type="number"  name= "balance" value={this.state.balance} onChange={this.handleBalance}/>
          </label>
      </div>		
           
          <div className="col-lg-12">
              <label>
              <h4>Interest Rate (%)</h4>
                <input id="rate" type="number" name="rate" value={this.state.rate} onChange={this.handleRate}/>
          </label>
      </div>			
        
          <div className="col-lg-12">	
              <label>
            <h4>Loan Term</h4>
            <select id="term" name="term"  value={this.state.term} onChange={this.handleTerm} >
              <option value="15">15</option>
              <option value="30">30</option>	
            </select>
          </label>
      </div>		
      
      <button className="btn btn-primary btn-lg" name="submit" id="submit" type="submit" onClick={this.handleClick}>submit</button>
      
  
        <div id="output" name='output'>
        <h4>{this.state.payment}</h4>
        </div>
      
        </div>
      );
    }
}

export default App;
