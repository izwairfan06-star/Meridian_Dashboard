import React from 'react'
import FormSection from '../Components/FormSection'
import WorkspaceSection from '../Components/WorkspaceSection'
import NotificationsSection from '../Components/NotificationsSection'
import SecuritySection from '../Components/SecuritySection'
const Settings = () => {
  return (
    <>
    <p style={{color:"white", fontWeight:"bold", fontSize:"40px"}}>Settings</p>
    <p className="text-[#94a3b8]">Manage your workspace and preferences</p>
    <br></br>
      <div style={{display:"flex", justifyContent:"space-between", margin:"20px"}}>
        <FormSection/>
        <WorkspaceSection/>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", margin:"20px"}}>
        <NotificationsSection/>
        <SecuritySection/>
      </div>
    </>
  )
}

export default Settings