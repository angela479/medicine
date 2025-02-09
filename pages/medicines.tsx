import Head from "next/head";
import MedicineCard from "../components/MedicineCard"; // ✅ Correct Import
import styles from "../styles/Medicines.module.css";

// Dummy data
const medicines = [
  { id: 1, name: "Paracetamol", price: "₹50", composition: "500mg" },
  { id: 2, name: "Ibuprofen", price: "₹100", composition: "200mg" },
];

export default function Medicines() {
  console.log("MedicineCard:", MedicineCard);  // ✅ Debugging line

  return (
    <div className={styles.container}>
      <Head>
        <title>Medicines</title>
      </Head>
      <h1>Available Medicines</h1>
      <div className={styles.grid}>
        {medicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
}
