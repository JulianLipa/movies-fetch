import Image from "next/image";
import styles from "./Footer.module.css"

const Footer = ({ social }) => {
    return(
        <div className={styles.container}>
            <Image className={styles.logo}
            src={"/images/logo-joa2-blanco.png"}
            alt='logo'
            width={200}
            height={100}
            priority
          />
        </div>
    )
}

export default Footer