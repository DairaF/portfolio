import styles from './navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

  function Navigation () {
    return(
        <nav className={styles.header}>
          <a href="/">
            <FontAwesomeIcon icon={faHouse} />
          </a>
      </nav>
    )
  }
  
export default Navigation;