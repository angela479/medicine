import React from "react";
import "./MedicineCard.module.css";

type MedicineProps = {
  medicine: {
    name: string;
    price: string;
    composition: string;
    image: string; // Added image property
  };
};

export default function MedicineCard({ medicine }: MedicineProps) {
  return (
    <div className="medicine-card">
      <img src={medicine.image} alt={medicine.name} className="medicine-image" />
      <div className="medicine-info">
        <h2>{medicine.name}</h2>
        <p><strong>Price:</strong> {medicine.price}</p>
        <p><strong>Composition:</strong> {medicine.composition}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

