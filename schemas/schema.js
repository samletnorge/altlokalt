// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import all the document type
import company from './company'
import daughterCompanies from './daughterCompany'
import warehouse from './warehouse'
import category from './category'
import sales from './sales'
import supplier from './supplier'
import availablePositions from './availablePositions'
import clubsAndTeams from './ClubsandTeams'
import enterprises from './Enterprises'
import businessGroup from './businessGroup'
import newEnterprises from './newEnterprises'
import services from './services'
import products from './products'
import onlineCV from './onlineCV'
import influencer from './influencer'
import consultant from './consultant'
import freelancer from './freelancers'
import coupons from './coupons'
import offers from './offer'
import priceCuts from './price_cuts'
import voluntaryWork from './voluntary_work'
import joint_organizations from './joint_organizations'
import newCompanies from './new_companies'
import startUps from './start_ups'
import county from './counties'
import countyServices from './county_services'
import country from './country'
import groceries from './groceries'
import dailyNecessities from './dailyNecessities'
import hobbies from './hobbies'
import enthusiasts from './enthusiast'
import onlineShop from './onlineShop'
import advertisement from './advertisement'
import branches from './branches'
import author from './author'
import post from './post'
import blockContent from './blockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document types
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    company,
    warehouse,
    offers,
    priceCuts,
    voluntaryWork,
    newCompanies,
    startUps,
    county,
    countyServices,
    joint_organizations,
    country,
    branches,
    supplier,
    groceries,
    enthusiasts,
    advertisement,
    daughterCompanies,
    availablePositions,
    businessGroup,
    products,
    enterprises,
    newEnterprises,
    coupons,
    onlineShop,
    category,
    sales,
    clubsAndTeams,
    services,
     onlineCV,
    dailyNecessities,
    hobbies,
    influencer,
    freelancer,
    consultant,
    author,
    post,
    blockContent,
  ]),
})

