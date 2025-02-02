import InfoSection from "./info";
import SignUpForm from "./login";


export default function SignUpPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white" suppressHydrationWarning>
      <div className="grid h-full w-full grid-cols-2">
        <div className="flex items-center justify-center px-16">
          <SignUpForm />
        </div>
        <InfoSection />
      </div>
    </div>
  )
}