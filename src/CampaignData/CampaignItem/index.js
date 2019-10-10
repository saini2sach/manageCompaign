
import React, { Component } from "react";
import s from "./../../CampaignData/CampaignData.module.scss";

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
    return 'sdf'
  }
  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    return (
      <>
        <div className={s.rowItem} onClick={this.toggleModal.bind(this, true)}>
          <div className={s.colItem}>
            <div>{item.date}</div>
            <div>{this.getDay(item.date)}</div>
          </div>
          <div className={s.colItem}>
            <div><img src="" alt='logo'></img></div>
            <div>{item.name}</div>
            <div>{this.getDay(item.date)}</div>
          </div>
          <div className={s.colItem}>
            <div>{item.view}</div>
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
                <h3>{item.name}</h3>
                <h4>{item.date}</h4>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}