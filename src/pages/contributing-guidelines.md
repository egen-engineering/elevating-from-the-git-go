---
draft: true
description: How to contribute and expand this library
---

# Contributing guidelines

Before contributing, it will be useful to understand the purpose of putting together such a playbook.

## Motivation

When meeting new customers, a few points of discussion that frequently arise are:

- What value do we add right from Day 1 of engagement?
- Can we showcase any processes or "value accelerators" that we've put together which can help expedite the process of problem-solving?

In these meetings, it is useful (and often necessary) to refer to examples of the work we've done, which demonstrates our domain knowledge and technical expertise.

- While the case-studies and marketing content on the website are useful, they are still very high level information. We may sometimes need to get into specific details which might be outside their scope, or not necessarily want to publish on the website but use internally.
- Sharing or relying on design mocks from other projects is problematic, because of concerns related to trade secrets / trademarks / copyrights / confidentiality.

### Some examples of value accelerators

- A certain process or methodology that helps our engineers save time and be productive.
- A project plan outlining how we solved a problem in a domain (for example, retail fulfillment).
- A technical architecture design for a core solution or service we've built, detailing out the API model and UI components.
- Wireframes that capture the flow for an app or workings of a specific technical component.

This playbook is aimed to be an organized collection of such value accelerators.

### How is this useful?

1. It tells customers that Egen has already mapped out the details of what constitutes a solution or a service. This can help establish confidence and trust in us as a company.
2. It can be used to convey the "big picture" ideas during client / business meetings and help them visualize how their solution will shape up.
3. Finally, it will serve as a guide for not only a client, but also for any stakeholder (including project managers, designers, and developers). We're never beginning from scratch on Day 1, but referencing to these value accelerators when working out the actual implementation details.

## Adding content

Run the project's *local development server* as described in the README.

- Content added under `docs` folder will appear in the sidebar. The outline and organization of this folder is described under the section *[About this book](/docs/about-this-book)*. It is here where you'll mostly add your content.
- Content added under the `src/pages` folder will not appear in the sidebar. You can use it to create one-off standalone pages like a showcase page, playground page, or a contributing guidelines page like this one.

### Identify the type of content

Before adding new content, first identify whether its a *principle*, or a *pattern*?

Principles would be content that's mostly theoretical, for example - *why we think product-first approach is better than code-first approach*. Ask - is this something that we follow or pursue that makes our lives at work better?

Patterns are about how we apply principles to specific business problems. They are also recurring - meaning when we encounter a similar problem or situation, we'll apply a similar solution. Ask - is this a solution that we've developed before and can be applied again or replicated?

### Start writing and organizing

Next, begin adding the content either under the `principles` folder or the `patterns` folder depending on what content it is (unless its neither, like this content on contributing guidelines).

- The text file in which you write your content must be either a [Markdown](https://www.markdownguide.org/) file (`.md` extension), or a [Markdown + JSX](https://mdxjs.com/) file (`.mdx` extension). `MDX` allows you to create and use components and embed them along with markdown content (very useful if you want to add stuff like interactive charts, or widgets that run some custom JavaScript)
- You can create nested folders to organize your content. For example, all retail patterns would be under `/docs/patterns/retail` folder.

I recommend opening this repository in an IDE like Visual Studio and scanning through the directory and files to get a better sense of how the docs, and other assets like images, wireframes etc are organized and referenced.

### Creating visuals

#### Wireframes

Wireframes work really well when we want to showcase something that we've built before, and visualize how a solution will shape up. Wireframes should be rough, very low-fidelity, and mostly conceptual.

##### Tools

There are quite some good tools out there and you may choose to use whatever you're most familiar with. The one I personally recommend using is [Excalidraw](https://excalidraw.com/). It's [open-source](https://github.com/excalidraw/excalidraw), very easy-to-use with simple controls, and the diagrams have a hand-drawn look which I love. Tools like Sketch, Figma etc are cool, but they're better suited for designing high-fidelity mockups and come with a ton of controls which can get overwhelming and distracting.

:::info Important
If you use Excalidraw's free version, don't forget to download a copy of the canvas file (file extension is `.excalidraw`) and save it in this repository. You'll need it if you ever need to make changes to your wireframes and continue from where you left off.
:::

#### Other pictorial assets

- Canva / Crello for illustrations
- [Draw.io](https://app.diagrams.net/) for flowcharts, E.R / UML diagrams. (Remember to download the `.drawio` file so that you can make edits to your diagrams later).
- [Mermaid](https://mermaid-js.github.io) for creating Flowcharts / sequence diagrams / User Journey / Pie charts etc directly using text inside your markdown files.

## Theme changes

For overriding theme defaults, make your changes to `/src/css/custom.css`.

## Need help?

Please reach out to me (Ashwin Hariharan).
