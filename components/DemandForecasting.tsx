import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Clock,
  Target,
  AlertCircle,
  CheckCircle,
  Brain,
  BarChart3
} from 'lucide-react';

export function DemandForecasting() {
  const forecasts = [
    {
      product: "iPhone 15 Pro",
      currentStock: 12,
      predictedDemand: 18,
      confidence: 94,
      trend: "up",
      urgency: "high",
      timeframe: "Next 4 hours"
    },
    {
      product: "Samsung Galaxy S24",
      currentStock: 25,
      predictedDemand: 8,
      confidence: 87,
      trend: "stable",
      urgency: "low",
      timeframe: "Next 4 hours"
    },
    {
      product: "AirPods Pro",
      currentStock: 4,
      predictedDemand: 12,
      confidence: 91,
      trend: "up",
      urgency: "high",
      timeframe: "Next 4 hours"
    },
    {
      product: "MacBook Air M3",
      currentStock: 8,
      predictedDemand: 3,
      confidence: 89,
      trend: "down",
      urgency: "low",
      timeframe: "Next 4 hours"
    }
  ];

  const hourlyPredictions = [
    { time: "2:00 PM", demand: 45, confidence: 92 },
    { time: "3:00 PM", demand: 67, confidence: 89 },
    { time: "4:00 PM", demand: 89, confidence: 94 },
    { time: "5:00 PM", demand: 124, confidence: 87 },
    { time: "6:00 PM", demand: 156, confidence: 91 },
    { time: "7:00 PM", demand: 142, confidence: 93 },
    { time: "8:00 PM", demand: 98, confidence: 88 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Demand Forecasting</h2>
          <p className="text-muted-foreground">
            AI-powered predictions for optimal inventory management
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-green-600 border-green-600">
            <Brain className="h-3 w-3 mr-1" />
            Model Active
          </Badge>
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Full Report
          </Button>
        </div>
      </div>

      {/* Hourly Demand Prediction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Hourly Demand Forecast</span>
          </CardTitle>
          <CardDescription>
            Real-time predictions for the next 6 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hourlyPredictions.map((prediction, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium">{prediction.time}</div>
                  <div className="text-lg font-bold">{prediction.demand}</div>
                  <span className="text-sm text-muted-foreground">customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-muted-foreground">
                    {prediction.confidence}% confidence
                  </div>
                  <Progress value={prediction.confidence} className="w-24 h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Product-Specific Forecasts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Product Demand Predictions</span>
          </CardTitle>
          <CardDescription>
            Individual product forecasts with recommended actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {forecasts.map((forecast, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold">{forecast.product}</h3>
                    <Badge 
                      variant={forecast.urgency === 'high' ? 'destructive' : 'outline'}
                      className={forecast.urgency === 'high' ? '' : 'text-green-600 border-green-600'}
                    >
                      {forecast.urgency === 'high' ? 'High Priority' : 'Low Priority'}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    {forecast.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {forecast.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    {forecast.trend === 'stable' && <div className="h-4 w-4 bg-gray-400 rounded-full" />}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Current Stock</div>
                    <div className="font-medium">{forecast.currentStock} units</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Predicted Demand</div>
                    <div className="font-medium">{forecast.predictedDemand} units</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Confidence</div>
                    <div className="font-medium">{forecast.confidence}%</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Timeframe</div>
                    <div className="font-medium">{forecast.timeframe}</div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  {forecast.currentStock < forecast.predictedDemand ? (
                    <div className="flex items-center space-x-2 text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">
                        Stock shortage predicted. Recommend reorder or inter-store transfer.
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">
                        Stock levels adequate for predicted demand.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Demand Factors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Demand Factors</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <div className="font-medium">Holiday Weekend</div>
                <div className="text-sm text-muted-foreground">Presidents Day weekend</div>
              </div>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                +15% impact
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium">Local Event</div>
                <div className="text-sm text-muted-foreground">Tech conference nearby</div>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                +8% impact
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <div className="font-medium">Weather</div>
                <div className="text-sm text-muted-foreground">Rainy day expected</div>
              </div>
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                -5% impact
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Model Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Last 24h Accuracy</span>
                <span>94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Weekly Average</span>
                <span>91.8%</span>
              </div>
              <Progress value={91.8} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monthly Trend</span>
                <span>89.5%</span>
              </div>
              <Progress value={89.5} className="h-2" />
            </div>
            <div className="text-sm text-muted-foreground mt-3">
              Model last updated: 2 hours ago
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}