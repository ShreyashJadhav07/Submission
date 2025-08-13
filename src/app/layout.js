
import "./globals.css";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import { DashboardProvider } from "@/context/DashBoardContext";

export const metadata = {
  title: "Financial Dashboard",
  description: "Next.js + Tailwind + shadcn Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background text-foreground">
      <body className="min-h-screen font-sans antialiased">
        <DashboardProvider>
          <Layout>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "var(--card)",
                  color: "var(--card-foreground)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                },
              }}
            />
            {children}
          </Layout>
        </DashboardProvider>
      </body>
    </html>
  );
}
