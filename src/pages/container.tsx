import { Button } from 'antd'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
// import GlobalButton from '../common/button/globalButton'
// import GlobalImage from '../common/image/globalImage'
import React from 'react'

interface AuthContainerProps {
    title: string
    formComponent: ReactNode
    formId: string
    buttonText: string
    isSignup?: boolean
    route: string
    loading?: boolean
}

const AuthContainer: FC<AuthContainerProps> = ({
    title,
    formComponent,
    formId,
    buttonText,
    isSignup,
    route,
    loading,
}) => {
    const containerWidth = isSignup
        ? 'lg:w-[500px] w-[100%]'
        : 'lg:w-[400px] w-[100%]'
    const containerHeight = isSignup
        ? 'lg:h-[450px] h-[100%]'
        : 'lg:h-[371px] h-[100%]'

    const router = useRouter()

    const handleNavigation = () => {
        router.push(route)
    }

    return (
        <div
            className={`bg-cover  ${isSignup ? 'h-[100vh] overflow-y-auto ' : 'h-[100vh]'
                }  flex justify-center items-center bg-[#E3E3E3] `}
        >
            <section
                className={`flex justify-center flex-col gap-10 lg:m-0  h-[100%] ${isSignup ? 'm-5' : 'm-5'
                    }`}
                style={{ zIndex: 2000 }}
            >
                <main className='flex flex-row items-center '>
                    <div
                        className={`bg-[#F4F5F6] ${containerHeight} ${containerWidth} px-8 py-5 relative rounded-l-2xl  hidden lg:block`}
                    >
                        <p className='font-[900] text-[#0C0D0D] leading-[31.25px] text-[24px] mt-[80px]'>
                            Mark8
                        </p>
                        <p className='font-[300] text-[14px] leading-[24px] text-[#495D69]'>
                            By Awesomity Lab
                        </p>
                        <p className='text-[#495D69] font-[300] leading-[24px] text-[12px] absolute bottom-5'>
                            &copy; 2024 Awesomity Lab
                        </p>
                    </div>
                    <div
                        className={`bg-white ${containerHeight} ${containerWidth} px-8 py-5 relative lg:rounded-r-2xl lg:rounded-l-none rounded-2xl xl:rounded-r-2xl 2xl:rounded-r-2xl  `}
                    >
                        <p className='font-[900] text-[24px] leading-[31.25px] text-black'>
                            {title}
                        </p>
                        <div className='mt-6'>{formComponent}</div>
                        {isSignup ? (
                            <>
                                <div className='mt-2 lg:absolute lg:bottom-5 lg:hidden block'>
                                    <div className='flex lg:justify-between flex-col lg:flex-row lg:items-center lg:gap-10 gap-5'>
                                        <p
                                            className='underline font-[600] text-[14px] leading-[18.23px]'
                                            onClick={handleNavigation}
                                        >
                                            Click here if you have an account
                                        </p>
                                        <Button
                                            htmlType='submit'
                                            form={formId}
                                            className='h-[50px] lg:w-[170px] w-[100%] leading-[18.23px] text-[14px] font-[800] header-b-l h-tex-c'
                                            loading={loading}
                                        >
                                            {buttonText}
                                        </Button>
                                    </div>
                                </div>
                                <div className='lg:absolute lg:bottom-5 hidden lg:block'>
                                    <Button
                                        htmlType='submit'
                                        form={formId}
                                        className='h-[50px] w-[200px] leading-[18.23px] text-[14px] font-[800] header-b-l h-tex-c'
                                        loading={loading}
                                    >
                                        {buttonText}
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className='mt-10 lg:absolute lg:bottom-5'>
                                <div className='flex lg:justify-between flex-col lg:flex-row lg:items-center lg:gap-10 gap-5'>
                                    <p className='underline font-[600] text-[14px] leading-[18.23px]'>
                                        Forgot password?
                                    </p>

                                </div>
                            </div>
                        )}
                    </div>
                </main>

                <footer
                    className={`rounded-2xl bg-white lg:flex lg:justify-between lg:flex-row flex-col gap-1 lg:gap-0 lg:items-center px-8 py-5 h-[128px] ${isSignup && 'hidden'
                        }`}
                >
                    <div className='flex flex-col gap-1'>
                        <p className='leading-[18.23px] font-[500] text-[14px] text-black'>
                            {isSignup ? 'Have account' : 'New Here?'}
                        </p>
                        <p className='font-[300] text-[14px] leading-[24px] text-[#495D69]'>
                            {isSignup ? 'Login into acccount' : 'Create an account'}
                        </p>
                    </div>
                    <div>
                        <GlobalButton
                            htmlType='button'
                            className='bg-white rounded-md h-[48px] lg:w-[180px] w-[100%] register-button border-2 border-gray-300 border-opacity-50 text-[#141C24] leading-[18.23px] font-[800]'
                            icon={<GlobalImage src='/icons/right-arrow.svg' />}
                            iconPlacement='right'
                            onClick={handleNavigation}
                        >
                            {isSignup ? 'Login here' : 'Register here'}
                        </GlobalButton>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default AuthContainer