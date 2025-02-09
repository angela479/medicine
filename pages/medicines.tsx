import Head from "next/head";
import MedicineCard from "../components/MedicineCard";
import styles from "../styles/Medicines.module.css";

// Dummy data for medicines
const medicines = [
  { 
    id: 1, 
    name: "Paracetamol", 
    price: "₹50", 
    composition: "500mg", 
    image: "/images/paracetamol.jpg"  
  },
  { 
    id: 2, 
    name: "Ibuprofen", 
    price: "₹100", 
    composition: "200mg", 
    image: "/images/ibuprofen.jpg"  
  },
  { 
    id: 3, 
    name: "Amoxicillin", 
    price: "₹150", 
    composition: "250mg", 
    image: "/images/amoxicillin.jpg"  
  },
  { 
    id: 4, 
    name: "Cetrizine", 
    price: "₹80", 
    composition: "10mg", 
    image: "/images/cetrizine.jpg"  
  }
];

export default function Medicines() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medicines</title>
      </Head>
      <h1 className={styles.heading}>Available Medicines</h1>
      <div className={styles.medicineList}>
        {medicines.map((medicine) => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
}

