"use client";
import { CornerDownLeft } from "lucide-react";
import { useState, FormEvent } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { askAi } from "~/server/action/actions";

interface Message {
  user: boolean;
  text: string;
}

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sanitizeResponse = (response: string): string => {
    // Simple filter to remove inappropriate content
    return response.replace(/\*+/g, '');
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = form.message.value;
    setMessages([...messages, { user: true, text: message }]);
    form.message.value = "";

    try {
      const response = await askAi(`This AI chatbot is meant for farmers. Please provide information or responses relevant to farmers.\n\n${message}`);
      const sanitizedResponse = sanitizeResponse(response);
      handleAiResponse(sanitizedResponse);
    } catch (error) {
      console.error("Error sending message to AI:", error);
    }
  };

  const handleAiResponse = (response: string) => {
    if (response) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: response },
      ]);
    }
  };

  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <Badge variant="outline" className="absolute right-3 top-3">
        Ask AI
      </Badge>
      <div className="flex-1 overflow-y-auto pt-4">
        {messages.map((message, index) => (
          <div key={index} className={message.user ? "bg-green-600 text-white py-2 px-4 rounded-lg mb-2" : "bg-blue-600 text-white py-2 px-4 rounded-lg mb-2"}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
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
  );
}
