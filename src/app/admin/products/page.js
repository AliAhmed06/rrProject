"use client";
import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools';
import Link from "next/link";

const Products = () => {
  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;  
  return (
    <div className='h-full w-full flex p-10'>
      <Link href="/admin/products/add" className='hover:underline'>Add New</Link>
    </div>
  )
}

export default Products