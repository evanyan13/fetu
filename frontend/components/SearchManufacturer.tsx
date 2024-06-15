"use client"

import { useState, Fragment } from 'react'
import Image from 'next/image'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, Transition } from '@headlessui/react'

import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("")

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car-logo"
              width={20}
              height={20}
            />
          </ComboboxButton>
          <ComboboxInput 
            className="search-manufacturer__input"
            placeholder='VolksWagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")}
          >
            <ComboboxOption>

            </ComboboxOption>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer