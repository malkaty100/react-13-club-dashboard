// TasksPanel - the tasks of the selected member, with messages for the empty states.
import styles from './TasksPanel.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: string, isActive: boolean} | null} props.member - the selected member, or null
 * @param {Array<{id: number, title: string, done: boolean, assignedTo: number}>} props.tasks - the tasks of the selected member
 * @param {(taskId: number) => void} props.onToggleTask - call it with task.id when a task checkbox is clicked
 */
export default function TasksPanel({ member, tasks, onToggleTask }) {
  // TODO: no member selected -> "Select a member to see their tasks"
  // TODO: the member has no tasks -> "No tasks yet"
  // TODO: otherwise, a loop over tasks: a checkbox (checked = done) + the title, inside a <label>
  let tasksMember
  if(member){
    tasksMember=tasks.filter(t=>t.assignedTo===member.id)
  }
  return <div className={styles.tasksPanel}>
  {!member?<h3 className={styles.empty}>Select a member to see their tasks</h3>:tasksMember.length===0?<h3 className={styles.empty}>No tasks yet</h3>:
  
    <><h2 className={styles.title}>tasks of {member.name}</h2>
    <div className={styles.tasks}>
  {tasksMember.map(task=><div className={styles.task}>
  <label htmlFor={task.id} className={task.done?styles.done:""}>{task.title}</label>
  <input id={task.id} type='checkbox' checked={task.done} onChange={()=>{onToggleTask(task.id)}}/>
  </div>)}</div></>
  }
  </div>
}
