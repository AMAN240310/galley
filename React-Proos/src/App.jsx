import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div>

       <Card user="John Doe" content="This is John's content."  age = "25" uimg="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"/>
       <Card user="Jane Smith" content="This is Jane's content." age = "30" uimg="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"/>
       <Card user="Bob Johnson" content="This is Bob's content." age = "35" uimg="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"/>
    </div>
  )
}

export default App

