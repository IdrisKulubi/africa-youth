import { pgTable, serial, text, boolean, timestamp, varchar } from "drizzle-orm/pg-core";

// Registrations table for AYBCIF 2026 event
export const registrations = pgTable("registrations", {
    id: serial("id").primaryKey(),

    // Personal Information
    firstName: varchar("first_name", { length: 100 }).notNull(),
    lastName: varchar("last_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    phone: varchar("phone", { length: 50 }),

    // Professional Information
    organization: varchar("organization", { length: 255 }),
    role: varchar("role", { length: 100 }),

    // Registration Details
    category: varchar("category", { length: 50 }).notNull(), // student, professional, entrepreneur, ngo, government, media, contestant
    ticketType: varchar("ticket_type", { length: 20 }).notNull().default("free"), // free or paid

    // Status Tracking
    confirmationSent: boolean("confirmation_sent").default(false),
    confirmationSentAt: timestamp("confirmation_sent_at"),

    // Timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Type inference for TypeScript
export type Registration = typeof registrations.$inferSelect;
export type NewRegistration = typeof registrations.$inferInsert;
