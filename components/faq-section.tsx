import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What frameworks can I build with?",
    answer:
      "You can generate agents and apps in React, Next.js, Vite, Angular, Vue, or plain HTML and CSS. Pick a stack when you start, or let the platform choose the best fit for your use case.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Describe what you want your agent to do in plain language, and the platform handles the logic, integrations, and deployment. If you do know how to code, you can edit the generated output directly.",
  },
  {
    question: "Can I bring my own knowledge base or data?",
    answer:
      "Yes. Connect a website, upload documents, or link a database, and your agent will use that information to answer questions and make decisions.",
  },
  {
    question: "How long does it take to go from prompt to a live agent?",
    answer:
      "Most agents are generated in under a minute. Testing and deployment typically take a few minutes more, depending on how many integrations you connect.",
  },
  {
    question: "What happens if I need to make changes after deployment?",
    answer:
      "You can edit your agent's behavior, knowledge base, or integrations at any time. Changes go live immediately without redeploying from scratch.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes, the Starter plan is free and includes one AI agent with a basic knowledge base. Upgrade to Pro or Enterprise as your needs grow.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know before you start building.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}