'use client'

import { useForm } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const placeValidationSchema = z.object({
    name: z.string().min(3, 'Nome curto demais!!'),
    type: z.enum(["restaurante", 'bar', 'hotel', 'academia', 'petiscaria']),
    phone: z.string().min(8, 'Esse telefone não dá!!'),
    lat: z.number(),
    lng: z.number()

})

type PlaceFormData = z.infer<typeof placeValidationSchema>

type Props = {
    lat: number;
    lng: number;
}

export default function PlaceForm({lat, lng}: Props) {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful }
    } = useForm<PlaceFormData>({
        resolver: zodResolver(placeValidationSchema),
        defaultValues: {
            lat,
            lng
        }

    })

    const onSubmit = (data: PlaceFormData) => {
        alert("Dados do local enviados!!")
    }

    return (

        <form className="space-y-4" action="" onSubmit={handleSubmit(onSubmit)}>

            {/* nome */}

            <div>
                <label htmlFor="">Nome:</label>
                <input {...register('name')} type="text" className="w-full border rounded px-2 py-1" name="" id="" />{errors.name && <p className="text-red-700">{errors.name.message}</p>}
            </div>

            {/* telefone */}

            <div>
                <label htmlFor="">Telefone:</label>
                <input {...register('phone')} type="text" className="w-full border rounded px-2 py-1" name="" id="" />{errors.phone && <p className="text-red-700">{errors.phone.message}</p>}
            </div>

            {/* tipo */}

            <select {...register("type")} name="" id="">
                <option value="">Selecione...</option>
                <option value="restaurante">restaurante</option>
                <option value="bar">bar</option>               
                <option value="hotel">hotel</option>
                <option value="academia">academia</option>
                <option value="petiscaria">pestiscaria</option>
            </select>
            {errors.type && <p className="text-red-700">{errors.type.message}</p>}

            {/* latitude */}

            <div>
                <label htmlFor="">latitude: </label>
                <input value={lat} readOnly className="bg-gray-200" type="text" name="" id="" />
            </div>

            {/* longitude */}

            <div>
                <label htmlFor="">latitude: </label>
                <input value={lng} readOnly className="bg-gray-200" type="text" name="" id="" />
            </div>
                

            <button className="bg-indigo-700 text-white px-4 py-1 rounded hover:bg-indigo-500 transition cursor-pointer">
                Registrar Local
            </button>

        </form>

    )

}