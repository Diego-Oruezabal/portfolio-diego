"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {

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

      const  onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
      }

    return (  
        
        <Form {...form} >

            <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <FormField
             control={form.control}
             name="username"
             render={({field}) => (
                <FormItem>
                    <FormControl>
                        <Input 
                            placeholder="Your name"
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
                            placeholder="Your email"
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
                            placeholder="Your name"
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

        </Form>
    );
}
 
export default ContactForm;