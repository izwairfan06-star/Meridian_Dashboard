import React from 'react'
import StatCard from '../Components/StatCard'
import RevenueChart from '../Components/RevenueChart'
import TrafficSourcesCard from '../Components/TrafficSourcesCard'
import RecentTransactions from '../Components/RecentTransactions'

const Overview = () => {
  return (
    <>
    <p style={{color:"white", fontWeight:"bold", fontSize:"40px"}}>Overview</p>
    <p className="text-[#94a3b8]">December 2026 - all figures in USD</p>
    <br></br>
    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
       <StatCard title="TOTAL REVENUE" value="$102,400"  change="8.4%" isPositive={true} comparisonText="vs last month"/>
       <StatCard title="ACTIVE CUSTOMERS" value="1,284"  change="3.2%" isPositive={true} comparisonText="vs last month" />
    </div>
    <div style={{display:"flex", gap:"20px", justifyContent:"center" , padding:"10px"}}>
       <StatCard title="AVG. ORDER VALUE" value="$2,840"  change="1.8%" isPositive={false} comparisonText="vs last month"/>
       <StatCard title="CHURN RATE" value="2.1%"  change="0.4%" isPositive={false} comparisonText="vs last month" />
    </div>
    <div style={{display:"flex", gap:"20px", justifyContent:"center" , padding:"10px"}}>
      <RevenueChart/>
      <TrafficSourcesCard/>
    </div>
    <RecentTransactions/>

    </>
  )
}

export default Overview