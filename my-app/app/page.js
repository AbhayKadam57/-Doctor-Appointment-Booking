"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorsList from "./_components/DoctorsList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);

  const getDoctorList = () => {
    GlobalApi.getDoctors().then((res) => {
      setDoctorList(res.data.data);
    });
  };

  useEffect(() => {
    getDoctorList();
  }, []);

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorsList doctorList={doctorList} />
    </div>
  );
}
