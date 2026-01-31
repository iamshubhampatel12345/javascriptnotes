export interface Topic {
  id: string;
  title: string;
}

export interface Phase {
  id: string;
  phase: string;
  description?: string;
  topics: Topic[];
}

export const jsTopics: Phase[] = [
  {
    id: 'phase-1',
    phase: 'Phase 1: JavaScript Foundations',
    description: 'Start here! Learn the basics: variables, functions, loops, and how to write your first JavaScript code.',
    topics: [
      { id: 'intro-to-js', title: 'Introduction to JavaScript' },
      { id: 'js-basics', title: 'JavaScript Basics' },
      { id: 'operators', title: 'Operators' },
      { id: 'control-flow', title: 'Control Flow' },
      { id: 'functions', title: 'Functions' },
    ],
  },
  {
    id: 'phase-2',
    phase: 'Phase 2: Core JavaScript',
    description: 'Understand how JavaScript really works: scope, closures, this keyword, and execution context.',
    topics: [
      { id: 'execution-context', title: 'Execution Context & Memory' },
      { id: 'scope-hoisting', title: 'Scope & Hoisting' },
      { id: 'this-keyword', title: 'this Keyword' },
      { id: 'closures', title: 'Closures' },
      { id: 'call-apply-bind', title: 'Call, Apply, Bind' },
    ],
  },
  {
    id: 'phase-3',
    phase: 'Phase 3: Objects & OOP',
    description: 'Master objects, prototypes, classes, and object-oriented programming in JavaScript.',
    topics: [
      { id: 'objects', title: 'Objects in JavaScript' },
      { id: 'prototypes', title: 'Prototypes & Inheritance' },
      { id: 'constructors', title: 'Constructor Functions' },
      { id: 'es6-classes', title: 'ES6 Classes' },
      { id: 'oop-concepts', title: 'OOP Concepts' },
    ],
  },
  {
    id: 'phase-4',
    phase: 'Phase 4: Asynchronous JavaScript',
    description: 'Learn async programming: callbacks, Promises, async/await, and the Event Loop.',
    topics: [
      { id: 'sync-async', title: 'Synchronous vs Asynchronous' },
      { id: 'callbacks', title: 'Callbacks' },
      { id: 'promises', title: 'Promises' },
      { id: 'async-await', title: 'Async / Await' },
      { id: 'event-loop', title: 'Event Loop' },
    ],
  },
  {
    id: 'phase-5',
    phase: 'Phase 5: Arrays, Strings & Functional JS',
    description: 'Deep dive into arrays, strings, functional programming, and performance techniques.',
    topics: [
      { id: 'arrays', title: 'Arrays (Deep Dive)' },
      { id: 'strings', title: 'Strings' },
      { id: 'functional-programming', title: 'Functional Programming' },
      { id: 'debounce-throttle', title: 'Debouncing & Throttling' },
    ],
  },
  {
    id: 'phase-6',
    phase: 'Phase 6: DOM & Browser JavaScript',
    description: 'Make websites interactive! Learn DOM manipulation, events, forms, and browser APIs.',
    topics: [
      { id: 'dom-basics', title: 'DOM Basics' },
      { id: 'events', title: 'Events' },
      { id: 'forms-validation', title: 'Forms & Validation' },
      { id: 'browser-apis', title: 'Browser APIs' },
      { id: 'fetch-ajax', title: 'Fetch API & AJAX' },
    ],
  },
  {
    id: 'phase-7',
    phase: 'Phase 7: Modern JavaScript',
    description: 'Use the latest ES6+ features: destructuring, spread operators, modules, and more.',
    topics: [
      { id: 'es6-features', title: 'ES6+ Features' },
    ],
  },
  {
    id: 'phase-8',
    phase: 'Phase 8: Performance & Optimization',
    description: 'Write fast, efficient code. Learn performance measurement and optimization techniques.',
    topics: [
      { id: 'performance', title: 'Performance Concepts' },
      { id: 'optimization', title: 'Optimization Techniques' },
    ],
  },
  {
    id: 'phase-9',
    phase: 'Phase 9: Debugging & Testing',
    description: 'Find and fix bugs like a pro. Learn debugging tools and testing basics.',
    topics: [
      { id: 'debugging', title: 'Debugging' },
      { id: 'testing', title: 'Testing Basics' },
    ],
  },
  {
    id: 'phase-10',
    phase: 'Phase 10: JavaScript for Backend',
    description: 'Use JavaScript on the server with Node.js and build REST APIs.',
    topics: [
      { id: 'nodejs', title: 'Node.js Fundamentals' },
      { id: 'rest-api', title: 'REST API Basics' },
    ],
  },
  {
    id: 'phase-11',
    phase: 'Phase 11: Security & Best Practices',
    description: 'Write secure code. Learn about common vulnerabilities and how to prevent them.',
    topics: [
      { id: 'security', title: 'Security' },
    ],
  },
];
