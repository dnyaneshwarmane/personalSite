import { Note } from './model';

export const notes: Note[] = [
  {
    slug: 'learning-angular',
    title: 'Learning Angular after years of Qt',
    date: '2026-10-02',
    summary:
      'A way to learn the web stack without pretending nine years of desktop software did not happen.',
    body: [
      {
        type: 'p',
        text: 'The awkward part of a career change inside the same career is the beginner material. It assumes you have never shipped software. I have shipped software. I have not shipped Angular. Those are different gaps.',
      },
      {
        type: 'h2',
        text: 'Translate, then build',
      },
      {
        type: 'p',
        text: 'I keep a small map and throw it away once the Angular name feels natural.',
      },
      {
        type: 'ul',
        items: [
          'A widget with a job becomes a component.',
          'A screen you can open directly becomes a route.',
          'An object that several screens share becomes a service.',
          'A form with rules becomes a reactive form, so the errors live next to the fields.',
        ],
      },
      {
        type: 'p',
        text: 'The map is only a bridge. Angular has its own opinions about change detection, templates, and dependency injection. I read those once the page is real enough to break.',
      },
      {
        type: 'h2',
        text: 'One site, every chapter',
      },
      {
        type: 'p',
        text: 'Tutorials that stop at a counter did not stick. A portfolio did, because each page forced a decision: how the header knows the route, where the sentences live, how a missing blog post should look, how a resume should print.',
      },
      {
        type: 'p',
        text: 'That is the assignment I would give another desktop developer. Pick a site you are willing to put your name on. Add routing. Put the content in one module. Deploy it. Then write down the part that surprised you.',
      },
    ],
  },
  {
    slug: 'desktop-habits',
    title: 'Desktop habits that still matter on the web',
    date: '2026-09-24',
    summary:
      'State, ownership, and reading the existing code. The web did not cancel these.',
    body: [
      {
        type: 'p',
        text: 'Moving from Qt to the browser is a change of tools. It is not permission to forget how a program rots. These are the habits I am keeping.',
      },
      {
        type: 'h2',
        text: 'Someone owns the state',
      },
      {
        type: 'p',
        text: 'In a desktop app, a bug often means two widgets both think they own the same fact. The web version is a component and a service both writing the same value. I decide, early, which one is allowed to change it. The other one reads.',
      },
      {
        type: 'h2',
        text: 'Read before you replace',
      },
      {
        type: 'p',
        text: 'A long Qt file looks worse than it is until you see which slots are dead. A generated Angular page has the same trap. I read the method list, name the ones that matter, and only then edit. An AI draft is another file that deserves the same reading.',
      },
      {
        type: 'h2',
        text: 'The failure is on a machine you do not control',
      },
      {
        type: 'p',
        text: 'Desktop work makes this obvious. The user has a version, a display, a habit of clicking twice. The browser has its own version of that: a narrow screen, a keyboard, a refresh in the middle of a form. I check those paths because the day job trained me to.',
      },
      {
        type: 'p',
        text: 'The new skill is the platform. The old skill is refusing to ship a change I cannot explain. I need both.',
      },
    ],
  },
  {
    slug: 'signals-and-outputs',
    title: 'Signals, slots, and Angular outputs',
    date: '2026-09-12',
    summary: 'How a Qt connection maps onto an Angular component that tells its parent something happened.',
    body: [
      {
        type: 'p',
        text: 'Qt taught me to be explicit about who notifies whom. A button does not reach into the window and save a file. It emits. Something that asked to hear about it does the work. Angular components can be shaped the same way.',
      },
      {
        type: 'h2',
        text: 'The Qt shape',
      },
      {
        type: 'code',
        lang: 'C++',
        text: 'connect(saveButton, &QPushButton::clicked, this, [this] {\n    emit saved(draft);\n});',
      },
      {
        type: 'p',
        text: 'The button reports a click. The widget decides that a click means “the draft is ready.” The parent, which connected to saved, stores it. The widget does not know about the database.',
      },
      {
        type: 'h2',
        text: 'The Angular shape',
      },
      {
        type: 'code',
        lang: 'TypeScript',
        text: 'saved = output<Draft>();\n\nsave() {\n  this.saved.emit(this.draft);\n}',
      },
      {
        type: 'code',
        lang: 'HTML',
        text: '<editor (saved)="storeDraft($event)" />',
      },
      {
        type: 'p',
        text: 'output() is the signal I declare. The template binding (saved) is the connection. storeDraft lives in the parent, which is the only place that should know what “saved” means for the rest of the app.',
      },
      {
        type: 'h2',
        text: 'What I watch for',
      },
      {
        type: 'ul',
        items: [
          'A child that imports a service only to announce a click. An output is usually enough.',
          'A parent that passes five callbacks when one event would do.',
          'A name like clicked, when the parent actually cares about saved.',
        ],
      },
      {
        type: 'p',
        text: 'The syntax is the small part. The design is the part Qt already drilled in: emit facts, let the owner act.',
      },
    ],
  },
];
