"use server";

import  db  from "@/db/drizzle";
import { registrations } from "@/db/schema";
import { desc, sql, count, eq } from "drizzle-orm";
import { cookies } from "next/headers";

const ADMIN_CODE = process.env.ADMIN_ACCESS_CODE || "AYBCIF2026";
const ADMIN_COOKIE_NAME = "admin_access";

export async function verifyAdminCode(code: string): Promise<{ success: boolean; message: string }> {
  if (code === ADMIN_CODE) {
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, "verified", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return { success: true, message: "Access granted" };
  }
  return { success: false, message: "Invalid access code" };
}

export async function checkAdminAccess(): Promise<boolean> {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get(ADMIN_COOKIE_NAME);
  return adminCookie?.value === "verified";
}

export async function logoutAdmin(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

export async function getRegistrationStats() {
  // Total registrations
  const totalResult = await db.select({ count: count() }).from(registrations);
  const total = totalResult[0]?.count || 0;

  // Free vs Paid
  const freeResult = await db
    .select({ count: count() })
    .from(registrations)
    .where(eq(registrations.ticketType, "free"));
  const freeCount = freeResult[0]?.count || 0;

  const paidResult = await db
    .select({ count: count() })
    .from(registrations)
    .where(eq(registrations.ticketType, "paid"));
  const paidCount = paidResult[0]?.count || 0;

  // Today's registrations
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayResult = await db
    .select({ count: count() })
    .from(registrations)
    .where(sql`${registrations.createdAt} >= ${today}`);
  const todayCount = todayResult[0]?.count || 0;

  // Category breakdown
  const categoryStats = await db
    .select({
      category: registrations.category,
      count: count(),
    })
    .from(registrations)
    .groupBy(registrations.category);

  // Daily registrations for the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const dailyStatsRaw = await db
    .select({
      date: sql<string>`DATE(${registrations.createdAt})`,
      count: count(),
    })
    .from(registrations)
    .where(sql`${registrations.createdAt} >= ${thirtyDaysAgo}`)
    .groupBy(sql`DATE(${registrations.createdAt})`)
    .orderBy(sql`DATE(${registrations.createdAt})`);

  // Fill in missing days
  const dailyStats = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(new Date().getDate() - i);
    const dateStr = d.toISOString().split("T")[0]; // YYYY-MM-DD

    const record = dailyStatsRaw.find((r) => {
        // Handle potential different date formats from DB driver
        const rDate = typeof r.date === 'string' ? r.date : new Date(r.date).toISOString().split('T')[0];
        return rDate === dateStr;
    });

    dailyStats.push({
      date: dateStr,
      count: record ? record.count : 0,
    });
  }

  // Confirmation status
  const confirmedResult = await db
    .select({ count: count() })
    .from(registrations)
    .where(eq(registrations.confirmationSent, true));
  const confirmedCount = confirmedResult[0]?.count || 0;

  return {
    total,
    freeCount,
    paidCount,
    todayCount,
    confirmedCount,
    pendingCount: total - confirmedCount,
    categoryStats: categoryStats.map((c) => ({
      name: c.category,
      value: c.count,
    })),
    dailyStats: dailyStats,
    ticketStats: [
      { name: "Free", value: freeCount },
      { name: "Paid", value: paidCount },
    ],
  };
}

export async function getAllRegistrations() {
  const allRegistrations = await db
    .select()
    .from(registrations)
    .orderBy(desc(registrations.createdAt));

  return allRegistrations;
}

export async function getRegistrationsForExport() {
  const allRegistrations = await db
    .select({
      id: registrations.id,
      firstName: registrations.firstName,
      lastName: registrations.lastName,
      email: registrations.email,
      phone: registrations.phone,
      organization: registrations.organization,
      role: registrations.role,
      category: registrations.category,
      ticketType: registrations.ticketType,
      confirmationSent: registrations.confirmationSent,
      createdAt: registrations.createdAt,
    })
    .from(registrations)
    .orderBy(desc(registrations.createdAt));

  return allRegistrations.map((reg) => ({
    ID: reg.id,
    "First Name": reg.firstName,
    "Last Name": reg.lastName,
    Email: reg.email,
    Phone: reg.phone || "N/A",
    Organization: reg.organization || "N/A",
    Role: reg.role || "N/A",
    Category: reg.category,
    "Ticket Type": reg.ticketType,
    "Confirmation Sent": reg.confirmationSent ? "Yes" : "No",
    "Registered At": reg.createdAt?.toISOString() || "N/A",
  }));
}
