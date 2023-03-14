import {FC} from 'react'

import styles from './Header.module.scss'
import HeaderMenu from './menu/HeaderMenu'
import HeaderLogo from "@/layout/header/logo/HeaderLogo";
import HeaderButtons from "@/layout/header/buttons/HeaderButtons";
import HeaderProfile from "@/layout/header/profile/HeaderProfile";
import Row from "@/ui/grid/Row";


const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Row>
                <HeaderLogo/>
                <HeaderMenu/>
                <HeaderButtons/>
                <HeaderProfile/>
            </Row>
        </header>
    )
}

export default Header
