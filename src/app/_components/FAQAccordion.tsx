import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="mt-8">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I register?</AccordionTrigger>
        <AccordionContent>
          <p>Click on the "Register" button on the top right corner and fill in the necessary details.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is the fee for using the platform?</AccordionTrigger>
        <AccordionContent>
          <p>The platform is free for farmers. There are no hidden charges.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How can I contact support?</AccordionTrigger>
        <AccordionContent>
          <p>You can contact support through the "Support" section in the navigation menu.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
