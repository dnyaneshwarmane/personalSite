import { Experiment, Project, SkillGroup } from './model';

/**
 * Edit this file to change the words, links, and projects on the site.
 * If you register mane.click instead of mane.dev, update `siteUrl` and the email.
 */
export const profile = {
  name: 'Dnyaneshwar Mane',
  givenName: 'Dnyaneshwar',
  familyName: 'Mane',
  role: 'Software developer',
  location: 'Pune, India',
  company: 'Verificient Technologies',
  workStart: '2017-02-01',
  workStartLabel: 'February 2017',
  email: 'manedv2292@gmail.com',
  photo: '/portrait.png',
  phone: '+91 99210 48616',
  phoneLink: 'tel:+919921048616',
  siteName: 'mane',
  siteUrl: 'https://mane.dev',
  alternateDomain: 'mane.click',
  github: 'https://github.com/dnyaneshwarmane',
  linkedin: 'https://www.linkedin.com/in/dnyaneahwar-mane',
  hashnode: 'https://hashnode.com/@maned',
  summary:
    'Software developer in Pune. Nine years of Qt and C++ desktop work, now building with Electron, Angular, and TypeScript.',
};

export const nav = [
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/ai', label: 'AI' },
  { path: '/blog', label: 'Blog' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    summary: 'C++ is the language I have used for the job. TypeScript is the one I am learning in public.',
    items: [
      { name: 'C++', note: 'Daily desktop work since 2017' },
      { name: 'TypeScript', note: 'Components, types, and real pages' },
      { name: 'JavaScript', note: 'Enough to read what the tools emit' },
      { name: 'HTML & CSS', note: 'Layout, type, and responsive pages' },
    ],
  },
  {
    title: 'Desktop',
    summary: 'Native software first. Electron is the bridge when the interface wants the web.',
    items: [
      { name: 'Qt', note: 'Widgets, Core, qmake, Qt Creator' },
      { name: 'Qt Creator', note: 'Build, debug, and stay inside the code' },
      { name: 'Electron', note: 'Desktop shell, web UI inside' },
      { name: 'Windows', note: 'Where the applications actually run' },
    ],
  },
  {
    title: 'Web',
    summary: 'Angular is the framework I am using to learn product-shaped web development.',
    items: [
      { name: 'Angular', note: 'Standalone components and routing' },
      { name: 'Services', note: 'Shared data, one place to edit it' },
      { name: 'Reactive forms', note: 'Contact, validation, clear errors' },
      { name: 'Responsive layout', note: 'The same page on a phone and a desk' },
    ],
  },
  {
    title: 'Practice',
    summary: 'The tools around the code, plus the subjects I am studying on purpose.',
    items: [
      { name: 'Git & GitHub', note: 'History, review, and a public trail' },
      { name: 'Node.js & npm', note: 'Install, serve, and production builds' },
      { name: 'AI pair work', note: 'Drafts and explanations I still read' },
      { name: 'Rust FFI', note: 'A neighbor to the C++ I already know' },
    ],
  },
];

export const chapters = [
  {
    label: '2017',
    title: 'Desktop foundations',
    text: 'I joined Verificient Technologies in Pune as an application developer. The work was Qt and C++: real windows, signals and slots, and software that has to behave on someone else’s machine.',
  },
  {
    label: 'The long middle',
    title: 'Staying with one product',
    text: 'Most of the craft is not a launch. It is keeping a desktop application understandable as it grows: UI state, careful changes, and the habit of reading the code before rewriting it.',
  },
  {
    label: 'The turn',
    title: 'Electron, then Angular',
    text: 'Electron is how I am crossing from a native shell into web technology. Angular and TypeScript are how I want the interface work to be structured: components, routes, and services with a clear job.',
  },
  {
    label: 'Now',
    title: 'Learning in the open',
    text: 'I still work on the desktop product. Beside that I publish notes, small experiments, and this site — practice I can point to, not only a stack I intend to learn.',
  },
];

export const achievements = [
  {
    title: 'A long desktop tenure',
    text: 'Application developer at Verificient Technologies since February 2017, working in Qt and C++.',
  },
  {
    title: 'Software that stays installed',
    text: 'Years of product work where the fix has to survive on a Windows desktop, not only in a refresh.',
  },
  {
    title: 'A public Qt utility',
    text: 'A small console tool that prints CPU usage on Windows, built with Qt Core.',
  },
  {
    title: 'A web stack I can show',
    text: 'This site: Angular, typed content, routing, a resume that prints, and notes written in my own words.',
  },
];

