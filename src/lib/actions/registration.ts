"use server";

import { Resend } from "resend";
import db from "@/db/drizzle";
import { registrations, type NewRegistration } from "@/db/schema";
import RegistrationConfirmationEmail from "@/emails/registration-confirmation";
import { eq } from "drizzle-orm";

const resend = new Resend(process.env.RESEND_API_KEY);
// Use the correct env variable name
const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@resend.dev";

export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    organization?: string;
    role?: string;
    category: string;
    ticketType: "free" | "paid";
}

export interface RegistrationResult {
    success: boolean;
    message: string;
    registrationId?: number;
}

/**
 * Register a new user for AYBCIF 2026
 * Saves to database and sends confirmation email
 */
export async function registerUser(
    formData: RegistrationFormData
): Promise<RegistrationResult> {
    try {
        // Check if email already exists
        const existingRegistration = await db
            .select()
            .from(registrations)
            .where(eq(registrations.email, formData.email))
            .limit(1);

        if (existingRegistration.length > 0) {
            return {
                success: false,
                message: "This email is already registered for AYBCIF 2026.",
            };
        }

        // Insert new registration
        const newRegistration: NewRegistration = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone || null,
            organization: formData.organization || null,
            role: formData.role || null,
            category: formData.category,
            ticketType: formData.ticketType,
            confirmationSent: false,
        };

        const [inserted] = await db
            .insert(registrations)
            .values(newRegistration)
            .returning({ id: registrations.id });

        // Send confirmation email
        const emailResult = await sendConfirmationEmail({
            id: inserted.id,
            ...formData,
        });

        // Update confirmation sent status
        if (emailResult.success) {
            await db
                .update(registrations)
                .set({
                    confirmationSent: true,
                    confirmationSentAt: new Date(),
                })
                .where(eq(registrations.id, inserted.id));
        }

        return {
            success: true,
            message: emailResult.success
                ? "Registration successful! Check your email for confirmation."
                : "Registration successful! However, we couldn't send the confirmation email. Please contact us if you don't receive it.",
            registrationId: inserted.id,
        };
    } catch (error) {
        console.error("Registration error:", error);
        return {
            success: false,
            message: "An error occurred during registration. Please try again.",
        };
    }
}

/**
 * Send confirmation email to registered user
 */
async function sendConfirmationEmail(
    user: RegistrationFormData & { id: number }
): Promise<{ success: boolean; error?: string }> {
    try {
        const { error } = await resend.emails.send({
            from: `AYBCIF 2026 <${fromEmail}>`,
            to: user.email,
            subject: `Welcome to AYBCIF 2026, ${user.firstName}! 🌍`,
            react: RegistrationConfirmationEmail({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                ticketType: user.ticketType,
                category: user.category,
                organization: user.organization,
            }),
        });

        if (error) {
            console.error("Email send error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error("Email error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}
