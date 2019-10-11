
import React, { Component } from "react";
import s from "./Campaigns.module.scss";
import CampaignData from "../CampaignData";

export default class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
    this.compaignList = ['UPCOMING CAMPAIGNS', 'LIVE CAMPAIGNS', 'PAST CAMPAIGNS']
    this.data = [{
      name: 'UPCOMING CAMPAIGNS',
      id: 0,
      list: [{
        date: '2020-05-01',
        name: 'Test Whatsapp',
        country: 'US',
        logo_url: '',
        view: '',
      }, {
        date: '2019-12-17',
        name: 'dsfcvdsfmsf',
        country: 'JP',
        logo_url: '',
        view: '',
      }, {
        date: '2021-04-17',
        name: 'Super Jewels Quest',
        country: 'CA, FR',
        logo_url: '',
        view: '',
      }, {
        date: '2020-04-14',
        name: 'Mole Slayer',
        country: 'FR',
        logo_url: '',
        view: '',
      }, {
        date: '2020-04-14',
        name: 'Mancala Mix',
        country: 'CA, FR, JP',
        logo_url: '',
        view: '',
      }]
    }, {
      name: 'LIVE CAMPAIGNS',
      id: 0,
      list: [{
        date: '2019-08-01',
        name: 'Running',
        country: 'US',
        logo_url: '',
        view: '',
      }, {
        date: '2016-04-17',
        name: 'Hello INs',
        country: 'IND',
        logo_url: '',
        view: '',
      }]
    }, {
      name: 'PAST CAMPAIGNS',
      id: 0,
      list: [{
        date: '2017-05-01',
        name: 'Test Whatsapp',
        country: 'US',
        logo_url: '',
        view: '',
      }, {
        date: '2016-04-17',
        name: 'dsfcvdsfmsf',
        country: 'JP',
        logo_url: '',
        view: '',
      }]
    }]
  }

  selectCampaign = (index) => {
    this.setState({
      selected: index
    })
  }

  render() {
    const { selected } = this.state;
    return (
      <div className={s.campaignContainer}>
        <h1>Manage Campaigns</h1>
        <nav>
          {this.compaignList.map((item, index) => <li key={index} className={index === selected ? s.selected : ''} onClick={this.selectCampaign.bind(this, index)}>{item}</li>)}
        </nav>
        <CampaignData data={this.data[selected]} />
      </div>
    )
  }
}