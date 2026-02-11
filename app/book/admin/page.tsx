import { Suspense } from "react";
import AdminDashboard from "@/components/admin/dashboard";
import { Card } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Building Management
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <Card className="p-8">
              <p>Loading dashboard...</p>
            </Card>
          }
        >
          <AdminDashboard />
        </Suspense>
      </main>
    </div>
  );
}
