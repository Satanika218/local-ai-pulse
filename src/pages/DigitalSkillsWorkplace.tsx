import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingDown, AlertTriangle, Award, CheckCircle, Brain, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalSkillsWorkplace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Brain className="h-16 w-16 text-emerald-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Skills for Life & The Workplace
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8">
              Empowering Powys workforces with essential digital competencies for the modern economy
            </p>
            <Link to="/consultation">
              <Button className="bg-emerald-400 text-emerald-900 hover:bg-emerald-300 font-bold py-4 px-8 text-lg">
                Lets Talk - Free 30min Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Crisis Statistics */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              The Digital Skills Crisis in Wales & Powys
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-red-600 to-red-800 border-red-500 text-white">
                <CardHeader className="text-center">
                  <AlertTriangle className="h-12 w-12 text-red-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">60%</CardTitle>
                  <CardDescription className="text-red-100">
                    UK workforce cannot complete 20 essential digital work tasks
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-orange-600 to-orange-800 border-orange-500 text-white">
                <CardHeader className="text-center">
                  <TrendingDown className="h-12 w-12 text-orange-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">11.3M</CardTitle>
                  <CardDescription className="text-orange-100">
                    UK adults lack full basic digital skills
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-600 to-yellow-800 border-yellow-500 text-white">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-yellow-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">23%</CardTitle>
                  <CardDescription className="text-yellow-100">
                    Wales residents lack basic digital skills
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-600 to-emerald-800 border-emerald-500 text-white">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 text-emerald-200 mx-auto mb-2" />
                  <CardTitle className="text-3xl font-bold">47%</CardTitle>
                  <CardDescription className="text-emerald-100">
                    UK businesses cite digital skills gaps as growth barrier
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Age Demographics</h3>
                <ul className="space-y-3 text-emerald-100">
                  <li className="flex justify-between">
                    <span>16-24 years:</span> 
                    <span className="text-green-400 font-bold">8% lack digital skills</span>
                  </li>
                  <li className="flex justify-between">
                    <span>25-34 years:</span> 
                    <span className="text-yellow-400 font-bold">12% lack digital skills</span>
                  </li>
                  <li className="flex justify-between">
                    <span>35-54 years:</span> 
                    <span className="text-orange-400 font-bold">18% lack digital skills</span>
                  </li>
                  <li className="flex justify-between">
                    <span>55+ years:</span> 
                    <span className="text-red-400 font-bold">43% lack digital skills</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Rural Wales Challenge</h3>
                <p className="text-emerald-100 mb-4">
                  Powys faces unique challenges with an aging population and traditional industries. 
                  Tourism, agriculture, and retail businesses struggle with:
                </p>
                <ul className="space-y-2 text-emerald-100">
                  <li>• Limited access to digital skills training</li>
                  <li>• Aging workforce resistant to change</li>
                  <li>• Poor broadband infrastructure in rural areas</li>
                  <li>• Seasonal workforce turnover</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 20 Essential Skills Framework */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              The 20 Essential Digital Work Tasks
            </h2>

            <div className="grid lg:grid-cols-5 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-500/30">
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                  <CardTitle className="text-white text-lg">Communicating</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-100 text-sm">
                  <p>Digital workplace communication, professional online accounts, collaborative tools</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 border-purple-500/30">
                <CardHeader className="text-center">
                  <Shield className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <CardTitle className="text-white text-lg">Handling Information</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-100 text-sm">
                  <p>Digital records, data management, cloud storage, version control</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-800/50 to-green-900/50 border-green-500/30">
                <CardHeader className="text-center">
                  <Award className="h-8 w-8 text-green-300 mx-auto mb-2" />
                  <CardTitle className="text-white text-lg">Transacting</CardTitle>
                </CardHeader>
                <CardContent className="text-green-100 text-sm">
                  <p>IT policies, secure sharing, digital transactions, compliance protocols</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-800/50 to-yellow-900/50 border-yellow-500/30">
                <CardHeader className="text-center">
                  <Brain className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                  <CardTitle className="text-white text-lg">Problem Solving</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-100 text-sm">
                  <p>Digital troubleshooting, online research, learning platforms, productivity tools</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-800/50 to-red-900/50 border-red-500/30">
                <CardHeader className="text-center">
                  <Shield className="h-8 w-8 text-red-300 mx-auto mb-2" />
                  <CardTitle className="text-white text-lg">Being Safe Online</CardTitle>
                </CardHeader>
                <CardContent className="text-red-100 text-sm">
                  <p>Cybersecurity awareness, software updates, secure networks, privacy protection</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              How We Build Digital Confidence
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 border-emerald-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Brain className="h-8 w-8 text-emerald-300" />
                    <CardTitle className="text-white">Technology-Enhanced Learning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-emerald-100">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Interactive digital skills assessment platforms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Personalized learning pathways</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Gamified progression tracking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Virtual reality workplace simulations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>AI-powered skills gap identification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-800/50 to-blue-800/50 border-teal-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-teal-300" />
                    <CardTitle className="text-white">Human-Centered Approach</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-teal-100">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>One-to-one mentoring and support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Age-appropriate training methods</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Confidence-building workshops</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Peer learning networks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Ongoing support and refresher training</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg p-8 border border-indigo-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Tech Workplace Champions Program</h3>
              <p className="text-emerald-100 mb-4">
                We create internal "Digital Champions" within your organization - employees who become 
                confident technology advocates and peer mentors. These champions help colleagues overcome 
                digital anxiety and build sustainable skills development within your team.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-white font-bold">Peer Support</h4>
                  <p className="text-emerald-100 text-sm">Champions provide ongoing help and encouragement</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold">Risk Reduction</h4>
                  <p className="text-emerald-100 text-sm">Prevent breaches, scams, and security incidents</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Award className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="text-white font-bold">Productivity Boost</h4>
                  <p className="text-emerald-100 text-sm">Maximize digital tools and efficiency gains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600/20 to-teal-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Workforce's Digital Confidence
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Don't let digital skills gaps hold your Powys business back. Create a confident, 
              capable, and secure digital workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button className="bg-emerald-400 text-emerald-900 hover:bg-emerald-300 font-bold py-4 px-8 text-lg">
                  <Brain className="h-5 w-5 mr-2" />
                  Free Skills Assessment
                </Button>
              </Link>
              <Link to="/digital-skills-quiz">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 font-bold py-4 px-8 text-lg">
                  <Award className="h-5 w-5 mr-2" />
                  Test Your Digital Skills
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalSkillsWorkplace;