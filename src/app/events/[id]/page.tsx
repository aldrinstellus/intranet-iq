"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/layout/Sidebar";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Video,
  Users,
  User,
  Check,
  X,
  HelpCircle,
  Share2,
  Bell,
  Loader2,
  AlertCircle,
  Building2,
  ExternalLink,
  Download,
  Plus,
} from "lucide-react";
import Link from "next/link";

// Comprehensive mock events data
const mockEventsData: Record<string, EventDetail> = {
  "1": {
    id: "1",
    title: "Q1 2026 All-Hands Meeting",
    description: `
## Agenda

Join us for our quarterly all-hands meeting where leadership will share company updates, celebrate wins, and outline our vision for Q1 2026.

### Meeting Overview

This is our most important quarterly gathering where we come together as a company to align on goals, celebrate achievements, and hear directly from leadership about our direction.

### Topics We'll Cover

1. **Q4 2025 Results Recap** (Sarah Chen, CEO)
   - Financial performance highlights
   - Customer growth and retention
   - Key product milestones

2. **Engineering Update** (Mike Johnson, VP Engineering)
   - Technical roadmap for Q1
   - Infrastructure improvements
   - New team members introduction

3. **Product Vision** (James Wilson, Product Lead)
   - AI Assistant 3.0 adoption metrics
   - Upcoming features preview
   - Customer feedback insights

4. **People & Culture** (Lisa Park, HR Director)
   - Team growth updates
   - Benefits enhancements
   - Culture initiatives

5. **Q&A Session** (30 minutes)
   - Submit questions via Slido: #allhands-q1-2026
   - Anonymous questions welcome

### Pre-Meeting Preparation

Please review the following materials before the meeting:
- [Q4 2025 Financial Summary](/docs/q4-financial-summary)
- [2026 Strategic Priorities](/docs/2026-priorities)
- [Employee Survey Results](/docs/survey-results)

### Recording

The meeting will be recorded and available on the intranet within 24 hours for those who cannot attend live.
    `,
    organizer: {
      id: "user-1",
      name: "Sarah Chen",
      role: "CEO",
      avatar: "SC",
      email: "sarah.chen@digitalworkplace.ai",
    },
    department: {
      id: "exec",
      name: "Executive Team",
    },
    location: "Main Auditorium (Floor 1) + Virtual",
    location_type: "hybrid",
    meeting_url: "https://zoom.us/j/123456789",
    start_time: "2026-02-03T10:00:00-08:00",
    end_time: "2026-02-03T12:00:00-08:00",
    all_day: false,
    visibility: "all",
    max_attendees: 500,
    current_attendees: 342,
    rsvp_status: null,
    attendees: [
      { id: "u1", name: "Mike Johnson", role: "VP Engineering", avatar: "MJ", status: "accepted" },
      { id: "u2", name: "Lisa Park", role: "HR Director", avatar: "LP", status: "accepted" },
      { id: "u3", name: "James Wilson", role: "Product Lead", avatar: "JW", status: "accepted" },
      { id: "u4", name: "Emily Rodriguez", role: "Customer Success", avatar: "ER", status: "accepted" },
      { id: "u5", name: "Alex Kim", role: "Staff Engineer", avatar: "AK", status: "maybe" },
    ],
    agenda: [
      { time: "10:00 AM", title: "Welcome & Introduction", speaker: "Sarah Chen", duration: 10 },
      { time: "10:10 AM", title: "Q4 Financial Review", speaker: "Sarah Chen", duration: 20 },
      { time: "10:30 AM", title: "Engineering Update", speaker: "Mike Johnson", duration: 20 },
      { time: "10:50 AM", title: "Product Vision", speaker: "James Wilson", duration: 20 },
      { time: "11:10 AM", title: "People & Culture", speaker: "Lisa Park", duration: 15 },
      { time: "11:25 AM", title: "Break", speaker: "", duration: 5 },
      { time: "11:30 AM", title: "Q&A Session", speaker: "All Leaders", duration: 30 },
    ],
    tags: ["All-Hands", "Company", "Quarterly"],
    resources: [
      { name: "Q4 Financial Summary", type: "pdf", url: "#" },
      { name: "2026 Strategic Deck", type: "pptx", url: "#" },
      { name: "Slido Q&A Link", type: "link", url: "#" },
    ],
    reminders: [
      { type: "email", time: "1 day before" },
      { type: "notification", time: "1 hour before" },
    ],
  },
  "2": {
    id: "2",
    title: "Engineering Team Offsite 2026",
    description: `
## Annual Engineering Offsite

Our annual engineering team offsite is a 2-day event focused on team building, technical deep dives, and strategic planning for the year ahead.

### Day 1: February 10th

**Morning Sessions (9 AM - 12 PM)**
- Team breakfast and icebreakers
- Architecture review: Where we are, where we're going
- Tech debt retro and prioritization

**Lunch (12 PM - 1 PM)**
- Catered lunch with team photos

**Afternoon Sessions (1 PM - 5 PM)**
- Hackathon kickoff: Build something fun!
- Cross-team collaboration sessions
- Lightning talks (5 min each, sign up on Slack!)

**Evening (6 PM onwards)**
- Team dinner at The Waterfront Restaurant
- Optional: Bowling at Lucky Strike

### Day 2: February 11th

**Morning Sessions (9 AM - 12 PM)**
- Hackathon demos and voting
- 2026 roadmap deep dive
- Q&A with engineering leadership

**Lunch & Wrap-up (12 PM - 2 PM)**
- Awards ceremony
- Closing remarks
- Team photo

### Location Details

**Venue**: Bay View Conference Center
**Address**: 1250 Harbor Boulevard, San Francisco, CA 94123

The venue offers:
- 3 conference rooms (30-50 capacity each)
- Breakout spaces
- Outdoor terrace with bay views
- Free parking (validation at front desk)
- 5 min walk from Embarcadero station

### What to Bring

- Laptop & charger
- Comfortable clothes (we'll be active!)
- Ideas for lightning talks
- Enthusiasm! 🚀

### RSVP Required

Please RSVP by February 5th so we can finalize catering and transportation.
    `,
    organizer: {
      id: "user-2",
      name: "Mike Johnson",
      role: "VP Engineering",
      avatar: "MJ",
      email: "mike.johnson@digitalworkplace.ai",
    },
    department: {
      id: "eng",
      name: "Engineering",
    },
    location: "Bay View Conference Center, San Francisco",
    location_type: "in_person",
    meeting_url: null,
    start_time: "2026-02-10T09:00:00-08:00",
    end_time: "2026-02-11T14:00:00-08:00",
    all_day: false,
    visibility: "department",
    max_attendees: 80,
    current_attendees: 62,
    rsvp_status: null,
    attendees: [
      { id: "u1", name: "Alex Kim", role: "Staff Engineer", avatar: "AK", status: "accepted" },
      { id: "u2", name: "Jordan Williams", role: "Senior Frontend", avatar: "JW", status: "accepted" },
      { id: "u3", name: "Maria Santos", role: "Senior Backend", avatar: "MS", status: "accepted" },
      { id: "u4", name: "David Chen", role: "Backend Engineer", avatar: "DC", status: "maybe" },
    ],
    agenda: [
      { time: "Day 1, 9:00 AM", title: "Breakfast & Icebreakers", speaker: "", duration: 60 },
      { time: "Day 1, 10:00 AM", title: "Architecture Review", speaker: "Alex Kim", duration: 90 },
      { time: "Day 1, 1:00 PM", title: "Hackathon Kickoff", speaker: "Mike Johnson", duration: 240 },
      { time: "Day 1, 6:00 PM", title: "Team Dinner", speaker: "", duration: 180 },
      { time: "Day 2, 9:00 AM", title: "Hackathon Demos", speaker: "All Teams", duration: 120 },
      { time: "Day 2, 11:00 AM", title: "2026 Roadmap", speaker: "Mike Johnson", duration: 60 },
    ],
    tags: ["Engineering", "Offsite", "Team Building"],
    resources: [
      { name: "Venue Map & Parking", type: "pdf", url: "#" },
      { name: "Hackathon Guidelines", type: "doc", url: "#" },
      { name: "Lightning Talk Sign-up", type: "link", url: "#" },
    ],
    reminders: [],
  },
  "3": {
    id: "3",
    title: "New Employee Orientation - February Cohort",
    description: `
## Welcome to Digital Workplace AI!

Congratulations on joining our team! This orientation session is designed to help you get up to speed quickly and feel at home in our company.

### What to Expect

This is a comprehensive 4-hour session covering everything you need to know to succeed here:

**Part 1: Company Overview (1 hour)**
- Our mission and values
- Company history and milestones
- Product overview and demo
- Organizational structure

**Part 2: Tools & Systems (1 hour)**
- IT setup and security
- Communication tools (Slack, Email, Zoom)
- HR systems (BambooHR, Benefits Portal)
- This intranet platform!

**Part 3: Culture & Expectations (1 hour)**
- Working at Digital Workplace AI
- Remote work best practices
- Career development paths
- Employee Resource Groups (ERGs)

**Part 4: Meet Your Buddy & Wrap-up (1 hour)**
- Buddy program introduction
- Q&A with HR
- Lunch with your team

### Before the Session

Please complete the following:
1. ✅ Complete I-9 verification
2. ✅ Set up direct deposit
3. ✅ Review employee handbook
4. ✅ Bring your government ID

### February Cohort Members

- Dr. Alex Kim (Engineering)
- Maria Santos (Engineering)
- Jordan Williams (Engineering)
- Sophie Anderson (Engineering)
- Kenji Tanaka (Mobile)
- Linda Wu (QA)
- Omar Hassan (Mobile)
- Jennifer Lee (AI/ML)

### Your Orientation Team

- **Lisa Park** - HR Director (Host)
- **Amanda Foster** - Benefits Manager
- **Tom Chen** - IT Support
- **Emily Rodriguez** - Culture Ambassador

We're excited to have you here!
    `,
    organizer: {
      id: "user-3",
      name: "Lisa Park",
      role: "HR Director",
      avatar: "LP",
      email: "lisa.park@digitalworkplace.ai",
    },
    department: {
      id: "hr",
      name: "Human Resources",
    },
    location: "Training Room 2A + Zoom",
    location_type: "hybrid",
    meeting_url: "https://zoom.us/j/987654321",
    start_time: "2026-02-05T09:00:00-08:00",
    end_time: "2026-02-05T13:00:00-08:00",
    all_day: false,
    visibility: "private",
    max_attendees: 20,
    current_attendees: 8,
    rsvp_status: null,
    attendees: [
      { id: "u1", name: "Alex Kim", role: "Staff Engineer", avatar: "AK", status: "accepted" },
      { id: "u2", name: "Maria Santos", role: "Senior Backend", avatar: "MS", status: "accepted" },
      { id: "u3", name: "Jordan Williams", role: "Senior Frontend", avatar: "JW", status: "accepted" },
    ],
    agenda: [
      { time: "9:00 AM", title: "Company Overview", speaker: "Lisa Park", duration: 60 },
      { time: "10:00 AM", title: "Tools & Systems", speaker: "Tom Chen", duration: 60 },
      { time: "11:00 AM", title: "Culture & Expectations", speaker: "Emily Rodriguez", duration: 60 },
      { time: "12:00 PM", title: "Buddy Meet & Lunch", speaker: "", duration: 60 },
    ],
    tags: ["Onboarding", "New Hire", "Training"],
    resources: [
      { name: "Employee Handbook", type: "pdf", url: "#" },
      { name: "Benefits Guide 2026", type: "pdf", url: "#" },
      { name: "IT Setup Checklist", type: "doc", url: "#" },
    ],
    reminders: [],
  },
  "4": {
    id: "4",
    title: "Product Demo Day - AI Features Showcase",
    description: `
## AI Features Showcase

Join us for an exciting demo day where the Product and AI teams will showcase the latest AI-powered features we've built for our customers.

### Demo Schedule

**Feature 1: Intelligent Document Processing (20 min)**
- Automated document classification
- Smart data extraction
- Real-time translation (50+ languages)

**Feature 2: Advanced Search 2.0 (20 min)**
- Semantic search improvements
- Multi-modal search (text + images)
- Personalized search rankings

**Feature 3: Workflow Automation (20 min)**
- Natural language workflow creation
- AI-powered decision nodes
- Error prediction and prevention

**Feature 4: Conversational Analytics (20 min)**
- Ask questions in plain English
- Automatic chart generation
- Insight recommendations

### Interactive Session

After the demos, we'll have 30 minutes of hands-on time where you can:
- Try the features yourself
- Ask questions to the product team
- Provide feedback

### Why Attend?

- See cutting-edge AI in action
- Understand what we're building for customers
- Provide input on product direction
- Network with Product and AI teams

### Post-Demo Feedback

Your feedback is valuable! Please fill out the survey after the session:
[Demo Day Feedback Survey](#)
    `,
    organizer: {
      id: "user-4",
      name: "James Wilson",
      role: "Product Lead",
      avatar: "JW",
      email: "james.wilson@digitalworkplace.ai",
    },
    department: {
      id: "product",
      name: "Product",
    },
    location: "Demo Theater (Floor 2)",
    location_type: "hybrid",
    meeting_url: "https://zoom.us/j/456789123",
    start_time: "2026-02-07T14:00:00-08:00",
    end_time: "2026-02-07T16:00:00-08:00",
    all_day: false,
    visibility: "all",
    max_attendees: 100,
    current_attendees: 78,
    rsvp_status: null,
    attendees: [],
    agenda: [
      { time: "2:00 PM", title: "Welcome & Introduction", speaker: "James Wilson", duration: 5 },
      { time: "2:05 PM", title: "Document Processing", speaker: "Jennifer Lee", duration: 20 },
      { time: "2:25 PM", title: "Advanced Search 2.0", speaker: "Robert Zhang", duration: 20 },
      { time: "2:45 PM", title: "Workflow Automation", speaker: "Chris O'Brien", duration: 20 },
      { time: "3:05 PM", title: "Conversational Analytics", speaker: "Priya Sharma", duration: 20 },
      { time: "3:25 PM", title: "Hands-on Session", speaker: "Product Team", duration: 30 },
      { time: "3:55 PM", title: "Closing Remarks", speaker: "James Wilson", duration: 5 },
    ],
    tags: ["Product", "AI", "Demo", "Innovation"],
    resources: [
      { name: "Feature Documentation", type: "link", url: "#" },
      { name: "Demo Environment Access", type: "link", url: "#" },
    ],
    reminders: [],
  },
  "5": {
    id: "5",
    title: "Wellness Wednesday: Meditation & Mindfulness",
    description: `
## Weekly Meditation Session

Take a break from your busy schedule and join us for a 30-minute guided meditation session.

### Session Details

This week's theme: **Managing Work Stress**

Our certified mindfulness instructor, Maya Thompson, will guide us through:
- 5 min: Breathing exercises
- 15 min: Guided meditation
- 10 min: Open discussion and tips

### What You'll Learn

- Techniques to manage work-related anxiety
- Quick desk exercises for stress relief
- Mindful breaks throughout the workday
- Building a sustainable meditation practice

### Who Should Join?

Everyone! Whether you're new to meditation or an experienced practitioner, this session is designed to be accessible and beneficial for all.

### How to Prepare

- Find a quiet space
- Sit comfortably (chair or cushion)
- Turn off notifications
- Grab some water

No special equipment needed - just an open mind!

### Regular Schedule

Wellness Wednesday sessions happen every week:
- **Meditation**: 1st & 3rd Wednesday
- **Yoga**: 2nd & 4th Wednesday
- **Time**: 12:00 PM - 12:30 PM PT

### Can't Make It Live?

Sessions are recorded and available in the Wellness library for 30 days.
    `,
    organizer: {
      id: "user-5",
      name: "Amanda Foster",
      role: "Benefits Manager",
      avatar: "AF",
      email: "amanda.foster@digitalworkplace.ai",
    },
    department: {
      id: "hr",
      name: "Human Resources",
    },
    location: "Virtual Only",
    location_type: "virtual",
    meeting_url: "https://zoom.us/j/wellness2026",
    start_time: "2026-02-05T12:00:00-08:00",
    end_time: "2026-02-05T12:30:00-08:00",
    all_day: false,
    visibility: "all",
    max_attendees: null,
    current_attendees: 45,
    rsvp_status: null,
    attendees: [],
    agenda: [
      { time: "12:00 PM", title: "Welcome & Breathing", speaker: "Maya Thompson", duration: 5 },
      { time: "12:05 PM", title: "Guided Meditation", speaker: "Maya Thompson", duration: 15 },
      { time: "12:20 PM", title: "Discussion & Tips", speaker: "All", duration: 10 },
    ],
    tags: ["Wellness", "Meditation", "Self-Care"],
    resources: [
      { name: "Meditation App Recommendation", type: "link", url: "#" },
      { name: "Stress Management Guide", type: "pdf", url: "#" },
    ],
    reminders: [],
  },
  "6": {
    id: "6",
    title: "Customer Advisory Board Meeting",
    description: `
## Q1 Customer Advisory Board

Join our quarterly Customer Advisory Board meeting where we gather feedback from our top enterprise customers.

### Attendees

**Internal Team:**
- Sarah Chen (CEO)
- James Wilson (Product Lead)
- Emily Rodriguez (VP Customer Success)

**Customer Representatives:**
- Acme Corporation
- TechGiant Inc.
- Global Solutions Ltd.
- Innovation Partners
- Enterprise Systems Co.

### Agenda

1. **Product Roadmap Review** (30 min)
2. **Customer Feedback Session** (45 min)
3. **Feature Prioritization Exercise** (30 min)
4. **Networking Lunch** (45 min)

### Goals

- Gather direct feedback on product direction
- Understand customer pain points
- Build stronger customer relationships
- Identify expansion opportunities

### Confidential

This meeting is confidential. Please do not share details outside the invitee list.
    `,
    organizer: {
      id: "user-6",
      name: "Emily Rodriguez",
      role: "VP Customer Success",
      avatar: "ER",
      email: "emily.rodriguez@digitalworkplace.ai",
    },
    department: {
      id: "cs",
      name: "Customer Success",
    },
    location: "Executive Boardroom",
    location_type: "in_person",
    meeting_url: null,
    start_time: "2026-02-14T09:00:00-08:00",
    end_time: "2026-02-14T12:30:00-08:00",
    all_day: false,
    visibility: "private",
    max_attendees: 15,
    current_attendees: 12,
    rsvp_status: null,
    attendees: [],
    agenda: [
      { time: "9:00 AM", title: "Welcome & Introductions", speaker: "Emily Rodriguez", duration: 15 },
      { time: "9:15 AM", title: "Product Roadmap Review", speaker: "James Wilson", duration: 30 },
      { time: "9:45 AM", title: "Customer Feedback Session", speaker: "All", duration: 45 },
      { time: "10:30 AM", title: "Break", speaker: "", duration: 15 },
      { time: "10:45 AM", title: "Feature Prioritization", speaker: "All", duration: 30 },
      { time: "11:15 AM", title: "Closing Remarks", speaker: "Sarah Chen", duration: 15 },
      { time: "11:30 AM", title: "Networking Lunch", speaker: "", duration: 60 },
    ],
    tags: ["Customer", "Advisory", "Enterprise"],
    resources: [
      { name: "Q1 Roadmap Deck", type: "pptx", url: "#" },
      { name: "Feedback Form", type: "link", url: "#" },
    ],
    reminders: [],
  },
};

