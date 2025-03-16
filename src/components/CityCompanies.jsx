import { React, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getUsersPage } from './api/axios'

import CompanyCard from './CompanyCard';
import PageButton from './PageButton';
import Header from './Header';
import Footer from './Footer';
import CompanyCard2 from './CompanyCard2';

function CityCompanies() {

    const [page, setPage] = useState(1)
    const saved = localStorage.getItem("city");

    const {
        isLoading,
        isError,
        error,
        data: companies,
        isFetching,
        isPreviousData,
    } = useQuery(['/companies', saved], () => getUsersPage(saved), {
        keepPreviousData: true
    })
    console.log(saved, page)

    if (isLoading) return <p>Loading Users...</p>

    if (isError) return <p>Error: {error.message}</p>
    console.log(companies)
    const content = companies._embedded.enheter.map(company => <CompanyCard2 key={company.organisasjonsnummer} navn={company.navn}
        hjemmeside={company.hjemmeside}
        registreringsdatoEnhetsregisteret={company.registreringsdatoEnhetsregisteret}
        poststed={(JSON.stringify(company.postadresse)) || (company.forretningsadresse.poststed)}
        beskrivelse={company.stiftelsesdato} />)

    const lastPage = () => setPage(companies.page.totalPages)
    const firstPage = () => setPage(1)
    const nextPage = () => setPage(prev => prev + 1)
    const prevPage = () => setPage(prev => prev - 1)


    const pagesArray = Array(companies.page.totalPages).fill().map((_, index) => index + 1)
    const pagesArray1 = pagesArray.slice(0, 5);

    const nav = (
        <nav className="page-numbers row">

            <div
                className="border-button col"
                disabled={isPreviousData || page === 1}
                onClick={firstPage}
                id="next-button"
                style={{ marginTop: "30px", marginBottom: "30px" }}>
                <a>
                    &lt;&lt;
                </a>
            </div>
            <div
                className="border-button col"
                disabled={page === 1}

                onClick={prevPage}
                id="prev-button"
                style={{ marginTop: "30px", marginBottom: "30px" }}>
                <a>
                    <i className="fa fa-arrow-left"></i>
                </a>
            </div>
            {/* Removed isPreviousData from PageButton to keep button focus color instead */}
            {/* {pagesArray.map(pg => <PageButton   key={pg} pg={pg} setPage={setPage} isPreviousData={isPreviousData}/>)}  */}
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
            <div
                className="border-button col"
                disabled={isPreviousData || page === companies.page.totalPages}
                onClick={lastPage}
                id="next-button"
                style={{ marginTop: "30px", marginBottom: "30px" }}>
                <a>
                    &gt;&gt;
                </a>
            </div>

        </nav>
    )

    return (
        <>
            <Header />
            {/* <div id="results" className="container-fluid col-lg-12">
                <div className='row'>
                    {isFetching && <span >Loading...</span>}

                    {content}
                </div>
            </div> */}

            <h1 style={{paddingTop: "100px", textAlign: "center", color: "white"}}>Bedrifter i </h1>
            <div className="gallery-container" style={{paddingTop: "90px"}}>

               
                {content}
                 {isFetching && <span >Loading...</span>}
            </div>
            {nav}
            <Footer />
        </>
    )
}

export default CityCompanies