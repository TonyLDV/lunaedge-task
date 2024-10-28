"use client";

import { z } from "zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { logInSchema } from "@/lib/schema";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChadContext } from "@/store/context";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormMessage,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { chadData, setIsLoggedIn } = useChadContext();
  const [error, setError] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (data: z.infer<typeof logInSchema>) => {
    if (chadData.email === data.email && chadData.password === data.password) {
      setIsLoggedIn(true);
      router.push("/store");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-secondary">
                Email
              </FormLabel>

              <FormControl>
                <Input
                  disabled={isLoading}
                  className="bg-[#F8F9FC] border-0 focus-visible:ring-0 text-[#030E16] 
              focus-visible:ring-offset-0 rounded-[4px] placeholder:text-[#C3CAD5] text-md pl-[17px] pr-[10px]"
                  placeholder="megachad@trychad.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-secondary">
                Password
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Input
                    disabled={isLoading}
                    type={showPassword ? "text" : "password"}
                    className="bg-[#F8F9FC] border-0 focus-visible:ring-0 text-[#030E16] 
              focus-visible:ring-offset-0 rounded-[4px] placeholder:text-[#C3CAD5] text-md pl-[17px] pr-[10px]"
                    placeholder="Enter password"
                    {...field}
                  />
                  <Button
                    className="absolute right-[2%] top-[50%] translate-y-[-50%] size-5"
                    type="button"
                    variant="link"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        {error && (
          <p className="text-xs text-red-500 w-full text-center">{error}</p>
        )}
        <div className="flex flex-col items-center justify-center gap-4">
          <Button className=" rounded-[8px] p-[11px] w-full" type="submit">
            Login
          </Button>

          <div className="flex items-center gap-1 text-[12px]">
            <p className=" text-[#4F637D]">Already have an account?</p>
            <Button
              className="text-[#32ABF2] transition p-0 text-sm"
              type="button"
              variant="link"
            >
              <Link href="/sign-up/welcome">Sign up</Link>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
