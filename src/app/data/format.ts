import { Block } from './model';

export function yearsSince(isoDate: string, today = new Date()): number {
  const start = new Date(`${isoDate}T00:00:00`);
  let years = today.getFullYear() - start.getFullYear();
  const beforeAnniversary =
    today.getMonth() < start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() < start.getDate());
  if (beforeAnniversary) {
    years -= 1;
  }
  return years;
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function readingMinutes(blocks: Block[]): number {
  const text = blocks
    .map((block) => {
      if (block.type === 'ul') {
        return block.items.join(' ');
      }
      if (block.type === 'code') {
        return '';
      }
      return block.text;
    })
    .join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
