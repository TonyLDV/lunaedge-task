"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useChadContext } from "@/store/context";
import Link from "next/link";
import { signUpSchema } from "@/lib/schema";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isDataChanged, setIsDataChanged] = useState(false);

  const router = useRouter();
  const { updateChadData, setActualStep, chadData, actualStep } =
    useChadContext();

  const defaultValues = {
    email: chadData.email || "",
    name: chadData.name || "",
    password: chadData.password || "",
  };

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  useEffect(() => {
    const subscription = form.watch((formData) => {
      const hasChanges = Object.keys(defaultValues).some(
        (key) =>
          defaultValues[key as keyof typeof defaultValues] !==
          formData[key as keyof typeof formData]
      );
      setIsDataChanged(hasChanges);
    });

    return () => subscription.unsubscribe();
  }, [form.watch, defaultValues]);

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    if (isDataChanged) {
      setIsLoading(true);
      setTimeout(() => {
        updateChadData(data);

        if (actualStep < 1) {
          setActualStep(1);
        }
        setIsLoading(false);

        router.push("/sign-up/connect-shopify");
      }, 2000);
    } else {
      router.push("/sign-up/connect-shopify");
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold text-secondary">
                Your name
              </FormLabel>

              <FormControl>
                <Input
                  disabled={isLoading}
                  className="bg-[#F8F9FC] border-0 focus-visible:ring-0 text-[#030E16] 
                  focus-visible:ring-offset-0 rounded-[4px] placeholder:text-[#C3CAD5] text-md pl-[17px] pr-[10px]"
                  placeholder="Megachad"
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
        <div className="flex flex-col items-center justify-center gap-4">
          <Button className=" rounded-[8px] p-[11px] w-full" type="submit">
            {isDataChanged ? "Create account" : "Continue"}
            {isLoading && <Loader2 className="size-4 animate-spin" />}
          </Button>

          <div className="flex items-center gap-1 text-[12px]">
            <p className=" text-[#4F637D]">Already have an account?</p>
            <Button
              className="text-[#32ABF2] transition p-0 text-sm"
              type="button"
              variant="link"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
