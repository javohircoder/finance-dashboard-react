import SvgDonutChart from "../../UI/icons/SvgDonuChart";
import styles from "./DonutChart.module.scss";

function DonutChart() {
    return (
        <div className={styles.chart}>
            <SvgDonutChart/>
            {/* decorative shapes */}
            <div className={styles.shapeHead}/>
            <div className={styles.shape}/>

            <div className={styles.center}>
                <p className={styles.amount}>$338</p>
                <p className={styles.label}>of $975 limit</p>
            </div>
        </div>
    );
}

export default DonutChart;
