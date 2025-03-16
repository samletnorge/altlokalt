import React from 'react'

function CompanyCard2(props) {
    return (
        <div className="card" key={props.index}>
            <div className="card-image">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tranby365.net%2Fimages%2FIMG_5779-1-.png&f=1&nofb=1&ipt=9f086695f713d71dbfa17787e486e87e108dbf7b6499e7a095e9b2e4fe051b89&ipo=images" alt={props.navn} />
            </div>
            <div className="card-content">
                <p>{props.poststed}</p>
                <h3>{props.navn}</h3>
                <p>{props.beskrivelse}</p>
                <a href={`/company`} className="card-link">View Profile</a>
            </div>
        </div>
    )
}

export default CompanyCard2