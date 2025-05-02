"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { h4 } from "motion/react-client";

const ContactForm = () => {
    const [succesForm, setSucessForm] = useState(false)

    const formSchema = z.object({
        username:z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          email: "",
          message: ""
        },
      })

      const  onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body:JSON.stringify(values)
        })
        if(response.status === 200) {
            setSucessForm(true)
        }
      }

    return (  
        
        <Form {...form} >
            {succesForm ? (
                <h4>Formulario enviado con éxito 👌</h4>
            ): (
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                 control={form.control}
                 name="username"
                 render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input 
                                placeholder="Nombre"
                                {...field}
                                className="bg-white text-black dark:bg-slate-800 dark:text-white border border-gray-300 hover:border-orange-500 focus:border-orange-500 focus:outline-none"
    
                            />
                            
                        </FormControl>
                        <FormMessage className="text-red-600" />
                    </FormItem>
                 )}
                 />
    
                <FormField
                 control={form.control}
                 name="email"
                 render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input 
                                placeholder="email"
                                {...field}
                                className="bg-white text-black dark:bg-slate-800 dark:text-white border border-gray-300 hover:border-orange-500 focus:border-orange-500 focus:outline-none"
    
                            />
                            
                        </FormControl>
                        <FormMessage className="text-red-600"/>
                    </FormItem>
                 )}
                 />
    
                <FormField
                 control={form.control}
                 name="message"
                 render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Textarea 
                                placeholder="Escribe tu mensaje..."
                                {...field}
                                className="bg-white text-black dark:bg-slate-800 dark:text-white border border-gray-300 hover:border-orange-500 focus:border-orange-500 focus:outline-none"
    
                            />
                            
                        </FormControl>
                        <FormMessage className="text-red-600"/>
                    </FormItem>
                 )}
                 />
    
                 <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</Button>
                
                </form>
            )}
        </Form>
    );
}
 
export default ContactForm;