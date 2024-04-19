"use client";

import DevisesSection from "@/components/shared/DevisesSection";
import FilterSection from "@/components/shared/FilterSection";
import GalerieSection from "@/components/shared/GalerieSection";
import HeaderSection from "@/components/shared/HeaderSection";
import SloganSection from "@/components/shared/SloganSection";
import { getCarList } from "@/services";
import { useEffect, useState } from "react";

export default function page() {
  const [carList, setCarList] = useState<any>([]);
  const [carFilter, setCartFilter] = useState<any>([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const result: any = await getCarList();
    setCarList(result.carLists);
    setCartFilter(result.carLists);
  };

  const filterCardList = (brand: string) => {
    const filteredList = carFilter.filter((car: any) => car.mark === brand);
    setCarList(filteredList);
    // console.log(filteredList);
  };

  const filterPrice = (order: any) => {
    const data = [...carFilter].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCartFilter(data);
  };

  return (
    <>
      <SloganSection />
      <HeaderSection />
      <DevisesSection />
      <FilterSection
        carFilter={carFilter}
        setBrand={(value: string) => filterCardList(value)}
        orderPrice={(value: string) => filterPrice(value)}
      />
      <GalerieSection carlist={carList} />
    </>
  );
}
