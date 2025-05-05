
import Headers from './Headers'
import Fotter from './Fotter'

function Layout({children}) {
  return (
    <div className='container mx-auto px-10'>
        <Headers/>
        <div className='min-h-[100vh]'>
            {children}
        </div>
        <Fotter/>
    </div>
  )
}

export default Layout