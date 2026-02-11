"use client";

import React from "react"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AmenityManagerProps {
  buildingId: string;
  amenities: any[];
  onRefresh: () => void;
}

export default function AmenityManager({
  buildingId,
  amenities,
  onRefresh,
}: AmenityManagerProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    capacity: "1",
  });
  const [creating, setCreating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);

    try {
      const res = await fetch("/api/amenities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          buildingId,
          name: formData.name,
          capacity: parseInt(formData.capacity),
        }),
      });

      if (res.ok) {
        setFormData({ name: "", capacity: "1" });
        setShowForm(false);
        onRefresh();
      }
    } catch (error) {
      console.error("[v0] Failed to create amenity:", error);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Amenities</h2>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Amenity"}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Amenity Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g., Swimming Pool"
                  required
                />
              </div>
              <div>
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  min="1"
                  value={formData.capacity}
                  onChange={(e) =>
                    setFormData({ ...formData, capacity: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" disabled={creating}>
                {creating ? "Creating..." : "Create Amenity"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {amenities.map((amenity) => (
          <Card key={amenity.id}>
            <CardHeader>
              <CardTitle className="text-lg">{amenity.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Capacity: {amenity.capacity}
              </p>
              <p className="text-sm text-muted-foreground">
                Active Bookings: {amenity.bookings?.length || 0}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {amenities.length === 0 && !showForm && (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">No amenities yet</p>
        </Card>
      )}
    </div>
  );
}
