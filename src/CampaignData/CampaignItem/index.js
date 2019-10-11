
import React, { Component } from "react";
import s from "./../../CampaignData/CampaignData.module.scss";
import logo from '../../logo.svg';

export default class CampaignItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleModal = (show) => {
    this.setState({
      showModal: show
    })
  }

  getDay = (date) => {
    let timeDiff = new Date() - new Date(date);
    return Math.floor(timeDiff / 86400000)
  }
  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    const { logo_url, date, name, view, country } = item;
    let dayStr = Math.abs(this.getDay(date)) + ' days ' + (this.getDay(date) > 0 ? 'ago' : 'ahead');
    return (
      <>
        <div className={s.rowItem} onClick={this.toggleModal.bind(this, true)}>
          <div className={s.colItem}>
            <div>{date}</div>
            <div>{dayStr}</div>
          </div>
          <div className={s.colItem + ' ' + s.nameItem}>
            <div><img src={logo_url ? logo_url : logo} alt='logo'></img></div>
            <div>
              <div>{name}</div>
              <div>{country}</div>
            </div>
          </div>
          <div className={s.colItem}>
            <div>{view}</div>
          </div>
          <div className={s.colItem}>
            <div>CSV</div>
            <div>GRAPH</div>
            <div>SCHEDULE AGAIN</div>
          </div>
        </div>
        {showModal &&
          <div className={s.overlay}>
            <div className={s.container}>
              <p onClick={this.toggleModal.bind(this, false)}>Close</p>
              <h2>Campaign Details:</h2>
              <div>
                <h3>{name}</h3>
                <h4>{date}</h4>
                <h5>{dayStr}</h5>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}