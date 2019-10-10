
import React, { Component } from "react";
import s from "./CampaignData.module.scss";
import CampaignItem from "./CampaignItem";

export default class CampaignData extends Component {
  render() {
    const { data } = this.props
    return (
      <div className={s.mainContainer}>
        <div className={s.rowItem}>
          <div className={s.colItem}>
            DATE
          </div>
          <div className={s.colItem}>
            CAMPAIGN
          </div>
          <div className={s.colItem}>
            VIEW
          </div>
          <div className={s.colItem}>
            ACTIONS
          </div>
        </div>
        {data.list.map((item, index) => <CampaignItem key={index} item={item} />)}
      </div>
    )
  }
}