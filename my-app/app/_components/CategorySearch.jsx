"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
const CategorySearch = () => {
  const [categotyList, setCategoryList] = useState([]);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      console.log(res.data.data);

      setCategoryList(res.data.data);
    });
  };
  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="mb-10 flex flex-col items-center gap-5 text-center p-4">
      <h2 className="font-bold text-4xl text-primary">Search</h2>
      <h2 className="text-xl text-gray-500 font-[600]">
        Search your doctor and Book Appointment in one click
      </h2>
      <div className="flex w-full max-w-sm gap-3">
        <Input type="email" placeholder="Email" />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-5">
        {categotyList?.map((icon, index) => (
          <div
            className="flex flex-col justify-center items-center text-center bg-blue-50 p-5 rounded-lg m-2 gap-2 cursor-pointer hover:translate-y-[-5px] transition-all linear"
            key={index}
          >
            <Image
              src={icon.attributes.image.data.attributes.url}
              width={60}
              height={60}
              alt="icon"
            />
            <label className="font-semibold text-primary">
              {icon.attributes.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