export const projects: Project[] = [
  {
    slug: 'desktop-applications',
    title: 'Desktop applications',
    kind: 'Work',
    year: '2017 — now',
    summary:
      'Qt and C++ product work at Verificient Technologies. Native desktop software, maintained over years.',
    stack: ['Qt', 'C++', 'Windows'],
    featured: true,
    body: [
      {
        type: 'p',
        text: 'Since February 2017 I have been an application developer at Verificient Technologies in Pune. The company works on remote assessment. My part of that is the desktop software: Qt and C++, the interface, and the behavior on the machine where the application runs.',
      },
      {
        type: 'h2',
        text: 'What the years were actually for',
      },
      {
        type: 'p',
        text: 'A desktop codebase gets its character from time. Widgets, signals, and state pile up. The useful skill is knowing which change is small, which module owns a decision, and when a clever rewrite would only move the bug.',
      },
      {
        type: 'ul',
        items: [
          'Application UI and behavior in Qt and C++',
          'Debugging issues that show up on a real Windows desktop',
          'Keeping a long-lived codebase readable for the next change',
        ],
      },
      {
        type: 'p',
        text: 'This work is not a public repository. The product details stay with the company. The public record is the tenure, the stack, and the habits I am carrying into Electron and Angular.',
      },
    ],
  },
  {
    slug: 'cpu-usage',
    title: 'CPU usage monitor',
    kind: 'Utility',
    year: 'Qt / C++',
    summary:
      'A Windows console tool. It prints CPU usage every 30 seconds, using Qt Core and GetSystemTimes.',
    stack: ['Qt', 'C++', 'Windows'],
    featured: true,
    href: 'https://github.com/dnyaneshwarmane/CPUUsagePrint',
    hrefLabel: 'View on GitHub',
    body: [
      {
        type: 'p',
        text: 'A small console application: print CPU usage every 30 seconds, then get out of the way. It uses the Qt Core module only, so there is no GUI. On Windows the reading comes from GetSystemTimes. Ctrl+C stops it.',
      },
      {
        type: 'h2',
        text: 'Why it is on the site',
      },
      {
        type: 'p',
        text: 'The day job is a large application I cannot publish. This utility is a public slice of the same tools: qmake or Qt Creator, a .pro file, and a program that does one thing on a schedule.',
      },
      {
        type: 'ul',
        items: [
          'Qt 5 or Qt 6, Core module only',
          'Build with qmake and make, or open the .pro file in Qt Creator',
          'Windows implementation; other platforms need their own reading',
        ],
      },
    ],
  },
  {
    slug: 'mane-site',
    title: 'mane.dev',
    kind: 'Study',
    year: '2026',
    summary:
      'This website. An Angular portfolio with routes for the work, the notes, a printable resume, and a contact form.',
    stack: ['Angular', 'TypeScript', 'CSS'],
    featured: true,
    href: 'https://github.com/dnyaneshwarmane',
    hrefLabel: 'GitHub profile',
    body: [
      {
        type: 'p',
        text: 'I wanted a site with my name on a short domain — mane.dev, with mane.click as the alternate — and I wanted to build it in the stack I am moving into. You are looking at that project.',
      },
      {
        type: 'h2',
        text: 'What it is made of',
      },
      {
        type: 'ul',
        items: [
          'Standalone Angular components and lazy-loaded routes',
          'A content service so the words live in one place',
          'Pages for about, skills, experience, projects, AI, blog, resume, and contact',
          'Metadata, a canonical URL, and a resume that prints to PDF',
          'A production build ready for Vercel, Netlify, or Cloudflare',
        ],
      },
      {
        type: 'p',
        text: 'The point was not a template. The point was to practice routing, layout, and typed content until the site was something I would send to another developer.',
      },
    ],
  },
  {
    slug: 'rust-ffi',
    title: 'Rust FFI studies',
    kind: 'Study',
    year: 'Study',
    summary: 'A public folder of FFI experiments, next door to the C++ I already know.',
    stack: ['Rust', 'FFI', 'C++'],
    featured: false,
    href: 'https://github.com/dnyaneshwarmane/Rust',
    hrefLabel: 'View on GitHub',
    body: [
      {
        type: 'p',
        text: 'Rust showed up because it sits near the native work I already do. The public repo is a study folder, starting with FFI: the boundary where Rust talks to native code.',
      },
      {
        type: 'p',
        text: 'I am not presenting it as a product. It is a trail of learning, the same way the notes on this site are a trail. The useful part is keeping that trail public and small enough to finish.',
      },
    ],
  },
];

export const experiments: Experiment[] = [
  {
    title: 'Building this site with a pair',
    status: 'In progress',
    text: 'I use an AI pair to move through Angular faster. Then I read the files. If I cannot explain a component, it does not stay.',
  },
  {
    title: 'Errors, explained before they are patched',
    status: 'Habit',
    text: 'When TypeScript or the compiler complains, I ask what the message means before I ask for a fix. The patch is mine only if I can say why it works.',
  },
  {
    title: 'Notes, not generated essays',
    status: 'Practice',
    text: 'The blog is short on purpose. Each note is something a Qt developer can use while learning the web, written in my voice.',
  },
  {
    title: 'Rust FFI',
    status: 'Study',
    text: 'A small public experiment beside C++. Calling across the language boundary, then stopping when the example is clear.',
    href: 'https://github.com/dnyaneshwarmane/Rust',
    hrefLabel: 'Open the study',
  },
];

export const principles = [
  'Ask for an explanation before a patch.',
  'Keep the diff small enough to read in one sitting.',
  'Prefer the official docs when the model and the compiler disagree.',
  'Do not publish code I cannot maintain.',
  'Treat private product code as private, even in a prompt.',
];
