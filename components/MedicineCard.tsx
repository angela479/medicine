import styles from "../styles/MedicineCard.module.css";

type MedicineProps = {
  medicine: {
    name: string;
    price: string;
    composition: string;
    image: string; // New property for image
  };
};

export default function MedicineCard({ medicine }: MedicineProps) {
  return (
    <div className={styles.card}>
      <img src={medicine.image} alt={medicine.name} className={styles.image} />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{medicine.name}</h2>
        <p className={styles.price}>Price: {medicine.price}</p>
        <p className={styles.composition}>Composition: {medicine.composition}</p>
        <button className={styles.buyButton}>Add to Cart</button>
      </div>
    </div>
  );
}