// Types
interface Organizer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
}

interface Attendee {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "accepted" | "declined" | "maybe" | "pending";
}

interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  duration: number;
}

interface Resource {
  name: string;
  type: string;
  url: string;
}

interface EventDetail {
  id: string;
  title: string;
  description: string;
  organizer: Organizer;
  department: { id: string; name: string };
  location: string;
  location_type: "in_person" | "virtual" | "hybrid";
  meeting_url: string | null;
  start_time: string;
  end_time: string;
  all_day: boolean;
  visibility: string;
  max_attendees: number | null;
  current_attendees: number;
  rsvp_status: "accepted" | "declined" | "maybe" | null;
  attendees: Attendee[];
  agenda: AgendaItem[];
  tags: string[];
  resources: Resource[];
  reminders: { type: string; time: string }[];
}

function formatEventDate(startTime: string, endTime: string, allDay: boolean): string {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const startDate = start.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  if (allDay) {
    if (start.toDateString() === end.toDateString()) {
      return `${startDate} (All Day)`;
    }
    const endDate = end.toLocaleDateString("en-US", { month: "long", day: "numeric" });
    return `${startDate} - ${endDate} (All Day)`;
  }

  const startTimeStr = start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const endTimeStr = end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" });

  if (start.toDateString() === end.toDateString()) {
    return `${startDate}, ${startTimeStr} - ${endTimeStr}`;
  }

  const endDate = end.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  return `${startDate}, ${startTimeStr} - ${endDate}, ${endTimeStr}`;
}

