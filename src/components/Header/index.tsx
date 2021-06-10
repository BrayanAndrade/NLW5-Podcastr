import styles from  './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

export function Header() {


    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    return (
        <header className={styles.headerContainer}>
             <Link href="/" >                
                        <img src="/logo.svg" alt="Podcastr" style={{cursor: "pointer"}}/>                
                </Link>
          

            <p>O melhor para voce ouvir, sempre  </p>
            <span>{currentDate}</span>
          
            
        </header>
    );
}