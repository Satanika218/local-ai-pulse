
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gdprConsent: false,
    marketingConsent: false
  });

  // Calendar state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "GDPR Consent Required",
        description: "Please consent to data processing to submit your inquiry.",
        variant: "destructive",
      });
      return;
    }

    const submissionData = {
      ...formData,
      selectedDate: selectedDate?.toISOString(),
      selectedTime,
      submittedAt: new Date().toISOString()
    };

    console.log("Form submitted", submissionData);
    
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      gdprConsent: false,
      marketingConsent: false
    });
    setSelectedDate(null);
    setSelectedTime("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateAvailable = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && day >= 1 && day <= 5; // Monday to Friday
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 17 && minute > 0) break;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isAvailable = isDateAvailable(date);
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      days.push(
        <button
          key={day}
          onClick={() => isAvailable && setSelectedDate(date)}
          disabled={!isAvailable}
          className={`h-10 w-10 rounded-lg text-sm font-medium transition-all duration-300 ${
            isSelected
              ? 'bg-blue-600 text-white'
              : isAvailable
              ? 'bg-green-100 text-green-800 hover:bg-green-200'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-orange-600 to-red-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI and digital solutions?
            </p>
            <p className="text-lg text-orange-200 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help you save time, reduce costs, and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">Hello@11thtemplesolutions.com</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-red-50 border-red-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">+44 7312 190 728</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-yellow-50 border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600">Newtown, Powys</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Tell us about your business and how we can help..."
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="gdprConsent"
                        checked={formData.gdprConsent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))
                        }
                        className="mt-1"
                      />
                      <label htmlFor="gdprConsent" className="text-sm text-gray-600">
                        I consent to the processing of my personal data in accordance with the 
                        <a href="/privacy" className="text-orange-600 hover:underline ml-1">Privacy Policy</a>. *
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, marketingConsent: checked as boolean }))
                        }
                        className="mt-1"
                      />
                      <label htmlFor="marketingConsent" className="text-sm text-gray-600">
                        I would like to receive marketing communications about services and offers.
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Book Consultation Calendar */}
            <Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="text-2xl font-bold text-center">Book Your Free Consultation</CardTitle>
                <p className="text-blue-100 text-center">Schedule a 30-minute call to discuss your needs</p>
              </CardHeader>
              <CardContent className="p-8">
                {/* Calendar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => navigateMonth('prev')}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ArrowLeft className="h-5 w-5 text-gray-600" />
                    </button>
                    
                    <h3 className="text-lg font-semibold text-gray-800">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h3>
                    
                    <button
                      onClick={() => navigateMonth('next')}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ArrowRight className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Available Times for {selectedDate.toDateString()}
                    </h4>
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                      {generateTimeSlots().map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 text-sm rounded-lg border transition-all duration-300 ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Legend */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Legend:</h4>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 border border-green-200 rounded mr-2"></div>
                      <span className="text-gray-600">Available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                      <span className="text-gray-600">Selected</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-100 rounded mr-2"></div>
                      <span className="text-gray-600">Unavailable</span>
                    </div>
                  </div>
                </div>

                {/* Confirmation */}
                {selectedDate && selectedTime && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-800">Consultation Scheduled</span>
                    </div>
                    <p className="text-blue-700 text-sm">
                      {selectedDate.toDateString()} at {selectedTime}
                    </p>
                    <p className="text-blue-600 text-xs mt-2">
                      We'll contact you to confirm details and send calendar invite.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Contact;
