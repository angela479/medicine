import Head from "next/head";
import MedicineCard from "../components/MedicineCard";
import styles from "../styles/Medicines.module.css";

// Dummy data with images
const medicines = [
  { id: 1, name: "Paracetamol", price: "₹50", composition: "500mg", image: "/images/paracetamol.jpg" },
  { id: 2, name: "Ibuprofen", price: "₹100", composition: "200mg", image: "/images/ibuprofen.jpg" },
];

export default function Medicines() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medicines</title>
      </Head>
      <h1>Available Medicines</h1>
      <div className={styles.list}>
        {medicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
}

