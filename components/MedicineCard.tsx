import styles from "../styles/MedicineCard.module.css";

type MedicineProps = {
  medicine: {
    name: string;
    price: string;
    composition: string;
  };
}; //component

export default function MedicineCard({ medicine }: MedicineProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{medicine.name}</h2>
      <p className={styles.price}>Price: {medicine.price}</p>
      <p className={styles.composition}>Composition: {medicine.composition}</p>
    </div>
  );
}
