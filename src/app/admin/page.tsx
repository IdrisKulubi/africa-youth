"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockKeyIcon, SpinnerGapIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { toast } from "sonner";
import { verifyAdminCode } from "@/lib/actions/admin";

export default function AdminLoginPage() {
  const [code, setCode] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!code.trim()) {
      toast.error("Please enter the access code");
      return;
    }

    startTransition(async () => {
      const result = await verifyAdminCode(code);

      if (result.success) {
        toast.success("Access granted!");
        router.push("/admin/dashboard");
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-primary" weight="duotone" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Access</h1>
          <p className="text-muted-foreground mt-2">
            AYBCIF 2026 Registration Dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="code" className="flex items-center gap-2">
                <LockKeyIcon className="w-4 h-4" />
                Access Code
              </Label>
              <Input
                id="code"
                type="password"
                placeholder="Enter admin access code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="rounded-xl h-12 text-center text-lg tracking-widest"
                autoComplete="off"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isPending ? (
                <>
                  <SpinnerGapIcon className="w-5 h-5 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <LockKeyIcon className="w-5 h-5 mr-2" />
                  Access Dashboard
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Contact the event organizers if you need access.
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          © 2026 Africa Youth Business & Creative Innovation Forum
        </p>
      </div>
    </div>
  );
}
