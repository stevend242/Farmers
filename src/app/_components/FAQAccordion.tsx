import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { HelpCircle, UserPlus, DollarSign, LifeBuoy } from 'lucide-react';

export function FAQAccordion() {
  const faqItems = [
    {
      question: "How do I register?",
      answer: "Click on the 'Register' button on the top right corner and fill in the necessary details. We'll guide you through the process step-by-step.",
      icon: <UserPlus className="h-5 w-5 text-green-600" />,
    },
    {
      question: "What is the fee for using the platform?",
      answer: "Our platform is completely free for farmers to use. There are no hidden charges or subscription fees. We believe in supporting our farming community!",
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team through the 'Support' section in the navigation menu. We're available 24/7 to assist you with any questions or issues.",
      icon: <LifeBuoy className="h-5 w-5 text-green-600" />,
    },
  ];

  return (
    <Card className="mt-8 bg-green-50 border-green-200">
      <CardHeader className="border-b border-green-200">
        <CardTitle className="text-2xl font-bold text-green-800 flex items-center">
          <HelpCircle className="mr-2 text-green-600" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-green-200">
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2 text-green-800">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-green-700">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
