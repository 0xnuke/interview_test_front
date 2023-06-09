import LayoutReport from "@/components/LayoutReport/LayoutReport";
import Report from '@/components/Engagement/Report/Report';
import styles from "@/styles/Home.module.css"

const report = () => {
    return (
        <LayoutReport>
            <main className={styles.main}>
                <Report />
            </main>
        </LayoutReport>
    )
}

export default report;