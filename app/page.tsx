"use client";
import Image from "next/image";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles, Zap, Shield, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { Textarea } from "@/components/ui/textarea";
import { FrameworksSection } from "@/components/frameworks-section";
import { FaqSection } from "@/components/faq-section";
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-32">
        <HoleBackground className="absolute inset-0 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <Badge variant="outline" className="gap-2 p-3 px-4 mb-8 bg-background/80 backdrop-blur-md border-primary/20 text-primary">
            <Sparkles className="w-4 h-4" />
            <span>Transform Ideas into AI-Powered Agents</span>
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl font-serif">
            Build intelligent agents <br className="hidden md:block" />
            <span className="text-primary">in seconds.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            Describe what you need, and our AI platform will automatically construct, configure, and deploy a custom agent tailored exactly for your use case.
          </p>

          <div className="w-full max-w-2xl bg-card border shadow-xl rounded-2xl p-2 flex flex-col sm:flex-row gap-2 relative z-20 backdrop-blur-sm bg-card/80">
            <Input
              type="text"
              placeholder="e.g. Create a customer support agent trained on my website..."
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base py-6 bg-transparent"
            />
            <Button size="lg" className="rounded-xl py-6 px-8 shrink-0">
              Generate Agent <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>


      <FrameworksSection />
      {/* PROMPT TO PRODUCTION SECTION */}
      <section className="py-24 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Prompt to production</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every agent follows the same path — from a single sentence to a live, working system.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* connecting line, desktop only */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border z-0 overflow-hidden">
              <motion.div
                className="h-full bg-primary/40"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  label: "Prompt",
                  title: "Describe it",
                  desc: "Write what your agent should do, in plain language. No specs, no diagrams required.",
                  icon: <Sparkles className="w-6 h-6" />,
                },
                {
                  label: "Build",
                  title: "We generate it",
                  desc: "Your prompt becomes working logic — reasoning, tools, and integrations wired automatically.",
                  icon: <Cpu className="w-6 h-6" />,
                },
                {
                  label: "Test",
                  title: "Try it live",
                  desc: "Run real conversations against your agent before it ever reaches a user.",
                  icon: <Shield className="w-6 h-6" />,
                },
                {
                  label: "Ship",
                  title: "Go live",
                  desc: "Deploy to web, mobile, or messaging with one click. No infrastructure to manage.",
                  icon: <Zap className="w-6 h-6" />,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
                >
                  <Card className="border-0 shadow-lg bg-card hover:shadow-xl hover:-translate-y-1 transition-shadow duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          {step.icon}
                        </div>
                        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                          {step.label}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROMPT / BUILD SECTION */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-serif">Start building right now</CardTitle>
                <CardDescription className="text-base">
                  Type what you want your agent to do. We'll handle the rest.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Textarea
                  placeholder="e.g. Build an agent that answers support tickets using our docs, escalates billing issues to a human, and replies in under 10 seconds..."
                  className="min-h-[160px] resize-none text-base border-0 focus-visible:ring-0 px-0 shadow-none bg-secondary/30 rounded-xl p-4"
                />

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Customer support agent",
                    "Sales lead qualifier",
                    "Internal docs assistant",
                    "Order status bot",
                  ].map((suggestion, i) => (
                    <button
                      key={i}
                      className="text-sm px-4 py-2 rounded-full border border-border bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between border-t pt-6">
                <span className="text-sm text-muted-foreground">Be as specific as you like — you can refine it later.</span>
                <Button size="lg" className="rounded-xl shrink-0">
                  Build Agent <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FOUR STEPS SECTION */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Four Steps to Autonomy</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From idea to fully functioning AI agent in minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Describe", desc: "Tell us what you want your agent to do in plain English.", icon: <Sparkles className="w-6 h-6" /> },
              { title: "Customize", desc: "Fine-tune behaviors, integrations, and knowledge base.", icon: <Cpu className="w-6 h-6" /> },
              { title: "Deploy", desc: "Launch your agent across web, mobile, or messaging platforms.", icon: <Zap className="w-6 h-6" /> },
              { title: "Monitor", desc: "Track performance and interactions in real-time.", icon: <Shield className="w-6 h-6" /> }
            ].map((step, i) => (
              <Card key={i} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl">Step {i + 1}: {step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Simple, transparent pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Choose the plan that's right for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for individuals</CardDescription>
                <div className="mt-4 text-4xl font-bold">$0<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                {["1 AI Agent", "Basic knowledge base", "Community support"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Pro */}
            <Card className="border-primary shadow-xl shadow-primary/10 relative scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4 text-4xl font-bold">$49<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Up to 10 AI Agents", "Advanced knowledge base", "Priority support", "Custom integrations"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Free Trial</Button>
              </CardFooter>
            </Card>

            {/* Enterprise */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large scale operations</CardDescription>
                <div className="mt-4 text-4xl font-bold">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Unlimited AI Agents", "Dedicated account manager", "SLA guarantee", "On-premise deployment"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <FaqSection />
      {/* FOOTER */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Image
              src="/antiLogo.png"
              width={120}
              height={120}
              alt="AgenticBuilder Logo"
              className="h-20 w-auto rounded-2xl mb-6"
            />
            <div className="font-bold text-xl mb-4 text-primary">AgenticBuilder</div>
            <p className="text-muted-foreground">The premier platform for building and deploying intelligent AI agents.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} AgenticBuilder. All rights reserved.
        </div>
      </footer>
    </div>
  );
}