import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-background px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Caution
        </h1>
        <p className="text-muted-foreground md:text-xl">
          to see history you need to login.
        </p>
        <form className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
            required
          />
          <Button type="submit">LogIn</Button>
        </form>
      </div>
    </div>
  );
}
