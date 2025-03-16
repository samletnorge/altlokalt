import React from 'react'

function CompanyCard(props) {
  return (
    <div className="col-lg-4 col-sm-6 " >
      <div className="item col">
        <div className="row">
          <div className="col-lg-6">
            <div className="image">
              <img src="https://picsum.photos/id/870/720/1280?grayscale&blur=2" alt="" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="content">
              <a target="_blank" href={"https://" + props.hjemmeside} className="info" >{props.hjemmeside}</a>
              <h4 style={{ color: "black" }}>{props.navn}</h4>
              <div className="row">
                <div className="col-6">
                  <i className="fa fa-clock"></i>
                  <span className="list">{props.registreringsdatoEnhetsregisteret}</span>
                </div>
                <div className="col-6">
                  <i className="fa fa-map"></i>
                  <span className="list">{props.poststed}</span>
                </div>
              </div>
              <p>{props.beskrivelse}</p>
              <div className="main-button">
                <a href="reservation">Se mer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard