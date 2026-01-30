"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/layout/Sidebar";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/motion";
import {
  ArrowLeft,
  Clock,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
  Pin,
  Heart,
  Send,
  User,
  Building2,
  Eye,
  Calendar,
  Tag,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Link from "next/link";

// Comprehensive mock news data
const mockNewsData: Record<string, NewsPostDetail> = {
  "1": {
    id: "1",
    title: "Q4 2025 Company Results: Record-Breaking Performance",
    content: `
# Q4 2025 Financial Highlights

We are thrilled to announce that Digital Workplace AI has achieved record-breaking results in Q4 2025, exceeding all expectations and setting new benchmarks for our industry.

## Key Metrics

### Revenue Growth
- **Total Revenue**: $42.5M (+35% YoY)
- **Recurring Revenue**: $38.2M (+42% YoY)
- **Net Revenue Retention**: 127%

### Customer Success
- **New Enterprise Clients**: 47 (+58% vs Q3)
- **Customer Satisfaction Score**: 4.8/5.0
- **Support Response Time**: <2 hours average

### Product Milestones
- Launched AI Assistant 3.0 with advanced reasoning
- Deployed 500+ custom workflows for enterprise clients
- Achieved SOC 2 Type II certification
- Released native mobile apps for iOS and Android

## Team Growth

We've expanded our team significantly this quarter:

| Department | Q3 Headcount | Q4 Headcount | Growth |
|------------|--------------|--------------|--------|
| Engineering | 45 | 62 | +38% |
| Sales | 23 | 31 | +35% |
| Customer Success | 18 | 28 | +56% |
| Product | 12 | 16 | +33% |

## Looking Ahead to 2026

Our roadmap for 2026 includes exciting developments:

1. **Enterprise AI Platform**: Enhanced LLM capabilities with custom model training
2. **Global Expansion**: New offices in London, Singapore, and Sydney
3. **Partner Ecosystem**: Launch of certified partner program
4. **Advanced Analytics**: Real-time insights and predictive analytics

## Thank You

This achievement wouldn't be possible without the dedication of every team member. Your hard work, innovation, and commitment to our customers have been the driving force behind our success.

Let's continue this momentum into 2026!

*— Sarah Chen, CEO*
    `,
    author: {
      id: "user-1",
      name: "Sarah Chen",
      role: "CEO",
      avatar: "/avatars/sarah-chen.jpg",
      email: "sarah.chen@digitalworkplace.ai",
    },
    department: {
      id: "exec",
      name: "Executive Team",
    },
    type: "announcement",
    visibility: "all",
    pinned: true,
    likes_count: 234,
    comments_count: 47,
    views_count: 1892,
    published_at: "2026-01-28T09:00:00Z",
    tags: ["Q4 Results", "Company News", "Financials", "Growth"],
    attachments: [
      { id: "att-1", type: "file", name: "Q4-2025-Financial-Summary.pdf", url: "#", size: 2400000 },
      { id: "att-2", type: "file", name: "2026-Strategic-Roadmap.pdf", url: "#", size: 1800000 },
    ],
    comments: [
      {
        id: "c1",
        author: { id: "u2", name: "Mike Johnson", role: "VP Engineering", avatar: "MJ" },
        content: "Incredible results! The engineering team is proud to have contributed to this success. Looking forward to even bigger things in 2026!",
        likes: 45,
        timestamp: "2026-01-28T10:15:00Z",
        replies: [
          {
            id: "c1-r1",
            author: { id: "u3", name: "Lisa Park", role: "HR Director", avatar: "LP" },
            content: "Absolutely! The team growth has been amazing to manage. Great job everyone!",
            likes: 12,
            timestamp: "2026-01-28T10:30:00Z",
          },
        ],
      },
      {
        id: "c2",
        author: { id: "u4", name: "James Wilson", role: "Product Lead", avatar: "JW" },
        content: "The product milestones this quarter were incredible. AI Assistant 3.0 has been a game-changer for our customers.",
        likes: 32,
        timestamp: "2026-01-28T11:00:00Z",
        replies: [],
      },
      {
        id: "c3",
        author: { id: "u5", name: "Emily Rodriguez", role: "Customer Success Manager", avatar: "ER" },
        content: "Our customers are thrilled with the improvements! The NPS score jump reflects the hard work everyone has put in.",
        likes: 28,
        timestamp: "2026-01-28T11:45:00Z",
        replies: [],
      },
    ],
    relatedPosts: ["2", "5", "8"],
  },
  "2": {
    id: "2",
    title: "Welcome Our New Engineering Team Members!",
    content: `
# New Faces in Engineering

We're excited to welcome 17 new team members to our Engineering department this month! Each brings unique expertise and passion that will help us continue building amazing products.

## Meet the Team

### Backend Engineering
- **Dr. Alex Kim** - Senior Staff Engineer (ex-Google, PhD in Distributed Systems)
- **Maria Santos** - Senior Backend Engineer (ex-Stripe)
- **David Chen** - Backend Engineer (UC Berkeley grad)
- **Priya Sharma** - Backend Engineer (IIT Delhi)

### Frontend Engineering
- **Jordan Williams** - Senior Frontend Engineer (ex-Airbnb)
- **Sophie Anderson** - Frontend Engineer (React specialist)
- **Tom Martinez** - Frontend Engineer (Vue.js expert)

### Platform Engineering
- **Dr. Nina Patel** - Principal Platform Engineer (ex-AWS)
- **Marcus Johnson** - DevOps Engineer (Kubernetes certified)
- **Ava Thompson** - SRE (ex-Netflix)

### AI/ML Team
- **Dr. Robert Zhang** - Staff ML Engineer (Stanford AI Lab)
- **Jennifer Lee** - ML Engineer (NLP specialist)
- **Chris O'Brien** - ML Engineer (Computer Vision)

### Mobile Engineering
- **Kenji Tanaka** - iOS Lead (ex-Apple)
- **Rachel Green** - Android Engineer (ex-Samsung)
- **Omar Hassan** - Mobile Engineer (Flutter expert)

### QA Engineering
- **Linda Wu** - QA Lead (10+ years experience)

## Onboarding Schedule

| Week | Focus Area |
|------|------------|
| Week 1 | Company culture, tools setup, team introductions |
| Week 2 | Product deep-dive, architecture overview |
| Week 3 | First PR reviews, pair programming |
| Week 4 | Independent project assignment |

## Welcome Events

- **Monday**: Team lunch at Bella Italia (12:30 PM)
- **Wednesday**: Engineering All-Hands (3:00 PM, Room 4A)
- **Friday**: Happy Hour (5:00 PM, Rooftop Lounge)

Please join me in welcoming our new colleagues. Feel free to reach out and introduce yourselves!

*— Mike Johnson, VP Engineering*
    `,
    author: {
      id: "user-2",
      name: "Mike Johnson",
      role: "VP Engineering",
      avatar: "/avatars/mike-johnson.jpg",
      email: "mike.johnson@digitalworkplace.ai",
    },
    department: {
      id: "eng",
      name: "Engineering",
    },
    type: "announcement",
    visibility: "all",
    pinned: false,
    likes_count: 156,
    comments_count: 34,
    views_count: 1245,
    published_at: "2026-01-27T14:00:00Z",
    tags: ["New Hires", "Engineering", "Team", "Welcome"],
    attachments: [],
    comments: [
      {
        id: "c4",
        author: { id: "u6", name: "Sarah Chen", role: "CEO", avatar: "SC" },
        content: "Welcome to the team everyone! Excited to see what we'll build together.",
        likes: 67,
        timestamp: "2026-01-27T14:30:00Z",
        replies: [],
      },
    ],
    relatedPosts: ["1", "4", "7"],
  },
  "3": {
    id: "3",
    title: "Updated Remote Work Policy - Effective February 1st",
    content: `
# New Flexible Work Guidelines

After extensive feedback from our team and careful analysis of productivity data, we're excited to announce our updated remote work policy, effective February 1st, 2026.

## Policy Overview

### Work Arrangement Options

**1. Fully Remote** (Available to all roles)
- Work from anywhere in approved time zones (UTC-8 to UTC+2)
- Quarterly in-person team gatherings (travel expenses covered)
- $2,000 annual home office stipend

**2. Hybrid** (3 days remote, 2 days office)
- Choose your in-office days each week
- Reserved desk in your preferred office location
- Full access to office amenities

**3. Office-First** (4-5 days in office)
- Dedicated desk assignment
- Additional office perks (parking, gym access)
- Leadership track priority for certain roles

## Core Hours

Regardless of arrangement, all team members should be available during core hours:
- **Americas**: 10 AM - 2 PM PT
- **EMEA**: 2 PM - 6 PM GMT
- **APAC**: 10 AM - 2 PM SGT

## Communication Standards

| Type | Expected Response Time |
|------|----------------------|
| Urgent (Slack DM) | 15 minutes |
| Important (Email) | 4 hours |
| Regular (Async) | 24 hours |

## Home Office Requirements

For remote and hybrid workers:
- Reliable internet (minimum 50 Mbps)
- Dedicated workspace with proper ergonomics
- Webcam-enabled setup for video calls
- Quiet environment for meetings

## Equipment Provided

All employees receive:
- MacBook Pro (M3 Max) or equivalent
- 27" 4K monitor
- Ergonomic keyboard and mouse
- Noise-canceling headphones
- Standing desk (for office-first)

## FAQ

**Q: Can I change my arrangement later?**
A: Yes, with 30 days notice and manager approval.

**Q: What about international relocation?**
A: Requires HR review for tax/legal compliance. Contact hr@digitalworkplace.ai.

**Q: Are there blackout periods?**
A: Major launches and quarterly planning weeks require in-person attendance for relevant teams.

## Resources

- [Full Policy Document](#)
- [Home Office Setup Guide](#)
- [Time Zone Overlap Calculator](#)

Questions? Reach out to your HR Business Partner or post in #remote-work Slack channel.

*— Lisa Park, HR Director*
    `,
    author: {
      id: "user-3",
      name: "Lisa Park",
      role: "HR Director",
      avatar: "/avatars/lisa-park.jpg",
      email: "lisa.park@digitalworkplace.ai",
    },
    department: {
      id: "hr",
      name: "Human Resources",
    },
    type: "announcement",
    visibility: "all",
    pinned: true,
    likes_count: 312,
    comments_count: 89,
    views_count: 2456,
    published_at: "2026-01-25T11:00:00Z",
    tags: ["Policy", "Remote Work", "HR", "Benefits"],
    attachments: [
      { id: "att-3", type: "file", name: "Remote-Work-Policy-2026.pdf", url: "#", size: 890000 },
      { id: "att-4", type: "file", name: "Home-Office-Setup-Guide.pdf", url: "#", size: 1200000 },
    ],
    comments: [
      {
        id: "c5",
        author: { id: "u7", name: "Alex Kim", role: "Senior Staff Engineer", avatar: "AK" },
        content: "This is fantastic! The flexibility options are exactly what modern teams need. Thank you for listening to feedback!",
        likes: 89,
        timestamp: "2026-01-25T12:00:00Z",
        replies: [
          {
            id: "c5-r1",
            author: { id: "u3", name: "Lisa Park", role: "HR Director", avatar: "LP" },
            content: "We heard you loud and clear! This policy was shaped by over 200 survey responses.",
            likes: 34,
            timestamp: "2026-01-25T12:30:00Z",
          },
        ],
      },
    ],
    relatedPosts: ["6", "9", "11"],
  },
  "4": {
    id: "4",
    title: "Product Launch: AI Assistant 3.0 Now Available",
    content: `
# Introducing AI Assistant 3.0

After months of development and beta testing with 50+ enterprise customers, we're proud to announce the general availability of AI Assistant 3.0!

## What's New

### Advanced Reasoning Engine
Our new reasoning engine can:
- Break down complex problems into logical steps
- Show its thinking process for transparency
- Self-correct when it detects errors
- Handle multi-step workflows autonomously

### Enhanced Knowledge Integration
- **Real-time data access**: Connect to live databases and APIs
- **Document understanding**: Process PDFs, spreadsheets, images
- **Contextual memory**: Remember conversation history across sessions
- **Source citations**: Every answer includes verifiable sources

### Enterprise Security
- SOC 2 Type II certified
- End-to-end encryption
- Role-based access control
- Audit logging for compliance

## Performance Benchmarks

| Metric | v2.5 | v3.0 | Improvement |
|--------|------|------|-------------|
| Response accuracy | 87% | 96% | +10% |
| Query processing time | 2.3s | 0.8s | -65% |
| Context window | 8K tokens | 128K tokens | 16x |
| Concurrent users | 1,000 | 10,000 | 10x |

## New Features

### 1. Workflow Automation
Create complex automations with natural language:
\`\`\`
"Every Monday at 9 AM, summarize last week's support tickets,
identify trends, and send a report to the CS team"
\`\`\`

### 2. Multi-Modal Understanding
Upload images, charts, and diagrams:
- Architectural diagrams → code generation
- Screenshots → bug reports
- Charts → data analysis

### 3. Collaborative Mode
Work together with AI:
- Real-time document co-editing
- Brainstorming sessions
- Code review assistance

## Migration Guide

Existing v2.5 users will be automatically upgraded over the next 2 weeks. No action required.

**New API endpoints:**
- \`/v3/chat\` - Enhanced conversation API
- \`/v3/workflow\` - Workflow automation API
- \`/v3/knowledge\` - Knowledge base API

## Training Resources

- [Video: What's New in 3.0](# "30-minute overview")
- [Documentation](# "Full technical docs")
- [API Reference](# "Developer guide")
- [Best Practices](# "Tips and tricks")

## Feedback

We want to hear from you! Share your experience:
- Slack: #ai-assistant-feedback
- Email: product@digitalworkplace.ai

*— James Wilson, Product Lead*
    `,
    author: {
      id: "user-4",
      name: "James Wilson",
      role: "Product Lead",
      avatar: "/avatars/james-wilson.jpg",
      email: "james.wilson@digitalworkplace.ai",
    },
    department: {
      id: "product",
      name: "Product",
    },
    type: "announcement",
    visibility: "all",
    pinned: true,
    likes_count: 445,
    comments_count: 112,
    views_count: 3567,
    published_at: "2026-01-24T08:00:00Z",
    tags: ["Product", "AI", "Launch", "Features"],
    attachments: [
      { id: "att-5", type: "file", name: "AI-Assistant-3.0-Release-Notes.pdf", url: "#", size: 1500000 },
    ],
    comments: [
      {
        id: "c6",
        author: { id: "u8", name: "Emily Rodriguez", role: "Customer Success Manager", avatar: "ER" },
        content: "Our customers have been asking for the 128K context window! This will be a game-changer for document analysis.",
        likes: 56,
        timestamp: "2026-01-24T09:00:00Z",
        replies: [],
      },
    ],
    relatedPosts: ["1", "7", "10"],
  },
  "5": {
    id: "5",
    title: "Office Renovation Complete - New Spaces Now Open!",
    content: `
# Our Refreshed Office is Ready!

After 3 months of renovation, our headquarters is now complete with exciting new spaces designed for collaboration, focus, and wellness.

## New Spaces

### The Innovation Hub (Floor 3)
- 4 soundproof brainstorming pods
- Interactive whiteboard walls
- VR/AR demo area
- Prototype workshop with 3D printers

### The Library (Floor 2)
- 20 individual focus pods
- Whisper-quiet environment
- Natural lighting with plants
- Book collection (500+ titles)

### The Rooftop Terrace
- Outdoor meeting spaces
- BBQ and entertainment area
- Garden with fresh herbs
- City skyline views

### Wellness Center (Floor 1)
- Meditation room
- Yoga studio
- Shower facilities
- Nap pods (yes, really!)

## Booking Information

All spaces can be booked via the new **Room Booking** feature in the intranet:
1. Go to Dashboard → Room Booking
2. Select space and time
3. Invite attendees
4. Confirm booking

**Peak hours** (10 AM - 4 PM): Max 2-hour bookings
**Off-peak**: Unlimited booking duration

## Grand Opening Celebration

**Date**: Friday, January 31st
**Time**: 3:00 PM - 7:00 PM
**Activities**:
- Guided tours every 30 minutes
- Food trucks in the parking lot
- Live music by "The Debuggers" (our employee band!)
- Prize drawings for office supplies

## Sustainability Features

Our renovation prioritized sustainability:
- 100% LED lighting (energy savings: 40%)
- Recycled materials in 60% of furniture
- Smart HVAC system
- EV charging stations (8 new spots)
- Solar panels on rooftop

## Before & After Gallery

[View the full photo gallery](#)

Thank you for your patience during the construction. We can't wait to see you enjoying the new spaces!

*— Facilities Team*
    `,
    author: {
      id: "user-5",
      name: "Tom Chen",
      role: "Facilities Manager",
      avatar: "/avatars/tom-chen.jpg",
      email: "tom.chen@digitalworkplace.ai",
    },
    department: {
      id: "ops",
      name: "Operations",
    },
    type: "announcement",
    visibility: "all",
    pinned: false,
    likes_count: 287,
    comments_count: 65,
    views_count: 1890,
    published_at: "2026-01-23T10:00:00Z",
    tags: ["Office", "Facilities", "Renovation", "Wellness"],
    attachments: [],
    comments: [
      {
        id: "c7",
        author: { id: "u9", name: "Jordan Williams", role: "Senior Frontend Engineer", avatar: "JW" },
        content: "The Library looks amazing! Finally a quiet space for deep work. Can't wait to try the focus pods!",
        likes: 45,
        timestamp: "2026-01-23T11:00:00Z",
        replies: [],
      },
    ],
    relatedPosts: ["3", "6", "12"],
  },
  // Add more news items...
  "6": {
    id: "6",
    title: "Annual Benefits Enrollment Open - Action Required by Feb 15",
    content: `
# 2026 Benefits Enrollment Now Open

It's that time of year! Annual benefits enrollment is now open and will close on **February 15th, 2026**.

## What's New for 2026

### Healthcare
- **New PPO Option**: Lower premiums, wider network
- **Mental Health Coverage**: Unlimited therapy sessions covered at 100%
- **Fertility Benefits**: Up to $25,000 lifetime coverage
- **Telehealth**: $0 copay for virtual visits

### Wellness Programs
- **Gym Reimbursement**: Increased to $150/month (was $100)
- **Wellness Stipend**: $1,000 annual for health-related purchases
- **Health Coaching**: Free 1:1 sessions with certified coaches

### Financial Benefits
- **401(k) Match**: Increased to 6% (was 4%)
- **Stock Options**: Refresher grants for employees >2 years
- **Student Loan Assistance**: $200/month contribution (new!)
- **Pet Insurance**: Discounted group rates (new!)

## Action Required

1. **Review current elections** in Benefits Portal
2. **Update dependents** if family situation changed
3. **Select 2026 plans** by February 15th
4. **Submit FSA/HSA elections** if applicable

## Important Dates

| Date | Event |
|------|-------|
| Jan 20 | Enrollment opens |
| Jan 25 | Benefits Fair (virtual) |
| Feb 1 | Deadline for benefit questions |
| Feb 15 | **Enrollment closes (5 PM PT)** |
| Mar 1 | New benefits effective |

## Resources

- [2026 Benefits Guide (PDF)](#)
- [Plan Comparison Tool](#)
- [Benefits Portal](#)
- [FAQ Document](#)

## Questions?

- **Benefits Team Office Hours**: Mon-Wed, 2-4 PM (Room 2B or Zoom)
- **Email**: benefits@digitalworkplace.ai
- **Slack**: #benefits-help

Don't miss the deadline!

*— HR Benefits Team*
    `,
    author: {
      id: "user-6",
      name: "Amanda Foster",
      role: "Benefits Manager",
      avatar: "/avatars/amanda-foster.jpg",
      email: "amanda.foster@digitalworkplace.ai",
    },
    department: {
      id: "hr",
      name: "Human Resources",
    },
    type: "announcement",
    visibility: "all",
    pinned: true,
    likes_count: 198,
    comments_count: 56,
    views_count: 2134,
    published_at: "2026-01-20T09:00:00Z",
    tags: ["Benefits", "HR", "Enrollment", "Healthcare"],
    attachments: [
      { id: "att-6", type: "file", name: "2026-Benefits-Guide.pdf", url: "#", size: 3200000 },
    ],
    comments: [],
    relatedPosts: ["3", "9", "11"],
  },
};

// Types
interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email?: string;
}

