import Header from "@/components/Header/Header";
import MainContainer, { Params } from "@/components/MainComponet/MainContainer";
import Image from "next/image";

export default async function Home({searchParams}:{searchParams:Params}) {
  const paramsData = await searchParams
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <Header/>
      <MainContainer params={paramsData}/>
    </div>
  );
}
