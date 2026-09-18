export const CASE_STUDIES = {
  title: "Case Studies",
  description:
    "Deep dives into frontend architecture decisions, state management, and reusable systems built for real enterprise products.",
  items: [
    {
      id: "chexpass",
      title: "ChexPass — Frontend Architecture & State Management",
      role: "Frontend Engineer",
      product: "Multi-tenant security platform",
      stack: [
        "React",
        "TypeScript",
        "Zustand",
        "GraphQL",
        "MUI",
        "Tailwind CSS",
        "React Hook Form",
        "Yup",
      ],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "ChexPass is a multi-tenant security platform used to manage enterprise security-related workflows and applications.",
            "My work focused on building and evolving the frontend architecture, improving state management, creating reusable UI patterns, and integrating frontend features with GraphQL APIs.",
            "As the application grew, one of the challenges was keeping frontend state predictable and preventing changes in one part of the application from unnecessarily affecting unrelated components.",
          ],
        },
        {
          heading: "The Problem",
          paragraphs: [
            "The application used React Context for several pieces of shared state.",
            "While Context worked well for relatively stable global data, some frequently changing state was consumed by multiple components. This could cause components to re-render when they did not actually depend on the state that changed.",
            "The challenge was not simply to introduce another state-management library. The goal was to make state ownership and subscriptions more explicit while keeping the architecture simple for the team.",
          ],
        },
        {
          heading: "Technical Approach",
          paragraphs: [
            "I migrated appropriate shared state from Context API to Zustand.",
            "The important part of the migration was separating different types of state:",
          ],
          bullets: [
            "Local UI state remained inside components.",
            "Shared application state was moved to Zustand where appropriate.",
            "Components subscribed to the specific state they needed rather than depending on a broad Context value.",
            "Existing application behavior was preserved while changing the underlying state-management approach.",
          ],
          paragraphsAfter: [
            "This made state dependencies easier to reason about and helped reduce unnecessary re-renders.",
          ],
        },
        {
          heading: "GraphQL Integration",
          paragraphs: [
            "The frontend communicated with backend services through GraphQL.",
            "I worked with reusable custom hooks to encapsulate GraphQL queries and mutations instead of spreading API implementation details throughout UI components.",
            "This created a cleaner separation between:",
          ],
          highlight: "UI → custom hook → GraphQL operation → backend",
          paragraphsAfter: [
            "It also made feature components easier to read and reuse.",
          ],
        },
        {
          heading: "Frontend Architecture",
          paragraphs: [
            "I contributed to establishing reusable frontend patterns across the application, including:",
          ],
          bullets: [
            "Reusable UI components",
            "Shared form patterns",
            "Consistent validation",
            "State-management conventions",
            "GraphQL custom hooks",
            "MUI and Tailwind-based UI implementation",
            "Consistent component structure",
          ],
          paragraphsAfter: [
            "The objective was to make new features easier to implement without every developer solving the same frontend problems independently.",
          ],
        },
        {
          heading: "Key Engineering Decision",
          paragraphs: [
            "One of the main architectural decisions was not to put everything into global state.",
            "The approach was:",
          ],
          quote:
            "Use local state for local concerns and shared state only when multiple parts of the application actually need it.",
          paragraphsAfter: [
            "This reduced unnecessary coupling and kept components easier to understand.",
          ],
        },
        {
          heading: "Result",
          paragraphs: [
            "The state-management changes reduced unnecessary re-renders in areas affected by broad Context subscriptions and made shared-state dependencies more explicit.",
            "The broader frontend architecture also established more consistent patterns for building features across the product.",
          ],
        },
        {
          heading: "What I Learned",
          paragraphs: [
            "This project reinforced an important frontend architecture principle:",
          ],
          highlight:
            "A state-management library does not automatically create good state architecture.",
          paragraphsAfter: ["The important questions are:"],
          bullets: [
            "Who owns this state?",
            "Who needs to read it?",
            "How frequently does it change?",
            "What should re-render when it changes?",
            "Does this state actually need to be global?",
          ],
          closing:
            "Those questions are more important than simply choosing a particular library.",
        },
      ],
    },
    {
      id: "ui-library",
      title: "Enterprise Frontend UI Library — Reusable Components & Developer Productivity",
      role: "Frontend Engineer",
      product: "Multiple enterprise applications",
      stack: ["React", "TypeScript", "MUI", "Tailwind CSS", "Yup"],
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "While working across multiple enterprise applications, I identified repeated frontend implementation patterns across features and products.",
            "Different teams and developers were solving similar UI and form-validation problems repeatedly. This created an opportunity to establish shared building blocks and frontend conventions.",
            "I contributed to a reusable frontend library combining UI components, styling patterns, and validation utilities.",
          ],
        },
        {
          heading: "The Problem",
          paragraphs: [
            "Without shared frontend primitives, common functionality can gradually become duplicated:",
          ],
          bullets: [
            "Buttons and form controls are implemented differently.",
            "Validation patterns are repeated.",
            "Styling decisions vary between features.",
            "Developers spend time rebuilding existing patterns.",
            "Changes become harder to apply consistently.",
          ],
          paragraphsAfter: [
            "The goal was to provide reusable building blocks while still allowing individual features to remain flexible.",
          ],
        },
        {
          heading: "The Solution",
          paragraphs: [
            "I worked with a shared component and utility approach built around:",
          ],
          highlight: "MUI + Tailwind CSS + Yup",
          paragraphsAfter: [
            "The library provided reusable UI patterns and validation utilities that could be consumed by different features.",
            "Instead of creating every feature from scratch, developers could compose existing primitives and focus more of their implementation effort on product-specific functionality.",
          ],
        },
        {
          heading: "Component Architecture",
          paragraphs: [
            "The approach emphasized reusable primitives rather than highly specialized components.",
            "For example, common UI and form requirements could be standardized while allowing feature-level components to control business logic.",
            "The architecture separated:",
          ],
          highlight:
            "Reusable UI → Form/validation utilities → Feature-specific business logic",
          paragraphsAfter: [
            "This helped prevent reusable components from becoming tightly coupled to a single feature.",
          ],
        },
        {
          heading: "Consistency",
          paragraphs: [
            "A shared library also established common frontend conventions.",
            "This included consistent approaches to:",
          ],
          bullets: [
            "Component implementation",
            "Form validation",
            "UI styling",
            "Reusable UI patterns",
            "Frontend structure",
          ],
          paragraphsAfter: [
            "The benefit was not only visual consistency. It also reduced the amount of repeated engineering work across applications.",
          ],
        },
        {
          heading: "Developer Productivity",
          paragraphs: [
            "The shared library reduced feature development time by approximately 30% for areas that could leverage the reusable components and utilities.",
            "It also contributed to a more consistent development experience for frontend developers working across the products.",
          ],
        },
        {
          heading: "Onboarding",
          paragraphs: [
            "Another benefit was reducing the amount of frontend knowledge developers needed to build common features from scratch.",
            "Reusable patterns and established conventions helped make the onboarding process approximately 20% faster.",
            "Instead of learning how every feature implemented common UI and validation patterns independently, developers could work from established building blocks.",
          ],
        },
        {
          heading: "Trade-offs",
          paragraphs: [
            "A shared component library also introduces its own challenges.",
            "Over-abstraction can make components difficult to customize, while under-abstraction simply reproduces duplicated code.",
            "The approach therefore focused on reusable patterns that represented genuinely repeated requirements rather than attempting to create a component for every possible use case.",
          ],
        },
        {
          heading: "Result",
          paragraphs: [
            "The library provided a common foundation for frontend development across enterprise applications.",
            "The measurable outcomes included:",
          ],
          bullets: [
            "Approximately 30% reduction in feature development time for applicable work.",
            "Approximately 20% faster onboarding.",
            "More consistent UI and validation patterns.",
            "Reduced duplication of common frontend implementation work.",
          ],
        },
        {
          heading: "What I Learned",
          paragraphs: [
            "Building reusable frontend infrastructure requires balancing consistency and flexibility.",
            "A good shared component is not simply one that can be reused. It should also have:",
          ],
          bullets: [
            "A clear API",
            "A well-defined responsibility",
            "Reasonable customization",
            "Minimal business-logic coupling",
            "A clear reason to exist",
          ],
          paragraphsAfter: [
            "The goal is not maximum abstraction.",
          ],
          highlight:
            "The goal is to make the common path easier without making the uncommon path impossible.",
        },
      ],
    },
    {
      id: "reusable-hooks",
      title: "Reducing API Repetition with Reusable Custom Hooks",
      role: "Frontend Engineer",
      product: "React application with GraphQL APIs",
      stack: ["React", "TypeScript", "GraphQL", "Custom Hooks"],
      sections: [
        {
          heading: "The Challenge",
          paragraphs: [
            "While working on a React application, I noticed that API and GraphQL logic was being repeated across multiple components.",
            "Different team members were implementing similar API calls by copying and modifying the same logic in multiple places. This led to duplicated code and made API-related changes harder to maintain.",
            "For example, similar patterns for fetching data, handling loading states, errors, and responses were being repeated across different components.",
          ],
        },
        {
          heading: "My Approach",
          paragraphs: [
            "I identified the repeated API patterns and extracted the common logic into reusable custom React hooks.",
            "Instead of writing the API logic directly inside every component, developers could use a dedicated hook and focus only on the UI and component-specific behavior.",
            "For example:",
          ],
          diagrams: [
            {
              label: "Before",
              content: `Component A
 └── API logic
 └── loading/error handling

Component B
 └── API logic
 └── loading/error handling

Component C
 └── API logic
 └── loading/error handling`,
            },
            {
              label: "After",
              content: `Custom Hook
 ├── API logic
 ├── loading state
 └── error handling
       ↓
 ┌─────────────┬─────────────┬─────────────┐
 Component A   Component B   Component C`,
            },
          ],
          paragraphsAfter: [
            "I moved the shared behavior into reusable hooks so each component could consume the same API layer without duplicating it.",
          ],
        },
        {
          heading: "Implementation",
          paragraphs: [
            "I created custom hooks around the application's existing API/GraphQL layer so that the same logic could be reused wherever needed.",
            "This allowed components to consume data through a simple and consistent interface rather than duplicating the underlying API implementation.",
          ],
        },
        {
          heading: "Impact",
          bullets: [
            "Reduced repeated API and data-fetching code across components.",
            "Created a more consistent pattern for handling API interactions.",
            "Made components more focused on presentation and UI behavior.",
            "Simplified future API-related changes because shared logic was centralized.",
            "Made it easier for other team members to reuse existing API functionality instead of implementing it again.",
          ],
        },
        {
          heading: "Key Takeaway",
          paragraphs: [
            "This was less about creating a new technical feature and more about identifying repetition in the codebase and turning it into a reusable abstraction.",
            "The experience reinforced an important frontend engineering principle:",
          ],
          quote:
            "When the same logic starts appearing in multiple places, look for an abstraction that improves reuse without hiding important behavior.",
        },
      ],
    },
  ],
};
