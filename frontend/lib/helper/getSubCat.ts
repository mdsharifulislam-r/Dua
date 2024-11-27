import { cat, dua, subcat } from "@/Types/type";

export async function getSubCat(cat_id: number = 1) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/subcat/${cat_id}`);
    const data: subcat[] = (await res?.json()) || [];
    return data?.length ? data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCat() {
    try {
      const res = await fetch(`${process.env.BASE_URL}/cat`);
      const data: cat[] = (await res?.json());
      return data?.length ? data : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  export async function getDuas(subcat_id: number = 1) {
    try {
      const res = await fetch(`${process.env.BASE_URL}/duas/${subcat_id}`);
      const data: dua[] = (await res?.json());
      return data?.length ? data : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }


