// App - keeps all the state (useState) and builds the page from the components.
import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import FilterBar from './components/FilterBar/FilterBar.jsx'
import MembersList from './components/MembersList/MembersList.jsx'
import TasksPanel from './components/TasksPanel/TasksPanel.jsx'
import Notice from './components/Notice/Notice.jsx'

export default function App() {
  // TODO: state (useState):
  //   members          - start with initialMembers
  //   tasks            - start with initialTasks
  //   selectedMemberId - start with null
  //   showOnlyActive   - start with false
  //   layout           - start with "list"
  const [members,setMembers]=useState(initialMembers)
  const [tasks,setTasks]=useState(initialTasks)
  const [selectedMemberId,setSelectedMemberId]=useState(null)
  const [showOnlyActive,setShowOnlyActive]=useState(false)
  const [layout,setLayout]=useState("list")

  const onToggleActive=()=>{
    setShowOnlyActive(!showOnlyActive)
    console.log(showOnlyActive);
    
  }
  const onToggleTask=(id)=>{
  setTasks(prev=>
    prev.map(t=>{
    return  t.id===id?{...t,done:!t.done}:t
      }
    )
  
  )}
  const memberSelected=selectedMemberId?members.find(m=>m.id===selectedMemberId):null

  // TODO: compute the members to show, the selected member and their tasks

  // TODO: render: Header, FilterBar, Notice (only when needed), MembersList, TasksPanel, Footer
  return <div className={styles.app}>
    <Header/>
    <FilterBar showOnlyActive={showOnlyActive} onToggleActive={onToggleActive} layout={layout} onLayoutChange={setLayout}/>
    <MembersList  members={showOnlyActive?members.filter(m=>m.isActive):members} layout={layout} selectedMemberId={selectedMemberId} onSelect={setSelectedMemberId}/>
     {memberSelected&&!memberSelected.isActive&&<Notice type="warning">{memberSelected.name} is inActive</Notice>}
    <TasksPanel member={memberSelected} tasks={tasks} onToggleTask={onToggleTask}/>
    <Footer/>
  </div>
}
