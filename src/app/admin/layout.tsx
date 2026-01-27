import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | AYBCIF 2026",
  description: "Admin dashboard for managing AYBCIF 2026 registrations",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
