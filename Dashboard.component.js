import React, { Component } from 'react'
import "../App.css"
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
       c:1,
       
    };
  }
  render() {
    return (
      <div>
<h1 className="heading">Dashboard</h1>
      <div className='box first'>

  <div class="row">
    <div class="col ititle">Resource Name</div>
    <div class="col ititle">Resource ID</div>
    <div class="w-100"></div>
    <div class="col ititle " id='fir'>Column</div>
    <div class="col ititle "id='sec'>Column</div>
</div>
      </div>


      <div className='box second'>
  <div class="row">
    <div class="col ititle">Team Lead Name</div>
    <div class="col ititle">Resource ID</div>
    <div class="w-100"></div>
    <div class="col ititle"  id='fir'>Column</div>
    <div class="col ititle " id='sec'>Column</div>
</div>
  </div>
<div className='box third'>
  <div class="row">
    <div class="col ititle">Month</div>
    <div class="col ititle">Year</div>
    <div class="w-100"></div>
    <div class="col ititle "id='fir'>{this.c}</div>
    <div class="col ititle " id='sec'>Column</div>
</div>
  </div>
    </div>
    );
  }
}