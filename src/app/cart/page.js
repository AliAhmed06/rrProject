"use client";
import React, { useState } from "react";
import Container2 from "../components/Container2";
import Sidebar from "../components/sidebar/Sidebar";
import ProductItem2 from "../components/home/ProductItem2";
import Link from "next/link";
import ProductItem3 from "../components/home/ProductItem3";
import Container1 from "../components/Container1";
import TableRow from "./TableRow";
import ItemSelected from "./ItemSelected";
import ItemNotSeleted from "./ItemNotSeleted";
import UserLayout from "../layouts/UserLayout";

const Shop = () => {
  const [cartItems, setCartItems] = useState(true);

  return (
    <UserLayout>
      <div className="mb-20">
        {/* Page Title Section */}
        <div className="text-center py-10">
          <h2 className="font-bold text-2xl">Cart</h2>
          <p className="text-gray2 text-sm">
            Home <span className="tracking-[-2px]">&gt;&gt;</span> Cart{" "}
          </p>
        </div>

        {/* Product Categories Section */}
        <Container1 headingTitle={"Your Shopping Cart"}>
          {cartItems ? <ItemSelected /> : <ItemNotSeleted />}
        </Container1>
      </div>
    </UserLayout>
  );
};

export default Shop;
