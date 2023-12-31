"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormInput,
    FormTextarea,
    FormLabel,
    FormMessage,
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
} from "@/components/ui/form"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
import Button from "../Button/Button"
import Notiflix from 'notiflix';
import { useAppDispatch, useAppSelector } from "@/hook/hookStore"
import { addRegistrationGroup } from "@/store/GroupStore/groupOperation"
import { useEffect, useState } from "react"



const formSchema = z.object({
    email: z.string().email({ message: "Невірна адреса електронної пошти" }).min(5, {
        message: "Повинно бути не менше 5 символів.",
    }),
    bandName: z.string().min(2, {
        message: "Повинно бути не менше 2 символів.",
    }),
    contactPersonName: z.string().min(2, {
        message: "Повинно бути не менше 2 символів.",
    }),
    address: z.string().min(3, {
        message: "Повинно бути не менше 3 символів.",
    }),
    phone: z.string().refine((value) => /^\+380\s?(\(\d{2,3}\)|\d{2,3})[-.\s]?\d{2,3}[-.\s]?\d{2}[-.\s]?\d{2}$/.test(value), 'Невірно введений номер телефону'),
    styleGroup: z.string().min(3, {
        message: "Виберіть стиль.",
    }),
    listOfInstrumentalBend: z.string().min(5, {
        message: "Повинно бути не менше 5 символів.",
    }),
    informationGroup: z.string().min(10, {
        message: "Повинно бути не менше 10 символів.",
    }),
    linksSocialNetworkPage: z.string().min(10, {
        message: "Повинно бути не менше 10 символів.",
    }),
    linksToBandVideo: z.string(),
})

export default function FormComponent() {
    const [band, setBand] = useState('');
    const { response, error } = useAppSelector(state => state.rock.group)
    const dispatch = useAppDispatch();

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
        dispatch(addRegistrationGroup(values))

        setBand(values.bandName)

        form.reset()

    }

    useEffect(() => {


        response && Notiflix.Notify.success(`${band} - Ваша реєстрація на участь у фестивалі відправлена, ми з Вами зв'яжемся.`, {
            timeout: 6000,
        },);
        error && Notiflix.Notify.failure(`${band} - Під час реєстрації сталася помилка  спробуйте ще раз.`, {
            timeout: 7000,
        },);
    }, [response, error])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 py-6 px-4 border rounded-md  tablet:flex-row tablet:flex-wrap tablet:items-end tablet:justify-between tablet:gap-y-8 laptop:gap-x-7  desktop:py-8 ">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[350px]">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <FormInput placeholder="rock@ukr.net" className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bandName"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[350px]">
                            <FormLabel>Назва гурту</FormLabel>
                            <FormControl>
                                <FormInput placeholder="Ромашки" className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[350px]">
                            <FormLabel>Населений пункт</FormLabel>
                            <FormControl>
                                <FormInput placeholder="Київ" className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="contactPersonName"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[350px]">
                            <FormLabel>Контактна особа</FormLabel>
                            <FormControl>
                                <FormInput placeholder="Олександр" className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[350px]">
                            <FormLabel>Номер телефону</FormLabel>
                            <FormControl>
                                <FormInput placeholder="+380980000000" className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="styleGroup"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[350px]">
                            <FormLabel>Стиль у якому грає гурт</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} >
                                <FormControl>
                                    <SelectTrigger className="mt-2 ">
                                        <SelectValue placeholder="Виберіть стиль" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Рок-н-рол">Рок-н-рол</SelectItem>
                                    <SelectItem value="Блюз-рок">Блюз-рок</SelectItem>
                                    <SelectItem value="Фолк-рок">Фолк-рок</SelectItem>
                                    <SelectItem value="Хард-рок">Хард-рок</SelectItem>
                                    <SelectItem value="Альтернативний">Альтернативний</SelectItem>
                                    <SelectItem value="Психоделічний">Психоделічний</SelectItem>
                                    <SelectItem value="Хеві-метал">Хеві-метал</SelectItem>
                                    <SelectItem value="Панк-рок">Панк-рок</SelectItem>
                                    <SelectItem value="Рок-авангард">Рок-авангард</SelectItem>
                                    <SelectItem value="Нова хвиля">Нова хвиля</SelectItem>
                                    <SelectItem value="Інший стиль">Інший стиль</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="listOfInstrumentalBend"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[530px]">
                            <FormLabel>Кількість учасників гурту, перелік інструментального складу
                            </FormLabel>
                            <FormControl>
                                <FormTextarea placeholder="Гітара, бас-гітара, барабани..." className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="informationGroup"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[530px]">
                            <FormLabel>Коротка інформація про гурт
                            </FormLabel>
                            <FormControl>
                                <FormTextarea placeholder="Коли заснований, особисті досягнення і т.д." className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="linksSocialNetworkPage"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[530px]">
                            <FormLabel>Посилання на сторінки соціальних мереж, youtube каналів, сайт гурту
                            </FormLabel>
                            <FormControl>
                                <FormTextarea placeholder="Додати посилання" className="mt-2 " {...field} />
                            </FormControl>
                            <FormMessage className="text-errorColor" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="linksToBandVideo"
                    render={({ field }) => (
                        <FormItem className="tablet:w-64 laptop:w-[446px] desktop:w-[530px]">
                            <FormLabel>Посилання на відеозаписи гурту (вітається live-відео!)
                            </FormLabel>
                            <FormControl>
                                <FormTextarea placeholder="Додати посилання" className="mt-2 " {...field} />
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

