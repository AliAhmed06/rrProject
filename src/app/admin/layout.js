import '../globals.css'
import Searchbar from './components/Searchbar'
import Sidebar from './components/Sidebar'


export const metadata = {
  title: 'Dayim Marketing Admin',
  description: 'Modern Living',
}

export default function RootLayout({ children }) {
  return (
    <div className='flex gap-5'>
      <Sidebar />
      <main className='max-w-6xl flex-1 mx-auto py-4 '>
        {/* <Searchbar /> */}
        {children}
      </main>
    </div>
  )
}
