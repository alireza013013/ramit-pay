import { useState } from 'react'
import './Login.scss'
import { Welcome } from './components/welcome/Welcome'
import { PhoneNumber } from './components/phoneNumber/PhoneNumber'
import { CodeRegister } from './components/codeRegister/CodeRegister'
import { Success } from './components/success/Success'

export const Login = () => {

    const [pageIndex, setPageIndex] = useState(1)



    return (
        <div className='main-login'>
            {
                pageIndex == 1 && <Welcome goNextPage={() => setPageIndex(2)} />
            }

            {
                pageIndex == 2 && <PhoneNumber goNextPage={() => setPageIndex(3)} />
            }

            {
                pageIndex == 3 && <CodeRegister goNextPage={() => setPageIndex(4)} />
            }

            {
                pageIndex == 4 && <Success />
            }
        </div>
    )
}