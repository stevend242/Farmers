"use client"
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { askAi } from "~/server/action/actions";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { useState } from "react";



export default function Page() {
  const [messages, setMessages] = useState([]);



  const handleSendMessage = async (e) => { // Made async to handle promises
    e.preventDefault();
    const message = e.target.message.value;
    setMessages([...messages, { user: true, text: message }]);
    e.target.message.value = ""; // Clear input field

    try {
      const response = await askAi(message);
      console.log(response) // Wait for response from askAi
      handleAiResponse(response);
    } catch (error) {
      console.error("Error sending message to AI:", error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  };

  const handleAiResponse = (response) => {
    if (response) { // Check if response exists before using it
      setMessages([
        ...messages, // Add user message
        { user: false, text: response }, // Add AI response
      ]);
      console.log(messages)
    }
  }

  return (
    <>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <Badge variant="outline" className="absolute right-3 top-3">
          Ask AI
        </Badge>
        <div className="flex-1 overflow-y-auto pt-4"> {/* Chat history container */}
          {messages.map((message) => (
            <div key={message.text} className={message.user ? "bg-green-600 text-white py-2 px-4 rounded-lg mb-2" : "bg-blue-600 text-white py-2 px-4 rounded-lg mb-2"}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1">
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            className="min-h-8 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
