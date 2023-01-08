import * as React from 'react'
import { MdOutlineLightMode, MdOutlineNightlight, MdOutlineDesktopWindows } from 'react-icons/md'
import { useThemeMode } from '../../../utils/hooks'

export default () => {
    const { theme, onSelectedMode } = useThemeMode()
    return (
        <div className='flex items-center justify-center gap-3'>
            <p className='capitalize text-lg font-bold dark:text-white'>
                mode
            </p>
            <label htmlFor="theme" className='relative h-full ring-1 ring-slate-200 rounded-lg shadow-sm p-2 flex items-center gap-4 dark:bg-slate-600 dark:ring-0'>
                {theme === 'light' && <MdOutlineLightMode size={30} />}
                {theme === 'dark' && <MdOutlineNightlight size={30} />}
                {theme === 'system' && <MdOutlineDesktopWindows size={30} />}
                <select name="theme" id="theme" onChange={e => onSelectedMode(e.target.value)} className='w-full h-full outline-none appearance-none rounded-lg capitalize text-slate-700 font-semibold dark:bg-slate-600 dark:highlight-white/5 dark:text-slate-200'>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                </select>
            </label>
        </div>
    )
}