interface CommentReply {
  id: string;
  author: { id: string; name: string; role: string; avatar: string };
  content: string;
  likes: number;
  timestamp: string;
}

interface Comment {
  id: string;
  author: { id: string; name: string; role: string; avatar: string };
  content: string;
  likes: number;
  timestamp: string;
  replies: CommentReply[];
}

interface NewsPostDetail {
  id: string;
  title: string;
  content: string;
  author: Author;
  department: { id: string; name: string };
  type: string;
  visibility: string;
  pinned: boolean;
  likes_count: number;
  comments_count: number;
  views_count: number;
  published_at: string;
  tags: string[];
  attachments: { id: string; type: string; name: string; url: string; size?: number }[];
  comments: Comment[];
  relatedPosts: string[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);

  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return formatDate(dateString);
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<NewsPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    const id = params.id as string;
    // Simulate API fetch
    setTimeout(() => {
      const newsPost = mockNewsData[id];
      setPost(newsPost || null);
      setLoading(false);
    }, 500);
  }, [params.id]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return;
    setSubmittingComment(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setNewComment("");
    setSubmittingComment(false);
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

  if (!post) {
    return (
      <div className="flex h-screen bg-[var(--bg-obsidian)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <FadeIn>
              <div className="text-center py-16">
                <AlertCircle className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  News Post Not Found
                </h1>
                <p className="text-[var(--text-secondary)] mb-6">
                  The news post you&apos;re looking for doesn&apos;t exist or has been removed.
                </p>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-ember)] text-white rounded-lg hover:bg-[var(--accent-ember-soft)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to News
                </Link>
              </div>
            </FadeIn>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[var(--bg-obsidian)]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Back Button */}
          <FadeIn>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-ember)] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </FadeIn>

          {/* Article Header */}
          <FadeIn delay={0.1}>
            <div className="mb-8">
              {post.pinned && (
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--accent-ember)]/20 text-[var(--accent-ember)] rounded-full text-xs mb-4">
                  <Pin className="w-3 h-3" />
                  Pinned
                </div>
              )}
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-ember)]/20 flex items-center justify-center text-[var(--accent-ember)] font-medium">
                    {post.author.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] font-medium">{post.author.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{post.author.role}</p>
                  </div>
                </div>
                <span className="text-[var(--text-muted)]">•</span>
                <div className="flex items-center gap-1 text-[var(--text-secondary)] text-sm">
                  <Clock className="w-4 h-4" />
                  {formatDate(post.published_at)}
                </div>
                <span className="text-[var(--text-muted)]">•</span>
                <div className="flex items-center gap-1 text-[var(--text-secondary)] text-sm">
                  <Eye className="w-4 h-4" />
                  {post.views_count.toLocaleString()} views
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Tags */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-full text-xs text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Article Content */}
          <FadeIn delay={0.2}>
            <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-8 mb-6">
              <div
                className="prose prose-invert max-w-none
                  prose-headings:text-[var(--text-primary)]
                  prose-p:text-[var(--text-secondary)]
                  prose-strong:text-[var(--text-primary)]
                  prose-a:text-[var(--accent-ember)]
                  prose-code:text-[var(--accent-gold)]
                  prose-pre:bg-[var(--bg-slate)]
                  prose-pre:border
                  prose-pre:border-[var(--border-subtle)]
                  prose-table:border-collapse
                  prose-th:border
                  prose-th:border-[var(--border-subtle)]
                  prose-th:p-2
                  prose-th:bg-[var(--bg-slate)]
                  prose-td:border
                  prose-td:border-[var(--border-subtle)]
                  prose-td:p-2
                  prose-li:text-[var(--text-secondary)]
                "
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^# /gm, '<h1 class="text-2xl font-bold mb-4 mt-8">')
                    .replace(/^## /gm, '<h2 class="text-xl font-semibold mb-3 mt-6">')
                    .replace(/^### /gm, '<h3 class="text-lg font-medium mb-2 mt-4">')
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-[var(--bg-slate)] rounded text-sm">$1</code>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/\n- /g, '</p><li class="ml-4 mb-1">• ')
                    .replace(/\n\d\. /g, '</p><li class="ml-4 mb-1">')
                    .replace(/\|([^|]+)\|/g, (match) => {
                      const cells = match.split('|').filter(c => c.trim());
                      return `<tr>${cells.map(c => `<td class="border border-[var(--border-subtle)] p-2">${c.trim()}</td>`).join('')}</tr>`;
                    }),
                }}
              />
            </div>
          </FadeIn>

          {/* Attachments */}
          {post.attachments.length > 0 && (
            <FadeIn delay={0.25}>
              <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Attachments ({post.attachments.length})
                </h3>
                <div className="space-y-2">
                  {post.attachments.map((attachment) => (
                    <a
                      key={attachment.id}
                      href={attachment.url}
                      className="flex items-center gap-3 p-3 bg-[var(--bg-slate)] rounded-lg hover:bg-[var(--bg-obsidian)] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[var(--accent-ember)]/20 rounded-lg flex items-center justify-center">
                        <Tag className="w-5 h-5 text-[var(--accent-ember)]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[var(--text-primary)] font-medium">{attachment.name}</p>
                        {attachment.size && (
                          <p className="text-xs text-[var(--text-muted)]">
                            {formatFileSize(attachment.size)}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* Actions Bar */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-between p-4 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    liked
                      ? "bg-[var(--accent-ember)] text-white"
                      : "bg-[var(--bg-slate)] text-[var(--text-secondary)] hover:bg-[var(--bg-obsidian)]"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                  {post.likes_count + (liked ? 1 : 0)}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-slate)] text-[var(--text-secondary)] rounded-lg hover:bg-[var(--bg-obsidian)] transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments_count}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 bg-[var(--bg-slate)] text-[var(--text-secondary)] rounded-lg hover:bg-[var(--bg-obsidian)] transition-colors"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-colors ${
                    bookmarked
                      ? "bg-[var(--accent-gold)]/20 text-[var(--accent-gold)]"
                      : "bg-[var(--bg-slate)] text-[var(--text-secondary)] hover:bg-[var(--bg-obsidian)]"
                  }`}
                  title="Bookmark"
                >
                  <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Comments Section */}
          <FadeIn delay={0.35}>
            <div className="bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
                Comments ({post.comments.length})
              </h3>

              {/* New Comment Input */}
              <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-ember)]/20 flex items-center justify-center text-[var(--accent-ember)] font-medium flex-shrink-0">
                  U
                </div>
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full px-4 py-3 bg-[var(--bg-slate)] border border-[var(--border-subtle)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-ember)] resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={handleSubmitComment}
                      disabled={!newComment.trim() || submittingComment}
                      className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-ember)] text-white rounded-lg hover:bg-[var(--accent-ember-soft)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submittingComment ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>

              {/* Existing Comments */}
              <div className="space-y-6">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent-ember)]/20 flex items-center justify-center text-[var(--accent-ember)] font-medium flex-shrink-0">
                        {comment.author.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[var(--text-primary)] font-medium">
                            {comment.author.name}
                          </span>
                          <span className="text-xs text-[var(--text-muted)]">
                            {comment.author.role}
                          </span>
                          <span className="text-xs text-[var(--text-muted)]">•</span>
                          <span className="text-xs text-[var(--text-muted)]">
                            {formatRelativeTime(comment.timestamp)}
                          </span>
                        </div>
                        <p className="text-[var(--text-secondary)] mb-2">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--accent-ember)] text-sm transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            {comment.likes}
                          </button>
                          <button className="text-[var(--text-muted)] hover:text-[var(--accent-ember)] text-sm transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="ml-12 space-y-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)] text-sm font-medium flex-shrink-0">
                              {reply.author.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[var(--text-primary)] font-medium text-sm">
                                  {reply.author.name}
                                </span>
                                <span className="text-xs text-[var(--text-muted)]">
                                  {formatRelativeTime(reply.timestamp)}
                                </span>
                              </div>
                              <p className="text-[var(--text-secondary)] text-sm">{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Related Posts */}
          {post.relatedPosts.length > 0 && (
            <FadeIn delay={0.4}>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Related Posts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {post.relatedPosts.map((relatedId) => {
                    const relatedPost = mockNewsData[relatedId];
                    if (!relatedPost) return null;
                    return (
                      <Link
                        key={relatedId}
                        href={`/news/${relatedId}`}
                        className="block p-4 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] rounded-xl hover:border-[var(--accent-ember)]/50 transition-colors"
                      >
                        <h4 className="text-[var(--text-primary)] font-medium line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          {formatRelativeTime(relatedPost.published_at)}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </main>
    </div>
  );
}
