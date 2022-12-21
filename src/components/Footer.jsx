import React from 'react'
import footerIconsArr from '../data/footerInfo'

const Footer = () => {
  return (
    <footer className='pt-14 pb-5' style={{fontFamily: 'Staatliches'}}>
        <div className="flex justify-center gap-8 pb-4">    
            {footerIconsArr.map((icon) => (
                <a key={icon.tooltip} href={icon.path} target="_blank" rel='noreferrer'>
                    <icon.icon alt={icon.tooltip} className="w-full h-12 hover:text-green-700 grow"/>
                </a>
            ))}
        </div>
        <div className="flex justify-center">
            <h3 className='text-center'>&copy; Site created by: Jashawn Rogers 2022</h3>
        </div>
    </footer>
  )
}

export default Footer