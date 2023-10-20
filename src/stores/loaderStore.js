import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'

const loaderStore = (set) => ({
    isLoading: false,
    setLoading: (loading) => {
        set({isLoading: loading})
    }    
})

const useLoaderStore = create(
    devtools(
        persist(loaderStore, {
            name: "loader",
        })
    )
)

export default useLoaderStore;