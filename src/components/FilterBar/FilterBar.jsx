// FilterBar - the toggle "Show only active members" + the "List" / "Grid" switch.
// It has no state of its own: App owns the state and passes it down as props.
import styles from './FilterBar.module.css'

/**
 * @param {object} props
 * @param {boolean} props.showOnlyActive - is the checkbox checked?
 * @param {() => void} props.onToggleActive - call it when the checkbox is clicked
 * @param {"list" | "grid"} props.layout - the current layout. Its button gets the class styles.active
 * @param {(layout: "list" | "grid") => void} props.onLayoutChange - call it with "list" or "grid"
 */
export default function FilterBar({
  showOnlyActive,
  onToggleActive,
  layout,
  onLayoutChange,
}) {
  // TODO: a checkbox inside a <label> with the text "Show only active members"
  // TODO: two buttons: "List" and "Grid"

  return <div className={styles.filterBar}>
  <label for="show" className={styles.toggle}>Show only active members</label>
  <input type='checkbox' id="show" className={styles.toggle} onChange={onToggleActive} checked={showOnlyActive}/>
  <div className={styles.layoutSwitch}>
    <button className={layout==='list'?styles.active:''} onClick={()=>{onLayoutChange('list')}}>List</button>
    <button className={layout==='grid'?styles.active:''} onClick={()=>{onLayoutChange('grid')}}>Grid</button>
  </div>
  </div>
}
