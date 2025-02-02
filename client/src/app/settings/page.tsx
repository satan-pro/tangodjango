"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z.string().min(1, { message: "This field cannot be empty." }).email("This is not a valid email."),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      }),
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  bio: "I'm a software developer based in India.",
  urls: [{ value: "https://example.com" }],
}

export default function SettingsPage() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    console.log(data)
  }

  return (
    <div className="space-y-6 p-4 w-[75vw]">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      <Separator />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your profile information.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="gauravgupta" {...field} />
                      </FormControl>
                      <FormDescription>This is your public display name.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@email.com" {...field} />
                      </FormControl>
                      <FormDescription>We'll use this email to send you notifications.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save changes
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Manage your notification and display preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Email Notifications</label>
                <p className="text-sm text-muted-foreground">Receive email about your account activity.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">SMS Notifications</label>
                <p className="text-sm text-muted-foreground">Receive SMS alerts about your loans.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Language</label>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="mr">Marathi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

