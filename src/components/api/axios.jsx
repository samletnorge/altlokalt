import axios from "axios"

export const companies = axios.create({
    baseURL: 'https://data.brreg.no/enhetsregisteret/api'
})

export const getPostsPage = async (pageParam = 1) => {
    const response = await companies.get(`/enheter?page=${pageParam}`)
    //console.log(response)
    return response.data._embedded.enheter
}

export const companiesInCity = axios.create({
    baseURL: 'https://data.brreg.no/enhetsregisteret/api/enheter'
})

export const getUsersPage = async (pageParam = 1, cityParam = localStorage.getItem("city")) => {
    const response = await companiesInCity.get(`?forretningsadresse.poststed=${cityParam}&page=${pageParam}`)
    
    return response.data
}