import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Target,
  DollarSign,
  Clock,
  Package,
  Truck,
  Users,
  Zap,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export function Analytics() {
  const kpiData = [
    {
      title: "Inventory Accuracy",
      value: "94.2%",
      change: "+2.3%",
      trend: "up",
      target: "95%",
      progress: 94.2
    },
    {
      title: "Demand Forecast Accuracy",
      value: "91.8%",
      change: "+1.7%",
      trend: "up",
      target: "90%",
      progress: 91.8
    },
    {
      title: "Delivery Efficiency",
      value: "96.1%",
      change: "+3.2%",
      trend: "up",
      target: "95%",
      progress: 96.1
    },
    {
      title: "Inter-Store Success Rate",
      value: "89.5%",
      change: "-0.8%",
      trend: "down",
      target: "90%",
      progress: 89.5
    }
  ];

  const costSavings = [
    {
      category: "Inventory Optimization",
      amount: "$24,350",
      percentage: "15.2%",
      period: "This month"
    },
    {
      category: "Delivery Route Optimization",
      amount: "$18,750",
      percentage: "12.8%",
      period: "This month"
    },
    {
      category: "Inter-Store Transfers",
      amount: "$12,200",
      percentage: "8.3%",
      period: "This month"
    },
    {
      category: "Reduced Stockouts",
      amount: "$31,500",
      percentage: "22.1%",
      period: "This month"
    }
  ];

  const weeklyTrends = [
    { day: "Mon", demand: 2847, inventory: 87, deliveries: 8 },
    { day: "Tue", demand: 3156, inventory: 85, deliveries: 12 },
    { day: "Wed", demand: 2934, inventory: 83, deliveries: 10 },
    { day: "Thu", demand: 3298, inventory: 81, deliveries: 15 },
    { day: "Fri", demand: 3756, inventory: 79, deliveries: 18 },
    { day: "Sat", demand: 4123, inventory: 77, deliveries: 14 },
    { day: "Sun", demand: 3467, inventory: 75, deliveries: 9 }
  ];

  const systemPerformance = [
    {
      component: "Demand Forecasting AI",
      uptime: "99.8%",
      responseTime: "120ms",
      accuracy: "94.2%",
      status: "optimal"
    },
    {
      component: "Inventory Management",
      uptime: "99.9%",
      responseTime: "85ms",
      accuracy: "96.1%",
      status: "optimal"
    },
    {
      component: "Route Optimization",
      uptime: "98.7%",
      responseTime: "340ms",
      accuracy: "91.8%",
      status: "good"
    },
    {
      component: "Inter-Store Network",
      uptime: "99.2%",
      responseTime: "200ms",
      accuracy: "89.5%",
      status: "good"
    }
  ];

  const insights = [
    {
      type: "opportunity",
      title: "Peak Hour Optimization",
      description: "Demand spikes at 5-7 PM could be better managed with predictive restocking",
      impact: "Potential 12% reduction in stockouts",
      actionable: true
    },
    {
      type: "success",
      title: "Inter-Store Efficiency",
      description: "Collaboration with Store #4831 has improved by 23% this month",
      impact: "Saved $4,200 in emergency deliveries",
      actionable: false
    },
    {
      type: "warning",
      title: "Delivery Bottleneck",
      description: "Thursday deliveries consistently delayed due to traffic patterns",
      impact: "Average 45-minute delay",
      actionable: true
    },
    {
      type: "opportunity",
      title: "Seasonal Preparation",
      description: "Back-to-school season approaching - increase tech inventory",
      impact: "Projected 35% demand increase",
      actionable: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics & Insights</h2>
          <p className="text-muted-foreground">
            Comprehensive performance analysis and AI-driven recommendations
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-green-600 border-green-600">
            <Zap className="h-3 w-3 mr-1" />
            Real-time Data
          </Badge>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Key Performance Indicators</span>
          </CardTitle>
          <CardDescription>
            Track system performance against targets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm">{kpi.title}</h3>
                  <div className="flex items-center space-x-1">
                    {kpi.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Target: {kpi.target}</span>
                    <span>{kpi.progress}%</span>
                  </div>
                  <Progress value={kpi.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics Tabs */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="savings">Cost Savings</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Trends</CardTitle>
              <CardDescription>7-day performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {weeklyTrends.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-6">
                      <div className="font-medium w-12">{day.day}</div>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span>{day.demand} customers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="h-4 w-4 text-green-500" />
                          <span>{day.inventory}% inventory</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-orange-500" />
                          <span>{day.deliveries} deliveries</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={day.inventory} className="w-24 h-2" />
                      <span className="text-sm font-medium">{day.inventory}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Cost Savings Breakdown</span>
              </CardTitle>
              <CardDescription>AI-driven cost reductions across operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {costSavings.map((saving, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{saving.category}</h3>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {saving.percentage}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">{saving.amount}</div>
                      <div className="text-sm text-muted-foreground">{saving.period}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-green-800">Total Monthly Savings</h3>
                    <p className="text-sm text-green-600">Compared to baseline operations</p>
                  </div>
                  <div className="text-3xl font-bold text-green-800">$86,800</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>Real-time monitoring of AI system components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemPerformance.map((component, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{component.component}</h3>
                      <Badge 
                        variant={component.status === 'optimal' ? 'outline' : 'secondary'}
                        className={component.status === 'optimal' ? 'text-green-600 border-green-600' : 'text-blue-600 border-blue-600'}
                      >
                        {component.status === 'optimal' ? 'Optimal' : 'Good'}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Uptime</div>
                        <div className="font-medium">{component.uptime}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Response Time</div>
                        <div className="font-medium">{component.responseTime}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Accuracy</div>
                        <div className="font-medium">{component.accuracy}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Insights</CardTitle>
              <CardDescription>Actionable recommendations from data analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        {insight.type === 'opportunity' && <TrendingUp className="h-5 w-5 text-blue-500" />}
                        {insight.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {insight.type === 'warning' && <AlertCircle className="h-5 w-5 text-orange-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{insight.title}</h3>
                          <Badge 
                            variant={insight.type === 'opportunity' ? 'default' : 
                                   insight.type === 'success' ? 'outline' : 'secondary'}
                            className={insight.type === 'opportunity' ? 'bg-blue-100 text-blue-700' : 
                                     insight.type === 'success' ? 'text-green-600 border-green-600' : 
                                     'text-orange-600 border-orange-600'}
                          >
                            {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">{insight.impact}</div>
                          {insight.actionable && (
                            <Button size="sm" variant="outline">
                              Take Action
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}