import React, { createContext, useContext } from 'react'

const UserContext = createContext({})
const AreaContext = createContext({})

// 定义 Header 组件
function Header() {
  const userInfo = useContext(UserContext)
  const areaInfo = useContext(AreaContext)
  return (
    // <UserContext.Consumer>
    //   {
    //     value1 => {
    //       return (
    //         <AreaContext.Consumer>
    //           {
    //             value2 => {
    //               return (
    //                 <div>
    //                   <p>{value1.name}</p>
    //                   <p>{value1.age}</p>
    //                   <p>{value2.width}</p>
    //                 </div>
    //               )
    //             }
    //           }
    //         </AreaContext.Consumer>
    //       )
    //     }
    //   }
    // </UserContext.Consumer>

    <div>
      <p>{userInfo.name}</p>
      <p>{userInfo.age}</p>
      <p>{areaInfo.width}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserContext.Provider value={{ "name": "syy", "age": 18 }}>
        <AreaContext.Provider value={{ "width": 200 }}>
          <Header />
        </AreaContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
export default App

