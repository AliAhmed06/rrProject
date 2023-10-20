"use client";

import GridLoaderSpinners from "../app/components/loaders/GridLoader";
import useLoaderStore from "./loaderStore";

const StoreProvider = ({children}) => {
const isLoading = useLoaderStore((state) => state.isLoading);
  return (
    <div>
        { isLoading && <GridLoaderSpinners /> }         
        {children}
    </div>
  )
}

export default StoreProvider