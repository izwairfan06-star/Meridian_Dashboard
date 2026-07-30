import React from 'react'
import StatCard from '../Components/StatCard'
import TransactionsTable from '../Components/TransactionsTable'
const Transactions = () => {
  return (
    <>
     <p style={{color:"white", fontWeight:"bold", fontSize:"40px"}}>Transactions</p>
    <p className="text-[#94a3b8]">All payment records</p>
    <br></br>
    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
       <StatCard title="TOTAL VOLUME" value="$73,550"  change="4.2%" isPositive={true} comparisonText="vs last month"/>
       <StatCard title="COMPLETED" value="5"  change="2%" isPositive={true} comparisonText="vs last month" />
    </div>
    <div style={{display:"flex", gap:"20px", justifyContent:"center" , padding:"10px"}}>
       <StatCard title="PENDING" value="2"  change="0%" isPositive={true} comparisonText="no chnage"/>
       <StatCard title="FAILED" value="1"  change="50%" isPositive={false} comparisonText="vs last month" />
    </div>
    <TransactionsTable/>
    </>
  )
}

export default Transactions