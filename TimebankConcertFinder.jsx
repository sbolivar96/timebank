import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Mic2 } from "lucide-react";

const fakeEvents = [
  {
    id: 1,
    title: "Sunset Acoustic Jam",
    date: "2025-04-18",
    location: "Lincoln Park, Chicago",
    type: "Open Mic",
    time: "6:00 PM",
  },
  {
    id: 2,
    title: "Electro Timewarp Festival",
    date: "2025-04-20",
    location: "Navy Pier, Chicago",
    type: "Concert",
    time: "9:00 PM",
  },
  {
    id: 3,
    title: "Jazz Night at the Loop",
    date: "2025-04-22",
    location: "The Loop, Chicago",
    type: "Open Mic",
    time: "8:30 PM",
  },
  {
    id: 4,
    title: "Funkadelic Timebank Jam",
    date: "2025-04-25",
    location: "Logan Square, Chicago",
    type: "Concert",
    time: "7:30 PM",
  },
];

export default function TimebankConcertFinder() {
  const [query, setQuery] = useState("");

  const filteredEvents = fakeEvents.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase()) ||
    event.location.toLowerCase().includes(query.toLowerCase()) ||
    event.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🎤 Timebank Concert & Open Mic Hub</h1>
      <p className="mb-6 text-gray-600">
        Discover made-up concerts and open mic events near you. It's a musical multiverse.
      </p>
      <Input
        placeholder="Search by name, type, or location..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar size={16} />
                <span>{event.date} at {event.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin size={16} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Mic2 size={16} />
                <span>{event.type}</span>
              </div>
              <Button className="mt-3">Claim Timebank Credit</Button>
            </CardContent>
          </Card>
        ))}
        {filteredEvents.length === 0 && <p>No events found. Try a different keyword!</p>}
      </div>
    </div>
  );
}