import type { Photo } from './types'

/**
 * PRAANA 2026: BLOOD DONATION PROGRAMME
 * Team-level facts only. Nethara is shown as one of the seven organising
 * team members. Individual roles appear only where they are confirmed.
 * Photographs: public/assets/praana-2026/web/ (originals one folder up).
 */

export const praana = {
  name: 'Praana 2026',
  type: 'Blood Donation Programme',
  strap: 'A teamwork and community initiative',
  date: '21 October 2026',
  collaborator: 'Leo Club of SCU',
  donors: '40+',
  budget: 'LKR 40,000',
  purpose:
    'Praana 2026 was organised in collaboration with the Leo Club of SCU to support community healthcare by encouraging voluntary blood donations.',
  audience: [
    'Office staff from companies surrounding the university',
    'University lecturers',
    'Students',
    'University management staff',
  ],
  result: 'The campaign successfully received over 40 blood donors.',
}

export type TeamMember = { name: string; alias?: string; role?: string; self?: boolean }

export const team: TeamMember[] = [
  { name: 'R.A.C.K. Perera', alias: 'Chamika Kaushalya', role: 'Group leader & secretary' },
  { name: 'W.H.B. Nethara', role: 'Organising team member', self: true },
  { name: 'M.A.M. Yaseer' },
  { name: 'A.B.A. Rahman' },
  { name: 'G.R.M.D. Gamlath', role: 'Treasurer' },
  { name: 'M.K.G.M.D. Senadira' },
  { name: 'W.C.R. Bamunusinghe' },
]

export const planning: { title: string; text: string }[] = [
  {
    title: 'Discussion with Mr. Anurudda',
    text: 'Initial discussions took place with Mr. Anurudda, who explained how the programme would be organised.',
  },
  {
    title: 'Coordination with the Leo Club',
    text: 'The group coordinated with the Leo Club of SCU, the programme’s official collaborator.',
  },
  {
    title: 'Blood bank date coordination',
    text: 'The Leo Club arranged the event date after coordinating with the blood bank: 21 October 2026.',
  },
  {
    title: 'Team responsibilities',
    text: 'Our student group was asked to assist with refreshments and venue arrangements.',
  },
  {
    title: 'The LKR 40,000 budget',
    text: 'The group prepared a planned budget of LKR 40,000 for its responsibilities.',
  },
  {
    title: 'Refreshments and venue',
    text: 'With the plan in place, the team prepared the refreshments and the venue ahead of the event.',
  },
]

export const budgetNote =
  'This was the planned project budget prepared before the event, not a record of the final amount spent.'

export const promotion = {
  text: [
    'Promotion was carried out by Chamika Kaushalya and M.A.M. Yaseer from the team, together with Chamara from the Leo Club.',
    'They visited companies surrounding the university, distributed promotional flyers and asked the companies to inform their employees about the blood donation programme.',
  ],
  people: [
    { name: 'Chamika Kaushalya', from: 'Organising team' },
    { name: 'M.A.M. Yaseer', from: 'Organising team' },
    { name: 'Chamara', from: 'Leo Club of SCU' },
  ],
}

export const venue = {
  text: [
    'On the day before the event, the student group prepared the third-floor hall, collecting chairs and tables from the common area and the lecture halls.',
    'Mr. Anurudda guided the team, and Chamara from the Leo Club also helped with the preparations.',
  ],
}

export const eventDay = {
  text: [
    'On 21 October, the team completed the necessary arrangements before the medical staff arrived. Once they did, the blood donation campaign proceeded smoothly.',
    'The team also prepared the refreshments for donors. Each donor was to receive one Milo drink and one fish bun, arranged into individual bags at the venue.',
  ],
  story: [
    {
      label: 'The plan',
      title: 'One Milo, one fish bun',
      text: 'Refreshments were packed into individual bags at the venue, ready to hand to each donor.',
    },
    {
      label: 'The surprise',
      title: 'A vegetarian donor',
      text: 'During the event, a donor mentioned that he was vegetarian. The team had not prepared a vegetarian option.',
    },
    {
      label: 'The response',
      title: 'Adapting on the day',
      text: 'The team responded by arranging an appropriate vegetarian alternative during the event.',
    },
    {
      label: 'The lesson',
      title: 'Plan for everyone',
      text: 'Different dietary requirements need to be considered at the planning stage, not discovered on the day.',
    },
  ],
}

const web = (file: string) => `assets/praana-2026/web/${file}`
const photo = (
  file: string,
  w: number,
  h: number,
  caption: string,
  alt: string,
  group: boolean,
  focus?: string,
): Photo => ({ src: web(file), w, h, caption, alt, focus, tags: group ? ['praana', 'group'] : ['praana'] })

