"use client";

import { RegisterInputs } from "../types";
import { registerUserSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OAuthButtons from "./OAuthButtons";
import { useLoadingStore } from "@/stores/loading";
import { showPromiseToast } from "@/lib/toastHandler";

function RegisterUserForm() {
  const { isLoading, setLoading } = useLoadingStore();
  const router = useRouter();

  const form = useForm<RegisterInputs>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: RegisterInputs) {
    const { confirmPassword, ...body } = values;
    setLoading(true);

    const registrationPromise = new Promise(async (resolve, _) => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(body);

      // On success
      form.reset();
      router.push("/verify-email");

      resolve("Registration successful");
      setLoading(false);
    });

    showPromiseToast(registrationPromise, "Registering your account");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="full name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="username..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="email"
                    placeholder="email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="password"
                    placeholder="password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="password"
                    placeholder="confirm password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          Register User Account
        </Button>
        <OAuthButtons />
        <FormDescription className="flex flex-col">
          Already have an account?
          <span>
            <Button variant="link" className="px-2" asChild>
              <Link href={"/login"}>login</Link>
            </Button>
            or
            <Button variant="link" className="px-2" asChild>
              <Link href={"/register-org"}>register as organization</Link>
            </Button>
          </span>
        </FormDescription>
      </form>
    </Form>
  );
}

export default RegisterUserForm;
