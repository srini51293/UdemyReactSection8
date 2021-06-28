import './App.css';
import React , { useState } from 'react'
import Display from './Component/Display/Display'
import UserInfo from './Component/UserInfo/UserInfo'

const App =()=>{
   const [data,setData]=useState([]);
   //const userInfo={};
  const userInfoToDisplayHandler=(uname,uage)=>
  {
      setData((preData)=>{
        if(preData.length>0)
        {
          const updataData=[...data];
          updataData.push({username: uname,age: uage,id:Math.random().toString()});
          return updataData;
        }
        else if(preData.length===0)
        {
          let updataData=[];
          updataData.push({username: uname,age: uage,id:Math.random().toString()});
          return updataData;
        }
      });  
    //setData({username: uname,age: uage});
  };
return (
  <div > 
    <section className="user-age-sec">
      <UserInfo userInfoToDisplay={userInfoToDisplayHandler}/>
    </section>
    {data.length>0&&<section className="user-age-sec"> 
    { data.map(itrdata=>{
      return <Display key={itrdata.id} username={itrdata.username} age={itrdata.age} ids={itrdata.id}/> 
    })}
    </section>}
    
  </div>
);
};

export default App;
