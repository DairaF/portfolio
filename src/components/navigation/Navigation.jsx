import styles from './navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

  function Navigation ({tellId}) {
    return(
        <nav className={styles.header}>
          <a onClick={()=>{ tellId(0)}}>
            <FontAwesomeIcon icon={faHouse} />
          </a>
      </nav>
    )
  }
  
export default Navigation;