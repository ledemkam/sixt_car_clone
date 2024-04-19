import { useEffect, useState } from "react";

export default function FilterSection({
  cartFilter,
  setBrand,
  orderPrice,
}: any) {
  const [brandList, setBrandList] = useState<any>([]);

  //new Set() to remove duplicate values
  //ou bien c est une collection en javascript qui ne prend pas les valeurs en double ou qui est unique
  const BrandSet = new Set();

  useEffect(() => {
    if (cartFilter) {
      handlerFilter();
    }
  }, [cartFilter]);

  const handlerFilter = () => {
    cartFilter.forEach((item: any) => {
      BrandSet.add(item.mark); //add() pour ajouter des elements dans le brandSet
    });
    console.log(brandList);

    setBrandList(Array.from(BrandSet)); //Array.from() pour convertir le brandSet en tableau
  };
  return (
    <div className="flex justify-end gap-3 p-3">
      <select
        onChange={(e) => orderPrice(e.target.value)}
        className="select select-bordered w-full max-w-xs"
        value={cartFilter}
      >
        <option selected>Trier par prix</option>
        <option value={-1}>Par prix croissant</option>
        <option value={1}>Par prix décroissant</option>
      </select>

      <select
        onChange={(e) => setBrand(e.target.value)}
        className="select select-bordered w-full max-w-xs"
        value={brandList}
      >
        <option selected>Trier par marque</option>
        {brandList.map((item: string, index: number) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}
