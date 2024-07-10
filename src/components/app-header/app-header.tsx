import AppHeaderItem from '../app-header-item/app-header-item'
import { BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

function AppHeader() {

  return (
    <div className={styles.header} >
      <div className={styles.wrapper}>

        <AppHeaderItem
          path='/'
          text="Конструктор"
          icon={<BurgerIcon type="primary" />}
        />

        <AppHeaderItem
          path='/orders'
          text="Лента Заказов"
          icon={<ListIcon type="primary" />} />

        <div className={styles.logo}>
          <Logo />
        </div>

        <AppHeaderItem
          path='/profile'
          text="Личный кабинет"
          icon={<ProfileIcon type="primary" />} />
      </div>
    </div >
  );
}



export default AppHeader;