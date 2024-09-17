import MerchandiseItem from "./MerchandiseItem";
import shopAssortment from "../../logic/data/shopAssortment";

export default function MerchandiseList() {
  return (
    <div className="list">
      {shopAssortment.map((merchandise) => {
        return (
          <MerchandiseItem
            key={self.crypto.randomUUID()}
            merchandise={merchandise}
          />
        );
      })}
    </div>
  );
}
