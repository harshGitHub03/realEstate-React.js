//services comp images
import houseVilla from "./servicesImages/house&villa.png"
import familyHouse from "./servicesImages/familyHouse.png"
import apartments from "./servicesImages/apartments.png"
import officeStudio from "./servicesImages/office&studio.png"
import villaCondo from "./servicesImages/villa&condo.png"

// properties - services & blog images
import img1 from "./blogImages/img1.png"
import img2 from "./blogImages/img2.png"
import img3 from "./blogImages/img3.png"
import img4 from "./blogImages/img4.png"
import img5 from "./blogImages/img5.png"
import img6 from "./blogImages/img6.png"

// location available component assets
import city1 from "./locationAvailableImages/city-1.png"
import city2 from "./locationAvailableImages/city-2.png"
import city3 from "./locationAvailableImages/city-3.png"
import city4 from "./locationAvailableImages/city-4.png"
import city5 from "./locationAvailableImages/city-5.png"
import city6 from "./locationAvailableImages/city-6.png"

// feedback component images
import reviewImg1 from "./feedbackImages/reviewImg1.jpg"
import reviewImg2 from "./feedbackImages/reviewImg2.jpg"
import reviewImg3 from "./feedbackImages/reviewImg3.jpg"
import reviewImg4 from "./feedbackImages/reviewImg4.jpg"
import reviewImg5 from "./feedbackImages/reviewImg5.jpg"
import customerImg1 from './feedbackImages/reviewCustomer1.jpg'
import customerImg2 from './feedbackImages/reviewCustomer2.jpg'
import customerImg3 from './feedbackImages/reviewCustomer3.jpg'
import customerImg4 from './feedbackImages/reviewCustomer4.jpg'
import customerImg5 from './feedbackImages/reviewCustomer5.jpg'

// service page
const servicesAssets = [
    {
        image: houseVilla,
        name: 'Commericals',
        Total: "122 Property",
        property: 'Commercial'
    },
    {
        image: familyHouse,
        name: 'House & Villa',
        Total: "155 Property",
        property: 'Homes'
    },
    {
        image: apartments,
        name: 'Apartments',
        Total: "30 Property",
        property: 'Apartment'
    },
    {
        image: officeStudio,
        name: 'Office & Studio',
        Total: "80 Property",
        property: 'Office'
    },
    {
        image: villaCondo,
        name: 'Villa & Condo',
        Total: "80 Property",
        property: 'Condos'
    }
]

// properties ( blog and services page )
const blogAssets = [
    {
        image: img1,
        category: "For Rent",
        name: "Red Carpet Real Estate",
        address: "420 Hirak Road, Canada",
        price: '$6,700',
        property: 'Apartment',
        recentAdded: true
    },
    {
        image: img2,
        category: "For Sale",
        name: "Fairmount Properties",
        address: "4698 Zirak Road, NewYork",
        price: '$8,450',
        property: 'Condos',
        recentAdded: true
    },
    {
        image: img3,
        category: "For Rent",
        name: "The Real Estate Corner",
        address: "4624 Mooker Market, USA",
        price: '$6,260',
        property: 'Office',
        recentAdded: true
    },
    {
        image: img4,
        category: "For Sale",
        name: "Herringbone Realty",
        address: "3621 Liverpool, London",
        price: '$8,540',
        property: 'Homes',
        recentAdded: true
    },
    {
        image: img5,
        category: "For Rent",
        name: "Brick Lane Realty",
        address: " 320 Montreal Road, Canada",
        price: '$5,250',
        property: 'Commercial',
        recentAdded: true
    },
    {
        image: img6,
        category: "For Sale",
        name: "Banyon Tree Realty",
        address: "510 Zirak Road, Canada",
        price: '$3,740',
        property: 'Apartment',
        recentAdded: true
    },
    
    // ///////////////////////////////////new ones
    {
        image: reviewImg1,
        category: "For Sale",
        name: "WairRount Properties",
        address: " 220 Montreal Road, Canada",
        price: '$5,230',
        property: 'Commercial'
    },
    {
        image: reviewImg2,
        category: "For Rent",
        name: "Brick Lane Realty",
        address: " 220 Montreal Road, Canada",
        price: '$4,230',
        property: 'Commercial'
    },
    {
        image: reviewImg4,
        category: "For Rent",
        name: "LairCount Properties",
        address: "5621 Liverpool, London",
        price: '$3,420',
        property: 'Homes'
    },
    {
        image: reviewImg3,
        category: "For Rent",
        name: "Herringbone Realty",
        address: "5621 Liverpool, London",
        price: '$3,640',
        property: 'Homes'
    },
    {
        image: reviewImg5,
        category: "For Sale",
        name: "Banyon Tree Realty",
        address: "210 Zirak Road, Canada",
        price: '$5,340',
        property: 'Apartment',
    },
    {
        image: reviewImg2,
        category: "For Rent",
        name: "The Real Estate Corner",
        address: "5624 Mooker Market, USA",
        price: '$4,250',
        property: 'Office'
    },
    {
        image: reviewImg1,
        category: "For Sale",
        name: "The Real Estate Corner",
        address: "6224 Mooker Market, USA",
        price: '$5,860',
        property: 'Office'
    },
    {
        image: reviewImg4,
        category: "For Rent",
        name: "WairRount Properties",
        address: "3658 Zirak Road, NewYork",
        price: '$3,650',
        property: 'Condos'
    },
    {
        image: reviewImg2,
        category: "For Sale",
        name: "LairCount Properties",
        address: "4698 Zirak Road, NewYork",
        price: '$4,340',
        property: 'Condos'
    }
]

