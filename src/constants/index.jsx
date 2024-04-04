import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "features" },
  { label: "Workflow", href: "workflow" },
  { label: "Pricing", href: "pricing" },
  { label: "Testimonials", href: "test" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Our developers have seen a 25% increase in productivity thanks to Prometheus's LLM. Code completion and error detection are a breeze, freeing up our team to focus on innovation.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "With Prometheus's LLM, we can finally conduct comprehensive code reviews without worrying about missing vulnerabilities. Their security checks and best practice recommendations give us peace of mind.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Before Prometheus's LLM, troubleshooting code blockages was a time-consuming nightmare. Now, our developers can quickly overcome challenges and get back on track thanks to the LLM's insightful assistance.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Data-driven decision making is crucial for our business. Prometheus's LLM provides us with valuable insights into application performance and user behavior, allowing us to optimize our software and deliver a superior user experience.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Integrating security into the development process is paramount. Prometheus's LLM is a game-changer. Real-time vulnerability detection and mitigation capabilities ensure our code is secure by design, protecting our users and data.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Since implementing Prometheus's LLM, our development team has experienced a significant reduction in errors and rework. The LLM's seamless integration with our existing workflow has streamlined development and boosted overall team efficiency.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Build your LLM in minutes with our intuitive drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build LLms that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your LLms with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "See your LLM come to life with instant real-time previews",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on LLMs,  enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your LLM with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code Complete, Stress-Free",
    description:
      "Get instant code completion and real-time error detection with our LLM, streamlining your development workflow",
  },
  {
    title: "Breakthrough Block? We've Got You",
    description:
      "Stuck on a coding challenge? Leverage our LLM's assistance to overcome roadblocks and accelerate development.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Gain valuable insights into application performance and user behavior with our LLM's advanced analytics tools.",
  },
  {
    title: "Code Secure by Design",
    description:
      "Integrate robust security features directly into your development workflow with our LLM's real-time vulnerability detection and mitigation capabilities.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Limited number of training data points",
      "Drag-and-drop interface for basic LLM workflows",
      "Access to core LLM functionalities "," Text generation, sentiment analysis",
      "Real-time preview",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "All Starter features +",
      "Increased training data capacity",
      "Access to advanced LLM functionalities ",
      "Customizable model parameters",
      "Team collaboration features",
      "Priority support",

    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "All Pro features +",
      "Dedicated account manager",
      "Custom LLM development services",
      "High-volume training data support",
      "Scalable cloud-based training infrastructure ",
      " Advanced security and compliance features",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
