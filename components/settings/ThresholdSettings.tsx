import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { AlertTriangle } from 'lucide-react';
import { DEFAULT_THRESHOLDS, CATEGORY_THRESHOLDS } from './constants';

interface ThresholdSettingsProps {
  thresholds: typeof DEFAULT_THRESHOLDS;
  setThresholds: (thresholds: typeof DEFAULT_THRESHOLDS) => void;
}

export function ThresholdSettings({ thresholds, setThresholds }: ThresholdSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5" />
          <span>Alert Thresholds</span>
        </CardTitle>
        <CardDescription>
          Configure when alerts are triggered for inventory levels
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="old-stock-days">Old Stock Period (Days)</Label>
            <Input 
              id="old-stock-days" 
              type="number" 
              value={thresholds.oldStockDays}
              onChange={(e) => 
                setThresholds({ ...thresholds, oldStockDays: parseInt(e.target.value) })
              }
            />
            <p className="text-xs text-muted-foreground">
              Components with no movement for this many days trigger old stock alerts
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="low-stock-multiplier">Low Stock Multiplier</Label>
            <Input 
              id="low-stock-multiplier" 
              type="number" 
              step="0.1"
              value={thresholds.lowStockMultiplier}
              onChange={(e) => 
                setThresholds({ ...thresholds, lowStockMultiplier: parseFloat(e.target.value) })
              }
            />
            <p className="text-xs text-muted-foreground">
              Multiplier for low stock warnings (×critical threshold)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="critical-stock-multiplier">Critical Stock Multiplier</Label>
            <Input 
              id="critical-stock-multiplier" 
              type="number" 
              step="0.1"
              value={thresholds.criticalStockMultiplier}
              onChange={(e) => 
                setThresholds({ ...thresholds, criticalStockMultiplier: parseFloat(e.target.value) })
              }
            />
            <p className="text-xs text-muted-foreground">
              Multiplier for critical stock alerts (×critical threshold)
            </p>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Global Threshold Overrides</h3>
          <p className="text-sm text-muted-foreground">
            Set default thresholds for new components by category
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(CATEGORY_THRESHOLDS).map(([category, defaultValue]) => (
              <div key={category} className="space-y-2">
                <Label>{category}</Label>
                <Input type="number" placeholder={defaultValue.toString()} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}