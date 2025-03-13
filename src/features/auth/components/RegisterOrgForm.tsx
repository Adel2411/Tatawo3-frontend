"use client";

import { RegisterOrgInputs } from "../types";
import { registerOrgSchema } from "../schema";
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

function RegisterOrgForm() {
  const { isLoading, setLoading } = useLoadingStore();
  const router = useRouter();

  const form = useForm<RegisterOrgInputs>({
    resolver: zodResolver(registerOrgSchema),
    defaultValues: {
      restaurantName: "",
      businessEmail: "",
      address: "",
      contactNumber: "",
      ownerName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: RegisterOrgInputs) {
    const { confirmPassword, ...body } = values;
    setLoading(true);

    const registrationPromise = new Promise(async (resolve, _) => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(body);

      // On success
      form.reset();
      router.push("/verify-business");

      resolve("Registration successful");
      setLoading(false);
    });

    showPromiseToast(registrationPromise, "Registering your restaurant");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="restaurantName"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Restaurant Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="restaurant name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center gap-2">
            <FormField
              control={form.control}
              name="ownerName"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Owner Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="owner name..."
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
            name="businessEmail"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Business Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    type="email"
                    placeholder="business email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="contact number..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="restaurant address..."
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
          Register Restaurant
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
              <Link href={"/register-user"}>register as user</Link>
            </Button>
          </span>
        </FormDescription>
      </form>
    </Form>
  );
}

export default RegisterOrgForm;
