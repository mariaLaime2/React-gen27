import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchased from "../components/PurchasesPage/ProductPurchased";
import "./styles/PurchasesPage.css";

const PurchasesPage = () => {
  const { getAllPurchases, purchases } = usePurchases();
  useEffect(() => {
    getAllPurchases();
  }, []);
  return (
    <section className="purchasePage__container">
      <h2 className="purchasePage__title">My purchases</h2>
      <div>
        {purchases?.map((purch) => (
          <ProductPurchased key={purch.id} purchase={purch} />
        ))}
      </div>
    </section>
  );
};

export default PurchasesPage;
