import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.sheetbest.com/sheets/09dc0312-8593-4df5-99ae-a77d4a845b80", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to SheetBest");
      }

      const result = await response.json();
      console.log(result);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] py-12 px-4">
        <div className="container mx-auto">
          <div className="w-full max-w-md mx-auto p-6 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <CheckCircle2 className="h-12 w-12 text-[#5B5DDC]" />
              <h2 className="text-2xl font-bold text-white">Message Sent!</h2>
              <p className="text-gray-300">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
                className="bg-[#5B5DDC] hover:bg-[#4A4CB8] text-white"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12 px-4">
      <div className="container mx-auto">
        <div className="w-full max-w-3xl mx-auto">
          <div className="bg-[#121212] rounded-lg p-6 md:p-8 border border-[#2A2A2A]">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="text-[#5B5DDC]">Contact</span> Us
              </h2>
              <p className="text-gray-300">
                Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-[#1A1A1A] border-[#333333] text-white placeholder:text-gray-500 focus-visible:ring-[#5B5DDC] focus-visible:border-[#5B5DDC]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            type="email"
                            {...field}
                            className="bg-[#1A1A1A] border-[#333333] text-white placeholder:text-gray-500 focus-visible:ring-[#5B5DDC] focus-visible:border-[#5B5DDC]"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">Subject (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What is this regarding?"
                          {...field}
                          className="bg-[#1A1A1A] border-[#333333] text-white placeholder:text-gray-500 focus-visible:ring-[#5B5DDC] focus-visible:border-[#5B5DDC]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          {...field}
                          className="min-h-[150px] bg-[#1A1A1A] border-[#333333] text-white placeholder:text-gray-500 focus-visible:ring-[#5B5DDC] focus-visible:border-[#5B5DDC]"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#5B5DDC] hover:bg-[#4A4CB8] text-white transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
