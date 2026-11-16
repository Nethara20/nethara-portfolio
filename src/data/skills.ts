/**
 * MY SKILLS
 * Only skills supported by a chapter in Nethara's portfolio. No scores or
 * percentages: each skill points to the chapter and evidence behind it.
 */
export type Skill = {
  name: string
  text: string
  chapters: string[]
  evidence: string
}

export const skills: Skill[] = [
  {
    name: 'Communication',
    text: 'Answering clearly and confidently, and listening properly before I respond.',
    chapters: ['03', '05'],
    evidence: 'The 6 C’s, active listening and ready phrases for describing my strengths and giving an opinion.',
  },
  {
    name: 'Teamwork',
    text: 'Working with others on a shared result, even though I usually prefer working alone.',
    chapters: ['02', '06'],
    evidence: 'Our newspaper tote bag, where I made the flower, and our group’s emotional intelligence scenario. Later, Praana 2026.',
  },
  {
    name: 'Interview skills',
    text: 'Structuring answers instead of rambling, and knowing what an interviewer is actually scoring.',
    chapters: ['03', '08'],
    evidence: 'The STAR method, interview attire, and the 1 to 5 rating sheet that marks fillers like “um”.',
  },
  {
    name: 'CV writing',
    text: 'Tailoring a CV to each job and presenting it cleanly enough to get past tracking systems.',
    chapters: ['04'],
    evidence: 'A one-to-one review of my CV: change the template and add a professional photo.',
  },
  {
    name: 'Self-awareness',
    text: 'Understanding how I see myself, and how others might see me differently.',
    chapters: ['01', '08'],
    evidence: 'The Johari Window’s blind area, my Professional Identity Tree, and the cat and lion slide.',
  },
  {
    name: 'Emotional intelligence',
    text: 'Recognising emotions, regulating my reactions, and being empathetic without becoming a people pleaser.',
    chapters: ['06'],
    evidence: 'Goleman’s five competencies, cognitive reappraisal and the breathing exercise.',
  },
  {
    name: 'Professional etiquette',
    text: 'Knowing how to behave at a formal or business meal, beyond “don’t talk with your mouth full”.',
    chapters: ['07'],
    evidence: 'Keeping my phone off the table and using my fork and knife properly at dinner with my dad’s friend.',
  },
  {
    name: 'Meeting skills',
    text: 'Planning a meeting properly, with a purpose, an agenda and clear roles.',
    chapters: ['05'],
    evidence: 'The meeting planning checklist and the meeting terms task: circulate the agenda, avoid digressions, finish on time.',
  },
]
