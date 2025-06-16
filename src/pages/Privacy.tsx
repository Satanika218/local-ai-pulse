import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const Privacy = () => (
  <div className="min-h-screen bg-brand-navy">
    <Navigation />

    {/* Hero Section */}
    <div className="bg-brand-navy-light py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Privacy Policy
      </h1>
      <p className="text-xl text-brand-silver max-w-3xl mx-auto">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal information.
      </p>
    </div>

    {/* Privacy Policy Content */}
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <Card className="bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Information We Collect
          </CardTitle>
          <CardDescription className="text-brand-silver">
            We collect information to provide better services to all our users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver">
            <li>
              Personal Information: Name, email address, phone number, etc.
            </li>
            <li>
              Usage Data: Information about how you use our website and
              services.
            </li>
            <li>
              Cookies: Small files stored on your device to track your
              preferences.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            How We Use Your Information
          </CardTitle>
          <CardDescription className="text-brand-silver">
            We use your information to improve our services and personalize
            your experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver">
            <li>
              To provide and maintain our services.
            </li>
            <li>
              To personalize your experience.
            </li>
            <li>
              To communicate with you about updates and promotions.
            </li>
            <li>
              To analyze and improve our services.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Data Security
          </CardTitle>
          <CardDescription className="text-brand-silver">
            We take reasonable measures to protect your information from
            unauthorized access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver">
            <li>
              Encryption: We use encryption to protect your data during
              transmission.
            </li>
            <li>
              Access Control: We restrict access to your personal information to
              authorized personnel.
            </li>
            <li>
              Regular Audits: We conduct regular security audits to identify and
              address vulnerabilities.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8 bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Your Rights
          </CardTitle>
          <CardDescription className="text-brand-silver">
            You have the right to access, correct, and delete your personal
            information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-brand-silver">
            <li>
              Access: You can request a copy of your personal information.
            </li>
            <li>
              Correction: You can request to correct any inaccuracies in your
              personal information.
            </li>
            <li>
              Deletion: You can request to delete your personal information.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <Footer />
    <ChatbotLauncher />
  </div>
);

export default Privacy;
