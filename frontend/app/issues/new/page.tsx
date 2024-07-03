"use client"

import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from '@radix-ui/themes';
import { useRouter } from "next/navigation";

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit } = useForm<IssueForm>();

    return (
        <form className='max-w-xl space-y-4'
            onSubmit={handleSubmit(async (data) => {
                await axios.post("/api/issues", data);
                router.push("/issues");
            }
            )}>
            <TextField.Root placeholder="Title" {...register("title")}>
                <TextField.Slot>
                </TextField.Slot>
            </TextField.Root>
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <SimpleMDE placeholder="Description" {...field} />
                )}
            />
            <Button>Submit New Issue</Button>
        </form>
    )
}

export default NewIssuePage