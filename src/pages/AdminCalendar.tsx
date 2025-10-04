import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Plus, Edit, Trash2 } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";

// This page is designed to be hidden from public access
// Only accessible via direct URL or admin authentication
const AdminCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Client Consultation - Tech Assessment",
      date: "2025-03-25",
      time: "14:00",
      duration: "60",
      client: "Welsh Manufacturing Ltd",
      type: "consultation",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Team Training Session",
      date: "2025-03-26",
      time: "10:00",
      duration: "120",
      client: "Internal",
      type: "training",
      status: "confirmed"
    },
    {
      id: 3,
      title: "AI Implementation Review",
      date: "2025-03-27",
      time: "15:30",
      duration: "90",
      client: "Border County Retail",
      type: "review",
      status: "pending"
    }
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    duration: "60",
    client: "",
    type: "consultation",
    status: "pending"
  });

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      const event = {
        id: events.length + 1,
        ...newEvent
      };
      setEvents([...events, event]);
      setNewEvent({
        title: "",
        date: "",
        time: "",
        duration: "60",
        client: "",
        type: "consultation",
        status: "pending"
      });
      setShowAddEvent(false);
    }
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "consultation": return "bg-blue-500";
      case "training": return "bg-green-500";
      case "review": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "text-green-600";
      case "pending": return "text-yellow-600";
      case "cancelled": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 purple-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Admin <span className="text-brand-lime">Calendar</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Manage your appointments and schedule efficiently
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              This page is for admin use only - not accessible to visitors
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Management Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Add New Event */}
            <Card className="lg:col-span-1 bg-white shadow-xl">
              <CardHeader className="bg-brand-purple text-white">
                <CardTitle className="text-xl font-bold flex items-center">
                  <Plus className="mr-2 h-5 w-5" />
                  Add New Event
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      placeholder="Meeting title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                    <input
                      type="text"
                      value={newEvent.client}
                      onChange={(e) => setNewEvent({...newEvent, client: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      placeholder="Client name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                    <select
                      value={newEvent.type}
                      onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    >
                      <option value="consultation">Consultation</option>
                      <option value="training">Training</option>
                      <option value="review">Review</option>
                      <option value="meeting">Meeting</option>
                    </select>
                  </div>
                  
                  <Button 
                    onClick={addEvent}
                    className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold py-2 rounded-md transition-all duration-300"
                  >
                    Add Event
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Event List */}
            <Card className="lg:col-span-2 bg-white shadow-xl">
              <CardHeader className="bg-brand-navy text-white">
                <CardTitle className="text-xl font-bold flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)} mr-3`}></div>
                            <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4" />
                              {event.date} at {event.time}
                            </p>
                            <p className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {event.duration} minutes
                            </p>
                            {event.client && (
                              <p><strong>Client:</strong> {event.client}</p>
                            )}
                            <p className={`font-medium ${getStatusColor(event.status)}`}>
                              Status: {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => deleteEvent(event.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {events.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="mx-auto h-12 w-12 mb-4 opacity-50" />
                      <p>No events scheduled</p>
                      <p className="text-sm">Add your first event using the form on the left</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{events.length}</div>
                <div className="text-sm text-blue-800 font-medium">Total Events</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {events.filter(e => e.status === 'confirmed').length}
                </div>
                <div className="text-sm text-green-800 font-medium">Confirmed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {events.filter(e => e.status === 'pending').length}
                </div>
                <div className="text-sm text-yellow-800 font-medium">Pending</div>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {events.filter(e => e.type === 'consultation').length}
                </div>
                <div className="text-sm text-purple-800 font-medium">Consultations</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminCalendar;