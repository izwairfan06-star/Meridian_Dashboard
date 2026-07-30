import React from 'react'
import StatCard from '../Components/StatCard'
import RevenueChart from '../Components/RevenueChart'
import WeeklyVisitorsChart from '../Components/WeeklyVisitorsChart'
import MonthlyRevenueChart from '../Components/MonthlyRevenueChart'
const Analytics = () => {
  return (
    <>
    <p style={{color:"white", fontWeight:"bold", fontSize:"40px"}}>Analytics</p>
    <p className="text-[#94a3b8]">Engagement and performance metrics</p>
    <br></br>
    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
       <StatCard title="PAGE VIEWS" value="284,192"  change="12.1%" isPositive={true} comparisonText="vs last week"/>
       <StatCard title="UNIQUE VISITORS" value="41,820"  change="7.4%" isPositive={true} comparisonText="vs last week" />
    </div>
    <div style={{display:"flex", gap:"20px", justifyContent:"center" , padding:"10px"}}>
       <StatCard title="AVG. SESSION" value="3m 42s"  change="5.2%" isPositive={true} comparisonText="vs last week"/>
       <StatCard title="BOUNCE RATE" value="38.4%"  change="2.1%" isPositive={false} comparisonText="vs last week" />
    </div>
    <div style={{display:"flex", gap:"20px", justifyContent:"center" , padding:"10px"}}>
      <WeeklyVisitorsChart/>
    <MonthlyRevenueChart/>
    </div>
    <RevenueChart/>
  
    </>
  )
}

export default Analytics