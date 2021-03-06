import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import transports from "jsons/transport.json";
import styles from "./styles.css";

class Transport extends Component {
    render() {
          return (
              <div className={styles.root}>
                <div>
                  <iframe className={styles.map} width="100%" height="500px" frameborder="0" src="https://umap.openstreetmap.fr/zh-tw/map/g0v-summit_16594?scaleControl=true&amp;miniMap=false&amp;scrollWheelZoom=false&amp;zoomControl=true&amp;allowEdit=false&amp;moreControl=true&amp;datalayersControl=true&amp;onLoadPanel=undefined&amp;datalayers=30448%2C30459#15/25.0495/121.6155"></iframe>
                  {
                    transports[getLocale()].map( cat => {
                      return (
                        <section className={styles.section}>
                          <h3 className={styles.header}>{cat.title}</h3>
                          <div>{ cat.detail }</div>
                        </section>
                      )
                    })
                  }
                </div>
              </div>
          );
    }
};

export default Transport;
