import React, { useEffect, useState } from "react";
import SubCatagoriesBox from "./subCatagoriesBox";
import { subcat } from "@/Types/type";

export default function SubCatagories({ cat_id }: { cat_id: number }) {
  const [data, setData] = useState<subcat[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subcat/${cat_id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const subcats = data?.map((item, inde) => (
    <SubCatagoriesBox subcat={item} key={item?.subcat_id + inde} />
  ));
  return (
    <div className="w-[85%] flex flex-col gap-4 border-l-[3px] border-primary_color border-dotted ">
      {subcats}
    </div>
  );
}
