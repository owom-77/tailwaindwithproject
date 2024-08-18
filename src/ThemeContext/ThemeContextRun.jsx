import React, { useEffect, useState } from 'react'
import ButtonTheme from './Component/ButtonTheme'
import CardTheme from './Component/CardTheme'
import { ThemeContextProvider } from './ThemeContext'

export default function ThemeContextRun() {

    let [themeMode,setThemeMode] = useState('light') 

    let darkMode = ()=>{
        setThemeMode('dark');
    }

    let lightMode = ()=>{
        setThemeMode('light');
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove('light','dark')

        document.querySelector('html').classList.add(themeMode);
    },[themeMode])

    return (
        <ThemeContextProvider value={{themeMode,darkMode,lightMode}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ButtonTheme />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <CardTheme />
                    </div>
                </div>
            </div>
        </ThemeContextProvider>
    )
}
