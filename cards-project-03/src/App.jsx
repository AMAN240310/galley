import React from 'react'
import Card from './components/card'
import User from './components/user'
//import user from './components/user'


const App = () => {
  // array of objects lile jason foramt fom where we can store the data in the form of array and we can use that data in our project
  //  const arr = [{user:'aman kuma', age: 25} , {user:'john doe', age: 30} , {user:'jane smith', age: 28  }]
  //  arr.map(function(item){
  //    console.log(item);
  //  })
  const jobOpenings = [
  {
    brand: "Google",
    logo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "4 days ago",
    tag: "Software Engineer",
    type: "Full Time",
    level: "Junior Level",
    payUSD: 120000,
    location: "Mumbai, India"
  },
  {
    brand: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 days ago",
    tag: "Frontend Developer",
    type: "Full Time",
    level: "Senior Level",
    payUSD: 145000,
    location: "Mumbai, India"
  },
  {
    brand: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "6 days ago",
    tag: "Cloud Engineer",
    type: "Full Time",
    level: "Junior Level",
    payUSD: 110000,
    location: "Mumbai, India"
  },
  {
    brand: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 day ago",
    tag: "iOS Developer",
    type: "Full Time",
    level: "Senior Level",
    payUSD: 150000,
    location: "Mumbai, India"
  },
  {
    brand: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    tag: "Backend Engineer",
    type: "Full Time",
    level: "Senior Level",
    payUSD: 160000,
    location: "Mumbai, India"
  },
  {
    brand: "Google",
    logo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    tag: "Data Analyst",
    type: "Part Time",
    level: "Junior Level",
    payUSD: 90000,
    location: "Mumbai, India"
  },
  {
    brand: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "7 days ago",
    tag: "DevOps Engineer",
    type: "Full Time",
    level: "Senior Level",
    payUSD: 140000,
    location: "Mumbai, India"
  },
  {
    brand: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "8 days ago",
    tag: "UI/UX Designer",
    type: "Part Time",
    level: "Junior Level",
    payUSD: 85000,
    location: "Mumbai, India"
  },
  {
    brand: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "9 days ago",
    tag: "Machine Learning Engineer",
    type: "Full Time",
    level: "Senior Level",
    payUSD: 170000,
    location: "Mumbai, India"
  },
  {
    brand: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    tag: "QA Engineer",
    type: "Full Time",
    level: "Junior Level",
    payUSD: 95000,
    location: "Mumbai, India"
  }
];


console.log(jobOpenings);

   return (
    <div className='parentdiv'>
     
      {/* <User name="John Doe"/>
      <User name={arr[0]} /> */}
      {/* use to retun all the element what is spencial in this  arr */}
        {/* {arr.map((item) => {
          return <h1>{item}</h1>

        })} */}

      {jobOpenings.map(function(item,idx){


        return <div key={idx}>
          <Card imgsrc={item.logo} brand={item.brand} date={item.datePosted} tag={item.tag} type={item.type} level={item.level} pay={item.payUSD} location={item.location}/>
         </div>
      }) } 

    </div>
  )
}

export default App

