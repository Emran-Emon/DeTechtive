import { useState } from 'react';
import { LogOut, User, Mail, Shield, Clock, Activity, FileText, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { toast } from 'sonner';

interface DashboardProps {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [activeCase, setActiveCase] = useState('The Missing Database');

  const cases = [
    {
      id: 1,
      title: 'The Missing Database',
      status: 'active',
      priority: 'high',
      lastUpdate: '2 hours ago'
    },
    {
      id: 2,
      title: 'API Endpoint Mystery',
      status: 'investigating',
      priority: 'medium',
      lastUpdate: '1 day ago'
    },
    {
      id: 3,
      title: 'The Bug Report Case',
      status: 'closed',
      priority: 'low',
      lastUpdate: '3 days ago'
    }
  ];

  const recentActivity = [
    { action: 'Logged into system', time: 'Just now', icon: Shield },
    { action: 'Reviewed case files', time: '1 hour ago', icon: FileText },
    { action: 'Updated investigation notes', time: '2 hours ago', icon: Activity },
    { action: 'Searched evidence database', time: '3 hours ago', icon: Search }
  ];

  const handleLogout = () => {
    toast.success('Logged out successfully. Case closed.');
    onLogout();
  };

  const handleCaseClick = (caseTitle: string) => {
    setActiveCase(caseTitle);
    toast.info(`Switched to case: ${caseTitle}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-yellow-400 font-['Courier_Prime:Bold',sans-serif] text-3xl [text-shadow:rgba(0,0,0,0.5)_0px_2px_4px]">
              DeTECHtive
            </h1>
            <Badge variant="outline" className="text-yellow-400 border-yellow-400/50 bg-yellow-400/10">
              Detective Portal
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <User className="w-5 h-5 text-yellow-400" />
              <div className="text-left">
                <p className="text-white font-['Courier_Prime:Regular',sans-serif]">{user.name}</p>
                <p className="text-zinc-400 text-sm font-['Courier_Prime:Regular',sans-serif]">{user.email}</p>
              </div>
            </div>
            
            <Button
              onClick={handleLogout}
              variant="outline"
              className="bg-transparent border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300 font-['Courier_Prime:Regular',sans-serif]"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-white font-['Courier_Prime:Regular',sans-serif] text-4xl mb-2">
            Welcome back, Detective {user.name}
          </h2>
          <p className="text-zinc-400 font-['Courier_Prime:Regular',sans-serif] text-xl">
            You have {cases.filter(c => c.status !== 'closed').length} active investigations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Cases Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Cases */}
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-yellow-400 font-['Courier_Prime:Bold',sans-serif] text-2xl">
                  Active Investigations
                </CardTitle>
                <CardDescription className="text-zinc-400 font-['Courier_Prime:Regular',sans-serif]">
                  Track your ongoing cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cases.map((caseItem) => (
                  <div
                    key={caseItem.id}
                    onClick={() => handleCaseClick(caseItem.title)}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      activeCase === caseItem.title
                        ? 'bg-yellow-400/10 border-yellow-400/50'
                        : 'bg-zinc-800/30 border-zinc-700/50 hover:bg-zinc-800/50 hover:border-zinc-600'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-['Courier_Prime:Bold',sans-serif] text-lg">
                        {caseItem.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`${
                          caseItem.priority === 'high'
                            ? 'border-red-500 text-red-500 bg-red-500/10'
                            : caseItem.priority === 'medium'
                            ? 'border-orange-500 text-orange-500 bg-orange-500/10'
                            : 'border-green-500 text-green-500 bg-green-500/10'
                        }`}
                      >
                        {caseItem.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-400 font-['Courier_Prime:Regular',sans-serif] capitalize">
                        Status: {caseItem.status}
                      </span>
                      <span className="text-zinc-500 font-['Courier_Prime:Regular',sans-serif] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {caseItem.lastUpdate}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border-yellow-400/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-yellow-400 font-['Courier_Prime:Bold',sans-serif] text-4xl mb-2">
                      {cases.filter(c => c.status !== 'closed').length}
                    </p>
                    <p className="text-zinc-300 font-['Courier_Prime:Regular',sans-serif]">
                      Active Cases
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-400/20 to-green-400/5 border-green-400/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-green-400 font-['Courier_Prime:Bold',sans-serif] text-4xl mb-2">
                      {cases.filter(c => c.status === 'closed').length}
                    </p>
                    <p className="text-zinc-300 font-['Courier_Prime:Regular',sans-serif]">
                      Solved
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-400/20 to-blue-400/5 border-blue-400/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-blue-400 font-['Courier_Prime:Bold',sans-serif] text-4xl mb-2">
                      87%
                    </p>
                    <p className="text-zinc-300 font-['Courier_Prime:Regular',sans-serif]">
                      Success Rate
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Detective Profile */}
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-yellow-400 font-['Courier_Prime:Bold',sans-serif]">
                  Detective Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                  <User className="w-5 h-5 text-yellow-400" />
                  <div className="flex-1">
                    <p className="text-zinc-400 text-xs font-['Courier_Prime:Regular',sans-serif]">
                      Name
                    </p>
                    <p className="text-white font-['Courier_Prime:Regular',sans-serif]">
                      {user.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <div className="flex-1">
                    <p className="text-zinc-400 text-xs font-['Courier_Prime:Regular',sans-serif]">
                      Email
                    </p>
                    <p className="text-white font-['Courier_Prime:Regular',sans-serif] text-sm">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-lg">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <div className="flex-1">
                    <p className="text-zinc-400 text-xs font-['Courier_Prime:Regular',sans-serif]">
                      Rank
                    </p>
                    <p className="text-white font-['Courier_Prime:Regular',sans-serif]">
                      Senior Detective
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-yellow-400 font-['Courier_Prime:Bold',sans-serif]">
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-400/10 rounded-lg">
                          <activity.icon className="w-4 h-4 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-['Courier_Prime:Regular',sans-serif] text-sm">
                            {activity.action}
                          </p>
                          <p className="text-zinc-500 font-['Courier_Prime:Regular',sans-serif] text-xs">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                      {index < recentActivity.length - 1 && (
                        <Separator className="my-3 bg-zinc-800" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