// Home page
const awardsAssets = [
    {
        icon: <i class="fa-solid fa-trophy"></i>,
        total: '32 M',
        name: 'Blue Burmin Award'
    },
    {
        icon: <i class="fa-solid fa-toolbox"></i>,
        total: '43 M',
        name: 'Mimo X11 Award'
    },
    {
        icon: <i class="fa-solid fa-lightbulb"></i>,
        total: '51 M',
        name: 'Australian UGC Award'
    },
    {
        icon: <i class="fa-solid fa-heart"></i>,
        total: '42 M',
        name: 'IITCA Green Award'
    }
]

// Home page
const locationsAvailableAssets = [
    {
        image: city1,
        cityName: "New Orleans, Louisiana",
        properties: ['12 Villas', '07 Offices', '10 Apartments']
    },
    {
        image: city2,
        cityName: "Jerrsy, United State",
        properties: ['14 Villas', '03 Offices', '12 Apartments']
    },
    {
        image: city3,
        cityName: "Liverpool, London",
        properties: ['22 Villas', '17 Offices', '18 Apartments']
    },
    {
        image: city4,
        cityName: "NewYork, United States",
        properties: ['22 Villas', '17 Offices', '19 Apartments']
    },
    {
        image: city5,
        cityName: "Montreal, Canada",
        properties: ['09 Villas', '12 Offices', '17 Apartments']
    },
    {
        image: city6,
        cityName: "California, USA",
        properties: ['14 Villas', '17 Offices', '21 Apartments']
    }
]

//Home page
const feedbackAssets = [
    {
        image: reviewImg1,
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, pariatur quasi eum optio eaque dolorem error voluptatum. Exercitationem tempore odit, amet provident error deserunt enim nostrum, recusandae voluptate, molestiae fugiat?',
        customerImg: customerImg1,
        customerName: 'Arsh harry'
    },
    {
        image: reviewImg2,
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, pariatur quasi eum optio eaque dolorem error voluptatum. Exercitationem tempore odit, amet provident error deserunt enim nostrum, recusandae voluptate, molestiae fugiat?',
        customerImg: customerImg2,
        customerName: 'Smith hejlo'
    },
    {
        image: reviewImg3,
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, pariatur quasi eum optio eaque dolorem error voluptatum. Exercitationem tempore odit, amet provident error deserunt enim nostrum, recusandae voluptate, molestiae fugiat?',
        customerImg: customerImg3,
        customerName: 'George glitch'
    },
    {
        image: reviewImg4,
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, pariatur quasi eum optio eaque dolorem error voluptatum. Exercitationem tempore odit, amet provident error deserunt enim nostrum, recusandae voluptate, molestiae fugiat?',
        customerImg: customerImg4,
        customerName: 'Henry Martin'
    },
    {
        image: reviewImg5,
        discription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, pariatur quasi eum optio eaque dolorem error voluptatum. Exercitationem tempore odit, amet provident error deserunt enim nostrum, recusandae voluptate, molestiae fugiat?',
        customerImg: customerImg5,
        customerName: 'Sargam george'
    }
]

export { servicesAssets, blogAssets, awardsAssets, locationsAvailableAssets, feedbackAssets }