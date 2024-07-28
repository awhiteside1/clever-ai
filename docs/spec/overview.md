# System Overview

This document summarizes the functionality and design of Clever AI, a system that helps humans solve problems and
brainstorm good ideas that are relavent.

## The Problem

At work, home, and internally, humans need to handle many hard problems with limited mental bandwidth. These problems
may not be fully understood, are highly contextual, and there may be multiple possible solutions. Humans also have
limited knowledge, time, and are impacted by their mood and when they ate.

Experts have found frameworks and methodologies to help humans come up with ideas that have enough variety to be useful,
and many examples of situations and how they were resolved are publicly available, but not in a machine friendly way.

Humans therefore come up with suboptimal ideas, which have huge impacts and are costly to change later, or are recurring
and add up over time.

## Solution

A platform to help users come up with ideas using expert methods, feedback, and context, easily from any application.

### Critical Features

- Extracts context and knowledge from user resources shared via Drive,Dropbox, etc.
- Determines user needs from chat or in context
- Generates and evaluates ideas using expert methods
- Allows for feedback, user modifications, and real time chat based discussions
- Keeps a system mindset and can be applied for any level of problem

## System Design

### Interactions

Dedicated App/Website for Users to manage projects, link resources, discuss ideas, etc.

API and custom integrations for idea generation use in IDEs, word processors, productivity apps, etc

Integration with storage providers to link files and documents to analyze.

Catalog of curated methodologies, influences, templates and prompts managed like a CMS by admins.

## Expected volatility

The system will need to evolve mostly in:

- new ways to find information and determine what context is needed to generate ideas and understand the user's problem.
- Extracting and maintaining a dedicated context knowledge graph for a variety of sources.
- The specific integrations a user interacts with

### Concepts

Refer to [Concepts](./concepts.md) for a list of domain concepts

### Architecture

Refer to [Architecture](./architecture.md) for a technical design
