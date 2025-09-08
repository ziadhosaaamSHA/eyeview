'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { loginSchema } from '@/modules/auth/schemas'
import Link from 'next/link'
import { useTRPC } from '@/trpc/client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

function SignInView() {

  const trpc = useTRPC();
  const loginMutation = useMutation(trpc.auth.login.mutationOptions({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success('Logged in successfully.');
      router.push('/');
    }
  }));
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    mode: 'all',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    loginMutation.mutate(values);
  }


  return (
    <div className='grid grid-cols-1 lg:grid-cols-5'>
      <div className='bg-white h-screen w-full lg:col-span-3 overflow-y-hidden flex flex-col justify-center'>
        <Form {...form}>
          <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-8 p-4 lg:p-16'
          >
          <div className='flex items-center justify-between mb-8'>
          <Link href='/'>
          <span>
            <h1 className='text-shop_dark_green hoverEffect group font-sans cursor-pointer text-2xl font-bold uppercase tracking-wider hover:text-shop_light_green md:gap-0'>ShopCart</h1>
          </span>
          </Link>
          <Button
          asChild
          variant='ghost'
          className='text-base border-none underline'
          size={'sm'}
          >
            <Link href='/register'>
              Don't have an account? Sign Up
            </Link>
          </Button>
          </div>
          <h1 className='text-4xl font-bold'>
            Welcome Back!
          </h1>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base'>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
          disabled={loginMutation.isPending}
          type='submit'
          size={'lg'}
          className='w-full mt-4 bg-shop_dark_green hover:bg-shop_light_green'
          >
            Log In
          </Button>
          </form>
        </Form>
      </div>
      <div className='h-screen w-full bg-gray-200 lg:col-span-2 hidden lg:block'
      style={{
        backgroundImage: "url('/auth-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      />
    </div>
  )
}

export default SignInView
