import styles from "./page.module.css"
import Slider from "@/app/components/slider/Slider";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            {/*<Slider/> */}
            <div style={{flex: " 1 1 auto"}}></div>
            <Footer/>
        </main>
    )
}
