"use client";
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const AddProduct = () => {
  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;  
  const loginHandler = (data) => {
    console.log("form submitted", data)
  }
  return (
    <div className='bg-red h-full w-full flex items-center justify-center'>
      <form>

      </form>
    </div>
  )
}

export default AddProduct