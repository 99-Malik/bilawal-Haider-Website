import FixedCallButtons from '@/components/buttons/FixCallButtons'
import SamsungFooter from '@/components/sections/samsung/SamsungFooter'
import SamsungHeader from '@/components/sections/samsung/SamsungHeader'
import Header from '@/components/headers/Header'
const SamsungLayout = ({children}) => {
  return (
    <body>
      <Header />
        {/* <SamsungHeader /> */}
        {children}
        {/* <SamsungFooter />  */}
        <FixedCallButtons />
    </body>
  )
}

export default SamsungLayout