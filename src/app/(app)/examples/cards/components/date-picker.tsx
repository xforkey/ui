import { Card, CardContent } from "@/xfork-ui/card"
import { Label } from "@/ui/label"
import { Button } from "@/xfork-ui/button"
import { CalendarIcon } from "lucide-react"

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Pick a date
          </Label>
          <Button variant="outline" className="w-[260px] justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Pick a date
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
