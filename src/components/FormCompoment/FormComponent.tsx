"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Button from "../Button/Button"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
    email: z.string().email({ message: "Невірна адреса електронної пошти" }).min(5, {
        message: "Email - повинно бути не менше 5 символів.",
    }),
    bandName: z.string().min(2, {
        message: "Назва гурту - повинно бути не менше 2 символів.",
    }),
    contactPersonName: z.string().min(2, {
        message: "Контактна особа - повинно бути не менше 2 символів.",
    }),
    address: z.string().min(3, {
        message: "Населений пункт - повинно бути не менше 3 символів.",
    }),
    phone: z.string().refine((value) => /^\+380\s?(\(\d{2,3}\)|\d{2,3})[-.\s]?\d{2,3}[-.\s]?\d{2}[-.\s]?\d{2}$/.test(value), 'Невірно введений номер телефону'),
    styleGroup: z.string().min(3, {
        message: "Стиль гурту - повинно бути не менше 3 символів.",
    }),
    listOfInstrumentalBend: z.string().min(5, {
        message: "Кількість учасників гурту - повинно бути не менше 5 символів.",
    }),
    informationGroup: z.string().min(10, {
        message: "Інформація про гурт - повинно бути не менше 10 символів.",
    }),
    linksSocialNetworkPage: z.string(),
    linksToBandVideo: z.string(),
})

export default function FormComponent() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            bandName: "",
            address: "",
            contactPersonName: "",
            phone: "",
            styleGroup: "",
            listOfInstrumentalBend: "",
            informationGroup: "",
            linksSocialNetworkPage: "",
            linksToBandVideo: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 py-6 px-4 border rounded-md">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="rock@ukr.net" className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bandName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Назва гурту</FormLabel>
                            <FormControl>
                                <Input placeholder="Ромашки" className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Населений пункт</FormLabel>
                            <FormControl>
                                <Input placeholder="Київ" className="mt-2 text-textColor" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="contactPersonName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Контактна особа</FormLabel>
                            <FormControl>
                                <Input placeholder="Олександр" className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Номер телефону</FormLabel>
                            <FormControl>
                                <Input placeholder="+380980000000" className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="styleGroup"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Стиль у якому грає гурт</FormLabel>
                            <FormControl>
                                <Input placeholder="Панк-рок" className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="listOfInstrumentalBend"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Кількість учасників гурту, перелік інструментального складу
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Гітара, бас, барабани." className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="informationGroup"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Коротка інформація про гурт
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Коли заснований, особисті досягнення і т.д." className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="linksSocialNetworkPage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Посилання на сторінки соціальних мереж, youtube каналів, сайту гурту
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Додавати позиції за наявності" className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="linksToBandVideo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Посилання на відеозаписи гурту (вітається live-відео!)
                            </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Додавати позиції за наявності" className="mt-2" {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-32 mt-8 ml-auto">Відправити</Button>
            </form>
        </Form>
    )

}