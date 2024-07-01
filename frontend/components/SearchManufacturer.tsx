"use client"

import { useState, Fragment, act } from 'react'
import Image from 'next/image'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'

import { manufacturers } from '@/constants'
import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("")
  const filterdManufacturers = query === "" 
    ? manufacturers
    : manufacturers.filter((manufacturer) => manufacturer.toLowerCase().replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, "")))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
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
            <ComboboxOptions>
              {filterdManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className={({focus}) => 
                      `relative search_manufacturer__option ${focus ? "bg-primary-blue text-white" : "text-gray-900"}`
                    }
                  >
                    <div>{item}</div>
                  </ComboboxOption>
                ))
              }
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer