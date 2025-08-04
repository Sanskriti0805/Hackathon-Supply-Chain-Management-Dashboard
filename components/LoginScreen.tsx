import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Package, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface LoginScreenProps {
  onLogin: (user: any) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock users for demonstration
  const mockUsers = [
    { username: 'admin', password: 'admin123', name: 'Dr. Sarah Chen', role: 'admin', department: 'Lab Administration' },
    { username: 'technician', password: 'tech123', name: 'Mike Rodriguez', role: 'technician', department: 'Electronics Lab' },
    { username: 'researcher', password: 'research123', name: 'Dr. Priya Sharma', role: 'researcher', department: 'R&D Department' },
    { username: 'engineer', password: 'eng123', name: 'Alex Thompson', role: 'engineer', department: 'Manufacturing' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = mockUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
      onLogin(user);
    } else {
      setError('Invalid username or password');
    }
    
    setIsLoading(false);
  };

  const handleDemoLogin = (demoUser: any) => {
    setUsername(demoUser.username);
    setPassword(demoUser.password);
    onLogin(demoUser);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Title */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <Package className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">ElecLab LIMS</h1>
          <p className="text-muted-foreground">Electronics Laboratory Inventory Management System</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access the inventory system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Demo Accounts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Demo Accounts</CardTitle>
            <CardDescription>
              Click any role below to instantly sign in and explore the system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockUsers.map((user) => (
              <Button
                key={user.username}
                variant="outline"
                className="w-full justify-between h-auto p-4"
                onClick={() => handleDemoLogin(user)}
              >
                <div className="text-left">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {user.role} • {user.department}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {user.username}
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* System Info */}
        <div className="text-center text-xs text-muted-foreground">
          <p>ElecLab LIMS v2.1.0 • Lab Network Connected</p>
          <p className="mt-1">For support, contact IT at ext. 2847</p>
        </div>
      </div>
    </div>
  );
}