export const photos = {
  flyers: photo(
    'praana-leaflets.jpg', 1080, 608,
    'Promotional flyers distributed to companies surrounding the university.',
    'A hand holds a fan of printed blood donation flyers showing a red heart held in two hands.',
    true,
  ),
  hall: photo(
    'praana-status-update.jpg', 738, 1145,
    'Third-floor hall prepared by the organising team on the day before the blood donation programme.',
    'The hall set out with rows of chairs and refreshment bags. A hand in the foreground holds the printed event poster.',
    true,
    '50% 20%',
  ),
  poster: photo(
    'praana-event-poster.jpg', 1131, 1600,
    'The Praana 2026 poster: Donate Blood, Save Lives. 21 October, 9.00 AM onwards.',
    'Poster reading Donate Blood Save Lives, 21 Oct, 9.00 AM onwards, with the SCU and Leo Club of SCU marks.',
    true,
  ),
  selfie: photo(
    'praana-group-selfie.jpg', 1800, 1013,
    'The organising team and Leo Club members in the third-floor hall.',
    'A group selfie of people smiling in the hall, with rows of chairs behind them.',
    true,
    '50% 35%',
  ),
  packing: photo(
    'praana-food-packs.jpg', 1280, 720,
    'Refreshments being packed into individual bags at the venue.',
    'Two people wearing gloves sort bags of buns at a table, with paper bags and cartons of drinks beside them.',
    true,
  ),
  area: photo(
    'praana-donation-area.jpg', 810, 457,
    'The donation area during the programme, with the medical staff attending to donors.',
    'A hall with several donation beds. Donors lie on the beds while a nurse in uniform works beside them.',
    false,
  ),
  yaseer: photo(
    'praana-donor-on-bed.jpg', 1012, 1800,
    'M.A.M. Yaseer donating blood on the medical bed.',
    'A donor lies on a donation bed during the programme.',
    false,
    '50% 30%',
  ),
  checkup: photo(
    'praana-blood-pressure-check.jpg', 1080, 608,
    'Mr. Adithya during the doctor’s medical checkup.',
    'A member of the medical staff checks a seated man’s blood pressure at a table.',
    false,
  ),
  nurse: photo(
    'praana-nurse-and-donor.jpg', 1080, 608,
    'A nurse preparing equipment beside a donor.',
    'A nurse in uniform and gloves prepares equipment while a donor lies on a bed next to her.',
    false,
  ),
  thanks: photo(
    'praana-on-the-floor.jpg', 1012, 1800,
    'Chamika thanking a donor with a small gift and an appreciation certificate from the Leo Club, together with the organising team.',
    'Two people stand facing each other in the hall. One hands the other a small red gift box and a certificate.',
    false,
    '50% 62%',
  ),
}

/** Event photographs shown in the project's evidence grid. */
export const eventPhotos: Photo[] = [
  photos.area,
  photos.yaseer,
  photos.checkup,
  photos.nurse,
  photos.thanks,
]

/** Every Praana photo: the project page lightbox and the gallery. The selfie leads the project page. */
export const allPraanaPhotos: Photo[] = [
  photos.selfie,
  photos.flyers,
  photos.poster,
  photos.hall,
  photos.packing,
  ...eventPhotos,
]

/** Nethara's own reflection on being part of the organising team. */
export const reflection: { title: string; text: string[] }[] = [
  {
    title: 'Teamwork outside the classroom',
    text: [
      'Being one of the seven members of the organising team for Praana 2026 showed me what teamwork looks like outside a classroom. In the newspaper activity in Chapter 02, I found out that group work can actually be fun. Praana was different, because this time real people were depending on what we did, not just a grade.',
    ],
  },
  {
    title: 'Giving something back',
    text: [
      'A blood donation programme is a very direct way of helping people you will never meet. Seeing office staff, lecturers, students and management staff come in, and the campaign reach more than 40 donors, made the idea of community contribution feel real to me.',
    ],
  },
  {
    title: 'Planning comes first',
    text: [
      'Much of the work happened before the day itself. The Leo Club fixed the date with the blood bank, our group took on the refreshments and the venue, and a budget of LKR 40,000 was planned around that. Because the hall was prepared the day before, the team could finish the arrangements before the medical staff arrived and the campaign ran smoothly. It reminded me of the meeting planning checklist from Chapter 05: purpose, people, place, time and what needs to be ready.',
    ],
  },
  {
    title: 'Communication and coordination',
    text: [
      'A programme like this involves a lot of people: our team, Mr. Anurudda, the Leo Club, the blood bank, the medical staff and the companies around the university. It only works when everyone knows their part and information gets passed on clearly. Watching that happen helped me understand why the module spent so much time on clear, courteous communication.',
    ],
  },
  {
    title: 'Caring for donors',
    text: [
      'Refreshments might look like a small detail, but donors need something to eat and drink after giving blood. A Milo and a fish bun in an individual bag is a simple thing, and it is part of looking after the people who came to help.',
    ],
  },
  {
    title: 'When the plan didn’t cover everyone',
    text: [
      'When a donor mentioned he was vegetarian, it showed a gap in the plan, because a vegetarian option had not been prepared. The team arranged an alternative during the event instead of letting it become a problem. For me, the lesson is that dietary requirements should be asked about at the planning stage, so that nobody has to be an afterthought.',
    ],
  },
  {
    title: 'Supporting the people who help',
    text: [
      'The programme depended on volunteers, the medical staff and the Leo Club as much as on the donors. Thanking donors with a small gift and an appreciation certificate from the Leo Club was a good reminder that people give their time more willingly when they feel appreciated.',
    ],
  },
  {
    title: 'What it means for my professional skills',
    text: [
      'Praana 2026 brought together things the module talked about separately: teamwork, communication, planning, adaptability and staying calm when something unexpected happens. I usually prefer working alone, but this project showed me how much more a group can do together, and that is something I want to carry into future teams.',
    ],
  },
]
