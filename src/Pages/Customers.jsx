import React from 'react'
import StatCard from '../Components/StatCard'
import AccountDirectory from '../Components/AccountDirectory'
const Customers = () => {
  return (
    <>
    <p style={{color:"white", fontWeight:"bold", fontSize:"40px"}}>Customers</p>
    <p className="text-[#94a3b8]">Active accounts and subscription status</p>
    <br></br>
    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
       <StatCard title="TOTAL CUSTOMERS" value="1,284"  change="3.2%" isPositive={true} comparisonText="vs last month"/>
       <StatCard title="MRR" value="$38,340"  change="6.1%" isPositive={true} comparisonText="vs last month" />
    </div>
    <div style={{display:"flex", gap:"20px", justifyContent:"center" , padding:"10px"}}>
       <StatCard title="ENTERPRISE" value="3"  change="0%" isPositive={true} comparisonText="no change"/>
       <StatCard title="NPS SCORE" value="72"  change="4%" isPositive={true} comparisonText="vs last quarter" />
    </div>
    <AccountDirectory/>
    </>
  )
}

export default Customers