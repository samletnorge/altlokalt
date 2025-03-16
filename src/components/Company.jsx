import { React, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useQuery } from '@tanstack/react-query';
import CompanyCard from './CompanyCard';
import { getPostsPage } from './api/axios';
import { getUsersPage} from './api/axios';

function Company() {

  const [pageParam, setPageNumber] = useState(1)
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    getPostsPage(pageParam).then(data => setCompanies(data))
  }, [pageParam])

  //console.log(companies)

  const content = companies.map(company =>

    <CompanyCard key={company.organisasjonsnummer} navn={company.navn}
      hjemmeside={company.hjemmeside}
      registreringsdatoEnhetsregisteret={company.registreringsdatoEnhetsregisteret}
      poststed={(JSON.stringify(company.postadresse)) || (company.forretningsadresse.poststed)}
      beskrivelse={company.stiftelsesdato} />)

  const nextPage = () => setPageNumber(prev => prev + 1)
  const prevPage = () => setPageNumber(prev => prev - 1)


  return (
    <div>
      <Header />
      <div className="page-heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h4>Se Bedrifter i lokale ditt;</h4>

              <form id="search-form" >
                <h2>
                  <input className="form-control" aria-label="Search" type="text" id="search-query"
                    placeholder="skriv en by ..." />
                </h2>
                <div className="border-button"><button type="submit">Søk</button></div>

              </form>

              <div className="amazing-deals">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                      <div className="section-heading text-center">
                        <h2>Nede er lokalet bedrifter i byen din</h2>

                        <p>Vi offrer flere gratis tjenester. Vil du se mer? <a href="deals">Klikk Her</a></p>
                      </div>
                    </div>
                    <div id="results" className="container-fluid col-lg-12">
                      <div className="row " >
                        {content}
                        <div className="col-lg-12 row">
                          <div
                            className="border-button col"
                            disabled={pageParam === 1}

                            onClick={prevPage}
                            id="prev-button"
                            style={{ marginTop: "30px", marginBottom: "30px" }}>
                            <a>
                              <i className="fa fa-arrow-left"></i>
                            </a>
                          </div>

                          <div
                            className="border-button col"
                            disabled={!companies.length}
                            onClick={nextPage}
                            id="next-button"
                            style={{ marginTop: "30px", marginBottom: "30px" }}>
                            <a>
                              <i className="fa fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>



                      </div>


                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Company