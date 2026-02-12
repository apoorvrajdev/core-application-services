import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Building Amenity Management
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Intelligent scheduling. One-click booking. Zero friction.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Resident Booking Card */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle>Book an Amenity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Quick, intuitive booking interface for residents. Book in under
                30 seconds.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Real-time availability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Instant confirmation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Manage bookings
                </li>
              </ul>
              <Link href="/book" className="block pt-2">
                <Button className="w-full">Start Booking</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Admin Dashboard Card */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle>Admin Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Complete management suite for building operators and admins.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Amenity configuration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Booking overview
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Rules management
                </li>
              </ul>
              <Link href="/book/admin" className="block pt-2">
                <Button className="w-full">Admin Panel</Button>
              </Link>
            </CardContent>
          </Card>

          {/* API Documentation Card */}
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle>Developer API</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                RESTful API for integrations and custom implementations.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Booking endpoints
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Amenity management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span> Event webhooks
                </li>
              </ul>
              <Button disabled className="w-full bg-transparent" variant="outline">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Info */}
        <div className="mt-12 rounded-lg bg-muted p-8">
          <h2 className="text-2xl font-bold mb-4">Architecture Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Core Services</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Scheduling Engine</li>
                <li>• Policy & Rules Engine</li>
                <li>• Notification Service</li>
                <li>• User & Building Management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Event-driven plugin system</li>
                <li>• Multi-tenant architecture</li>
                <li>• Real-time conflict detection</li>
                <li>• Audit logging</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
