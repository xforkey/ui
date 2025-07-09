import { Button } from "@/components/xfork-ui/button"
import { Textarea } from "@/components/xfork-ui/textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