function getDurationInHours(startTime: string, endTime: string): string {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
  if (diff < 1) return `${Math.round(diff * 60)} minutes`;
  if (diff === 1) return "1 hour";
  return `${diff} hours`;
}

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [rsvpStatus, setRsvpStatus] = useState<"accepted" | "declined" | "maybe" | null>(null);
  const [showReminderModal, setShowReminderModal] = useState(false);

  useEffect(() => {
    const id = params.id as string;
    setTimeout(() => {
      const eventData = mockEventsData[id];
      setEvent(eventData || null);
      setRsvpStatus(eventData?.rsvp_status || null);
      setLoading(false);
    }, 500);
  }, [params.id]);

  const handleRSVP = (status: "accepted" | "declined" | "maybe") => {
    setRsvpStatus(status);
  };

  const handleAddToCalendar = () => {
    alert("Event added to calendar!");
  };

  if (loading) {
    return (
      <div className="flex h-screen bg-[var(--bg-obsidian)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 text-[var(--accent-ember)] animate-spin" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex h-screen bg-[var(--bg-obsidian)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <FadeIn>
              <div className="text-center py-16">
                <AlertCircle className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Event Not Found
                </h1>
                <p className="text-[var(--text-secondary)] mb-6">
                  The event you&apos;re looking for doesn&apos;t exist or has been cancelled.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-ember)] text-white rounded-lg hover:bg-[var(--accent-ember-soft)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Events
                </Link>
              </div>
            </FadeIn>
          </div>
        </main>
      </div>
    );
  }

  const locationIcon = event.location_type === "virtual" ? Video : event.location_type === "hybrid" ? Video : MapPin;
  const locationLabel = event.location_type === "virtual" ? "Virtual Event" : event.location_type === "hybrid" ? "Hybrid (In-person + Virtual)" : "In-person Event";

  return (
    <div className="flex h-screen bg-[var(--bg-obsidian)]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Back Button */}
          <FadeIn>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-ember)] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
          </FadeIn>

          {/* Event Header */}
          <FadeIn delay={0.1}>
            <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      event.location_type === "virtual"
                        ? "bg-purple-500/20 text-purple-400"
                        : event.location_type === "hybrid"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}>
                      {locationLabel}
                    </span>
                    {event.visibility === "private" && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                        Private
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                    {event.title}
                  </h1>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Calendar className="w-4 h-4 text-[var(--accent-ember)]" />
                      {formatEventDate(event.start_time, event.end_time, event.all_day)}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Clock className="w-4 h-4 text-[var(--accent-ember)]" />
                      Duration: {getDurationInHours(event.start_time, event.end_time)}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      {event.location_type === "virtual" ? (
                        <Video className="w-4 h-4 text-[var(--accent-ember)]" />
                      ) : (
                        <MapPin className="w-4 h-4 text-[var(--accent-ember)]" />
                      )}
                      {event.location}
                    </div>
                    {event.meeting_url && (
                      <a
                        href={event.meeting_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[var(--accent-ember)] hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Join Virtual Meeting
                      </a>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-2">
                    <Users className="w-4 h-4" />
                    {event.current_attendees} attending
                    {event.max_attendees && ` / ${event.max_attendees} max`}
                  </div>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-ember)]/20 flex items-center justify-center text-[var(--accent-ember)] font-medium">
                  {event.organizer.avatar}
                </div>
                <div>
                  <p className="text-[var(--text-primary)] font-medium">Organized by {event.organizer.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{event.organizer.role} • {event.department.name}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RSVP Section */}
          <FadeIn delay={0.15}>
            <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Your Response</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => handleRSVP("accepted")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    rsvpStatus === "accepted"
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-[var(--bg-slate)] text-[var(--text-secondary)] hover:bg-[var(--bg-obsidian)]"
                  }`}
                >
                  <Check className="w-4 h-4" />
                  Going
                </button>
                <button
                  onClick={() => handleRSVP("maybe")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    rsvpStatus === "maybe"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                      : "bg-[var(--bg-slate)] text-[var(--text-secondary)] hover:bg-[var(--bg-obsidian)]"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  Maybe
                </button>
                <button
                  onClick={() => handleRSVP("declined")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    rsvpStatus === "declined"
                      ? "bg-red-500/20 text-red-400 border border-red-500/50"
                      : "bg-[var(--bg-slate)] text-[var(--text-secondary)] hover:bg-[var(--bg-obsidian)]"
                  }`}
                >
                  <X className="w-4 h-4" />
                  Can&apos;t Go
                </button>
                <div className="flex-1" />
                <button
                  onClick={handleAddToCalendar}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-ember)] text-white rounded-lg hover:bg-[var(--accent-ember-soft)] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add to Calendar
                </button>
                <button
                  onClick={() => setShowReminderModal(true)}
                  className="p-2 bg-[var(--bg-slate)] text-[var(--text-secondary)] rounded-lg hover:bg-[var(--bg-obsidian)] transition-colors"
                >
                  <Bell className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="p-2 bg-[var(--bg-slate)] text-[var(--text-secondary)] rounded-lg hover:bg-[var(--bg-obsidian)] transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Event Description */}
          <FadeIn delay={0.2}>
            <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">About This Event</h3>
              <div
                className="prose prose-invert max-w-none
                  prose-headings:text-[var(--text-primary)]
                  prose-p:text-[var(--text-secondary)]
                  prose-strong:text-[var(--text-primary)]
                  prose-a:text-[var(--accent-ember)]
                  prose-li:text-[var(--text-secondary)]
                "
                dangerouslySetInnerHTML={{
                  __html: event.description
                    .replace(/^## /gm, '<h2 class="text-xl font-semibold mb-3 mt-6">')
                    .replace(/^### /gm, '<h3 class="text-lg font-medium mb-2 mt-4">')
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/\n- /g, '</p><li class="ml-4 mb-1">• ')
                    .replace(/\n\d\. /g, '</p><li class="ml-4 mb-1">'),
                }}
              />
            </div>
          </FadeIn>

          {/* Agenda */}
          {event.agenda.length > 0 && (
            <FadeIn delay={0.25}>
              <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Agenda</h3>
                <div className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 bg-[var(--bg-slate)] rounded-lg"
                    >
                      <div className="w-24 flex-shrink-0">
                        <span className="text-[var(--accent-ember)] font-mono text-sm">{item.time}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[var(--text-primary)] font-medium">{item.title}</p>
                        {item.speaker && (
                          <p className="text-xs text-[var(--text-muted)]">{item.speaker}</p>
                        )}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {item.duration} min
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Resources */}
          {event.resources.length > 0 && (
            <FadeIn delay={0.3}>
              <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Resources</h3>
                <div className="space-y-2">
                  {event.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      className="flex items-center gap-3 p-3 bg-[var(--bg-slate)] rounded-lg hover:bg-[var(--bg-obsidian)] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[var(--accent-ember)]/20 rounded-lg flex items-center justify-center">
                        {resource.type === "link" ? (
                          <ExternalLink className="w-5 h-5 text-[var(--accent-ember)]" />
                        ) : (
                          <Download className="w-5 h-5 text-[var(--accent-ember)]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-[var(--text-primary)] font-medium">{resource.name}</p>
                        <p className="text-xs text-[var(--text-muted)] uppercase">{resource.type}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Attendees */}
          {event.attendees.length > 0 && (
            <FadeIn delay={0.35}>
              <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Attendees ({event.attendees.length})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {event.attendees.map((attendee) => (
                    <div
                      key={attendee.id}
                      className="flex items-center gap-3 p-3 bg-[var(--bg-slate)] rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-[var(--accent-ember)]/20 flex items-center justify-center text-[var(--accent-ember)] font-medium">
                        {attendee.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[var(--text-primary)] font-medium truncate">{attendee.name}</p>
                        <p className="text-xs text-[var(--text-muted)] truncate">{attendee.role}</p>
                      </div>
                      {attendee.status === "accepted" && (
                        <Check className="w-4 h-4 text-green-400" />
                      )}
                      {attendee.status === "maybe" && (
                        <HelpCircle className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Tags */}
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-full text-xs text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
