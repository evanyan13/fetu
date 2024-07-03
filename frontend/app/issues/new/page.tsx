"use client"

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-4'>
        <TextField.Root placeholder="Search the docs…">
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
        <SimpleMDE />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage