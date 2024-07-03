"use client"

import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-4'>
        <TextField.Root placeholder="Search the docs…">
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
        <TextArea placeholder="Reply to comment…" />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage