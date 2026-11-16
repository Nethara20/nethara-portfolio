import type { Chapter, Photo } from './types'

/**
 * THE LEARNING JOURNEY
 * Source: Nethara's own Professional Skills portfolio (reference/PS.pdf).
 * Her wording is kept wherever possible, with light grammar fixes only.
 * Week numbers follow the chapter order in the PDF. Week 09 was not attended
 * and has no chapter.
 */

const img = (
  file: string,
  w: number,
  h: number,
  tags: Photo['tags'],
  caption: string,
  alt: string,
  focus?: string,
): Photo => ({ src: `assets/nethara/${file}`, w, h, tags, caption, alt, focus })

export const chapters: Chapter[] = [
  /* ------------------------------------------------------------------ */
  {
    n: 1,
    num: '01',
    title: 'Introduction to Professional Skills',
    summary:
      'Technical, soft and transferable skills, the VBAC framework and the Johari Window. I missed this lecture because of a medical emergency and studied the slides afterwards.',
    status: 'Completed',
    statusNote: 'Studied from the slides',
    skills: ['Self-awareness'],
    overview: [
      'I couldn’t attend this lecture because of a medical emergency, so everything here comes from going through the slides on my own afterwards, not from sitting in the class.',
      'From what I could piece together, this first lesson introduced the whole module and explained how we would be graded through the portfolio and the viva. It then went into the difference between technical skills, soft skills and transferable skills, and highlighted the employability skills that employers look for most.',
      'The slides also covered a framework called VBAC and the Johari Window, both of which are about how character and self-knowledge are built up over time.',
    ],
    keyLearnings: [
      {
        title: 'Three kinds of skills',
        items: [
          'Technical skills are specific to a particular job.',
          'Soft skills are more about how you deal with people.',
          'Transferable skills, like problem-solving, carry over into pretty much any job.',
        ],
      },
      {
        title: 'Employability skills',
        text: 'The main skills employers look for: communication, teamwork, time management, adaptability, critical thinking and leadership.',
      },
      {
        title: 'VBAC: Values, Beliefs, Attitudes, Character',
        text: 'Your values and beliefs shape your attitude, and over time your attitude becomes your character.',
      },
      {
        title: 'The Johari Window',
        items: [
          'Open: things both you and others know about you.',
          'Blind: things others notice that you don’t see in yourself.',
          'Hidden: things you know but haven’t shared.',
          'Unknown: things nobody knows yet.',
        ],
      },
    ],
    activities: [
      {
        title: 'Professional Identity Tree',
        text: 'The class made a “Professional Identity Tree” poster in groups. The roots stand for values, the trunk for beliefs, the branches for attitudes and the fruits for character. Since I couldn’t do the group version in class, I made one on my own and titled it “The professional I want to become”.',
        items: [
          'Roots (values): integrity, responsibility, compassion, perseverance.',
          'Trunk (beliefs): “I can improve with effort”, “Giving up doesn’t solve anything”, “Even if today is bad, tomorrow would be better”.',
          'Branches (attitudes): I help others whenever I can, I stay calm under pressure most of the time, I take responsibility for my actions, I adapt well to change.',
          'Fruits (character): trustworthy, reliable, respectful, kind, helpful, independent, hardworking, patient.',
        ],
      },
      {
        title: 'Worksheet 1',
        text: 'I went through Worksheet 1 on my own afterwards, sorting the listed skills into technical, soft and transferable.',
      },
    ],
    learned: [
      'Since I wasn’t there for the actual lecture, most of what I picked up came from reading the slides myself, which isn’t quite the same as being talked through it. Still, the thing that clicked for me was the difference between soft skills and transferable skills. I used to think they were more or less the same, but now I understand that soft skills are about people and communication, while transferable skills are things like adaptability that move with you between completely different jobs.',
      'The VBAC framework took a bit more effort to follow just from slides, but I think I get the basic idea: character isn’t random, it comes from values and beliefs showing up consistently over time.',
      'The Johari Window was the easiest part to follow, especially the blind area. It made me realise that a blind spot doesn’t have to be a weakness. It can be a strength other people already see in me that I just haven’t noticed myself.',
    ],
    application: {
      verdict: 'Partly applied',
      text: [
        'Because I missed this session, I haven’t had the chance to try the Johari Window activity with anyone yet, so I can’t say I’ve properly applied it in a group setting.',
        'What I did do was go through Worksheet 1 on my own and sort the listed skills into technical, soft and transferable, then try matching a few of them to a job role I’m interested in, just to see how it would work in practice.',
      ],
    },
    evidence: [
      img(
        'ch01-professional-identity-tree.jpg', 1600, 1201, ['activities'],
        'The Professional Identity Tree I made on my own, since I couldn’t do the group version in class.',
        'A hand-drawn tree titled The Professional Identity Tree. Values are written at the roots, beliefs along the trunk, attitudes beside the branches and character traits inside heart-shaped fruits.',
      ),
    ],
    cover: 0,
  },

  /* ------------------------------------------------------------------ */
  {
    n: 2,
    num: '02',
    title: 'Introduction to Portfolio Writing',
    summary:
      'What a portfolio is, what goes into one, and a thirty-minute newspaper challenge where our group made a tote bag. I made the little flower inside it.',
    status: 'Completed',
    skills: ['Teamwork'],
    overview: [
      'This lecture was mainly about portfolios and e-portfolios: what they are, why we’re building one for this module, and what the lecturer actually wants to see inside it.',
      'She went through what should be included, which is a summary of the lecture, what we personally learned, and evidence or testimonials to prove we actually did the things we’re writing about. LinkedIn came up as well, as an example of a portfolio most of us already have without really thinking of it that way.',
      'After going through all of that, she gave us a group activity. We had thirty minutes to make something out of newspaper, with each person in the group responsible for a different part.',
    ],
    keyLearnings: [
      {
        title: 'Portfolios and e-portfolios',
        text: 'What a portfolio is, why we are building one for this module, and how an e-portfolio works as an online version of the same record.',
      },
      {
        title: 'What each entry needs',
        items: [
          'A summary of the lecture.',
          'What I personally learned.',
          'Evidence or testimonials that prove I actually did what I’m writing about.',
        ],
      },
      {
        title: 'LinkedIn as a portfolio',
        text: 'A LinkedIn profile is already a kind of portfolio that most of us have, even if we don’t think of it that way.',
      },
    ],
    activities: [
      {
        title: 'The newspaper challenge',
        text: 'In thirty minutes, each group had to make something out of newspaper, with every member responsible for a different part. As a group, we made a tote bag entirely out of newspaper, and I was the one who made a little flower to go inside it.',
      },
    ],
    learned: [
      'Honestly, the biggest thing I took from this session wasn’t really about portfolios, it was about the group work itself. I usually prefer working alone because I get things done faster and don’t have to rely on anyone else, but this activity actually turned out to be really fun.',
      'Everyone had their own part to contribute, people were laughing the whole time, and it genuinely felt like being back in preschool, making things with your hands without worrying about doing it perfectly. It made me realise group work isn’t always something to dread, especially when everyone’s actually invested in it.',
    ],
    application: {
      verdict: 'Applied in class',
      text: [
        'The tote bag was a hands-on example of what she’d just taught us about portfolios and evidence. This activity is literally the proof I’m using for this chapter.',
      ],
    },
    evidence: [
      img(
        'ch02-newspaper-tote-bag.jpg', 571, 762, ['activities'],
        'The newspaper tote bag our group made during the activity.',
        'A tote bag made from folded newspaper pages, with a newspaper handle and a folded paper flower, standing on a classroom desk.',
      ),
      img(
        'ch02-group-with-tote-bag.jpg', 1000, 750, ['activities'],
        'The group I worked with, after the activity, with our finished tote bag.',
        'A group of students standing in a classroom in front of a projector screen. One of them holds the newspaper tote bag.',
      ),
    ],
    cover: 0,
  },

  /* ------------------------------------------------------------------ */
  {
    n: 3,
    num: '03',
    title: 'Interview Skills',
    summary:
      'The documents to prepare for a job application, the 6 C’s, active listening, interview attire and the STAR method for answering “tell me about a time when…” questions.',
    status: 'Completed',
    statusNote: 'Mock interview still to come',
    skills: ['Interview skills', 'Communication'],
    overview: [
      'This lecture was about interviews. The whole idea was to help us identify the basic parts of an interview, then practise doing well in one, and eventually do mock interviews to test it out for real.',
      'First, she started with the documents we need to have ready for a job application. For work experience specifically, she mentioned that for IT or tech roles it’s better to actually show your work rather than just describe it. For example, a GitHub profile with your actual projects on it works as real proof, instead of just talking about your experience. She also gave us actual phrases to use when talking about our strengths, work experience and future goals, and for giving an opinion without sounding awkward.',
      'Next she got into communication with the “6 C’s”, which is basically the vibe you’re supposed to give off when answering questions. She also went over active listening, and interview attire: what to wear and what to avoid.',
      'I think the main thing she wanted us to take from this was the STAR method, and she walked us through an example answer using it. She mentioned that the actual mock interviews will happen after the mid exams.',
    ],
    keyLearnings: [
      {
        title: 'Documents for a job application',
        items: [
          'Highest education certificate (degree certificate and transcript).',
          'Proof of work experience.',
          'Certificates or professional qualifications, and extracurriculars.',
        ],
      },
      {
        title: 'Show your work',
        text: 'For IT roles, a GitHub profile with real projects is stronger proof than describing your experience.',
      },
      {
        title: 'The 6 C’s',
        text: 'Clear, concise, correct, complete, concrete, courteous and confident.',
      },
      {
        title: 'Active listening and attire',
        text: 'Listening properly to the question, and the do’s and don’ts of what to wear to an interview.',
      },
      {
        title: 'The STAR method',
        items: ['Situation', 'Target', 'Actions', 'Result'],
      },
    ],
    activities: [
      {
        title: 'Useful interview phrases',
        text: 'We went through ready-made phrases for describing strengths, talking about work experience and future goals, and giving an opinion without sounding awkward.',
      },
      {
        title: 'A STAR answer, step by step',
        text: 'The lecturer walked us through an example answer to a “tell me about a time when…” question using the STAR method.',
      },
    ],
    learned: [
      'The STAR method is the part that caught my attention, because I usually just ramble when I get asked something like “tell me about a time you faced a challenge” instead of structuring my answer. Seeing it broken into Situation, Target, Actions and Result made me realise why some answers sound way more confident than mine usually do.',
      'I also didn’t expect the attire part to matter as much as it did. I always thought looking neat was enough, but seeing the actual do’s and don’ts side by side made me think there’s more to it than I assumed.',
    ],
    application: {
      verdict: 'Mock interview: not yet',
      text: [
        'The mock interviews are scheduled for after the mid exams, so I haven’t done mine yet. That’s where I’ll get to put the STAR method into practice for real.',
      ],
    },
    evidence: [
      img(
        'ch03-whiteboard-application-documents.jpg', 556, 799, ['lectures'],
        'The whiteboard listing the documents to prepare for a job application.',
        'A whiteboard listing highest education certificate, degree certificate, transcript, work experience, certificates and professional qualifications, and extracurriculars.',
      ),
      img(
        'ch03-slide-describing-strengths.jpg', 402, 677, ['lectures'],
        'Lecture slide with phrases for describing your strengths.',
        'A projected slide titled Describing your strengths, with example phrases such as I’m good at meeting deadlines.',
      ),
      img(
        'ch03-slide-interview-attire.jpg', 586, 838, ['lectures'],
        'Lecture slide showing the do’s and don’ts of interview attire.',
        'A projected slide titled Attire, showing well-dressed figures under Do and poorly dressed figures under Don’t.',
      ),
    ],
    cover: 2,
  },

  /* ------------------------------------------------------------------ */
  {
    n: 4,
    num: '04',
    title: 'CV Writing & Writing Cover Letters',
    summary:
      'What goes into a CV, tailoring it to each job, researching the company, and formatting. The lecturer reviewed my CV one to one.',
    status: 'Completed',
    skills: ['CV writing'],
    overview: [
      'This lecture was about writing a CV. Mrs. Ravihari went through what we actually need to have in a CV.',
      'She also taught us an important point that I’ve been overlooking but shouldn’t have: we shouldn’t keep just one generic CV for every job we apply to. We’re supposed to tailor it depending on the job, and actually research the company and job description first so we can match the keywords they’re looking for, since that’s apparently what gets your CV past the automated tracking systems companies use.',
      'Then she talked about formatting. After going through all of the slides, she asked us to come one by one with our CV so she could point out how it could be improved.',
    ],
    keyLearnings: [
      {
        title: 'What goes into a CV',
        items: [
          'Personal information like name and contact details, plus a LinkedIn or portfolio link if available.',
          'A professional summary.',
          'Work experience with job title, company, dates and what I did there.',
          'Education, skills, and any achievements or awards.',
        ],
      },
      {
        title: 'Tailor it to the job',
        text: 'Research the company and the job description, then use their keywords. This helps a CV pass automated applicant tracking systems (ATS).',
      },
      {
        title: 'Formatting',
        items: [
          'Keep it clean, with consistent fonts and proper headings.',
          'Don’t cram everything together.',
          'Avoid spelling mistakes and irrelevant information.',
        ],
      },
    ],
    activities: [
      {
        title: 'One-to-one CV review',
        text: 'Each of us brought our CV to the lecturer, one by one, and she pointed out how it could be improved. For mine, she told me to change my template and add a professional photo of myself.',
      },
    ],
    learned: [
      'To be honest, there wasn’t much new information for me in this one, since I already knew the basic structure of a CV.',
      'Going through my actual CV with her was the part that helped the most. She told me to change my template and add a professional photo of myself, which apparently makes a big difference. Seeing her go through mine specifically made the whole “tailor it” thing actually make sense, instead of just being something she said in general.',
    ],
    application: {
      verdict: 'In progress',
      text: [
        'For now, I’m updating my CV based on what she pointed out, changing the template and adding a professional photo like she suggested, before the mock interview we will be having after the mid-term examinations.',
      ],
    },
    evidence: [
      img(
        'ch04-cv-review.jpg', 1056, 1409, ['activities', 'worksheets'],
        'My CV with the lecturer’s handwritten suggestions from the review.',
        'A printed CV for Nethara Bashudi with handwritten pen notes from the lecturer, including a box marked Photo near the top.',
      ),
      img(
        'ch04-slide-importance-of-research.jpg', 563, 727, ['lectures'],
        'Lecture slide on the importance of researching the company and job description.',
        'A projected slide titled The Importance of Research, about using keywords from the job description to pass applicant tracking systems.',
      ),
    ],
    cover: 0,
  },

  /* ------------------------------------------------------------------ */
  {
    n: 5,
    num: '05',
    title: 'Facilitating and Conducting Meetings',
    summary:
      'Meeting terminology, types of meetings and how to plan one properly. A traffic jam meant I arrived when the lecture was almost over.',
    status: 'Completed',
    statusNote: 'Arrived late',
    skills: ['Meeting skills', 'Communication'],
    overview: [
      'This lecture was about speaking skills and meetings. It was actually a pretty short lecture compared to other days, and by the time I got there because of a traffic jam, it was already almost over. I even missed the attendance marking, so honestly I barely caught anything live. Everything I know about what she covered is from going through the slides on my own afterwards, though there wasn’t much to go through.',
      'From the slides, it looks like it started with meeting terminology: an article with underlined words we were supposed to explain in our own words, and the different types of meetings, where you’d hear certain phrases depending on the type. After that, there was a whole section on planning a meeting.',
    ],
    keyLearnings: [
      {
        title: 'Meeting terminology',
        text: 'The words and phrases used in meetings, and how they change with the type of meeting.',
      },
      {
        title: 'Planning a meeting',
        items: [
          'Figuring out the purpose.',
          'Who should attend, the date, the location and the equipment.',
          'How long it should take.',
          'Whether it is formal or informal.',
          'What papers to prepare beforehand.',
        ],
      },
      {
        title: 'Facilitating a meeting',
        text: 'Objectives, the roles people take on, building an agenda, keeping people engaged, common challenges and evaluating the meeting afterwards.',
      },
    ],
    activities: [
      {
        title: 'Meeting terms matching task',
        text: 'Matching verbs to the right meeting phrase. My answers:',
        items: [
          'Take the minutes',
          'Appoint a minute-taker',
          'Circulate the agenda',
          'Allocate time',
          'Move on to the next point',
          'Avoid digressions',
          'Finish on time',
        ],
      },
      {
        title: 'Rehabilitation centre role play',
        text: 'Imagining being the newly elected president of a rehabilitation centre and running a meeting about upgrading it, including electing a secretary, a treasurer, an editor and other members.',
      },
      {
        title: 'Group worksheet',
        text: 'A worksheet on facilitating and conducting meetings, covering objectives, roles, agendas, engagement, challenges and evaluation.',
      },
    ],
    learned: [
      'Even though I almost missed the lecture, what really stood out to me was the meeting planning checklist. That was the most useful part for me. I’ve genuinely never sat in a meeting outside of academic things like group project discussions, so I never thought about how much actually goes into planning one properly.',
    ],
    application: {
      verdict: 'Planned',
      text: [
        'I haven’t really been in a “real” meeting outside of academic ones. But thinking back to group project meetings for university, I realise I’ve never actually gone in with a proper agenda or thought about roles beforehand. I just kind of showed up and talked.',
        'So next time I have a group meeting for a project, I want to try applying the planning checklist instead of winging it.',
      ],
    },
    evidence: [
      img(
        'ch05-meetings-lecture.jpg', 695, 1208, ['lectures'],
        'The meetings lecture, photographed from my seat as proof of attendance.',
        'A lecture hall seen from the back rows. Students sit facing the lecturer, who stands at the front beside a whiteboard.',
        '50% 45%',
      ),
      img(
        'ch05-meeting-terms-task.jpg', 870, 652, ['worksheets', 'activities'],
        'My attempt at the meeting terms matching task from the lecture.',
        'Handwritten notes on lined paper matching numbers 1 to 7 with letters a to g, such as take the minutes and circulate the agenda.',
      ),
    ],
    cover: 1,
  },

  /* ------------------------------------------------------------------ */
  {
    n: 6,
    num: '06',
    title: 'Emotional Intelligence',
    summary:
      'A visiting lecturer, Mrs. Hubika Joshi, on emotions, Goleman’s five competencies, emotional leakage and self-regulation, with a breathing exercise and a group scenario.',
    status: 'Completed',
    facilitator: 'Mrs. Hubika Joshi',
    skills: ['Emotional intelligence', 'Self-awareness'],
    overview: [
      'Firstly, I was surprised to see that it wasn’t our lecturer in charge but a visiting lecturer, Mrs. Hubika Joshi. This lecture was on emotional intelligence, and it started off with an explanation of what an emotion actually is.',
      'Mrs. Joshi went through primary and secondary emotions, for example anger leading to resentment and hostility, all the way up to hatred. On the slide there was a quote by Aristotle about how anyone can get angry, but being angry with the right person, at the right time, for the right reason and in the right way is the hard part. It made some sense to me.',
      'Then she got into what emotional intelligence actually is, using the definition by Salovey and Mayer. Most importantly, we went through Goleman’s five emotional competencies, with each one explained properly.',
    ],
    keyLearnings: [
      {
        title: 'What an emotion is',
        items: [
          'A feeling.',
          'The thoughts that come with that feeling.',
          'A psychological and biological state.',
          'The behaviours that get acted out because of it.',
        ],
      },
      {
        title: 'Emotional intelligence',
        text: '“The ability to monitor one’s own and other people’s emotions, to discriminate between different emotions and label them appropriately, and to use emotional information to guide thinking and behaviour” (Salovey and Mayer, 1990).',
      },
      {
        title: 'Goleman’s five competencies',
        items: ['Self-awareness', 'Self-regulation', 'Motivation', 'Empathy', 'Social skills'],
      },
      {
        title: 'Emotional leakage',
        text: 'How emotions show up through your voice, breathing, sweating, muscle tone, energy and facial expressions, even when you’re not saying anything.',
      },
      {
        title: 'Self-regulation',
        text: 'Mindfulness, acceptance, problem-solving and cognitive reappraisal. If your partner shows up late, it doesn’t necessarily mean they don’t respect you. Maybe they simply don’t respect time, and it has nothing to do with you, so there’s no need to take it personally.',
      },
      {
        title: 'Empathy is not people-pleasing',
        text: '“It’s good to have empathy, but you shouldn’t let it turn you into a people pleaser.”',
      },
    ],
    activities: [
      {
        title: 'Breathing exercise',
        text: 'Part of the self-regulation section. To be frank, even though I’ve been breathing my whole life, this exercise felt quite different, in a good way.',
      },
      {
        title: 'Group scenario',
        text: 'Each group came up with its own scenario involving a problem and solved it using one of Goleman’s competencies. Ours was about a drama teacher who had promised to take us to a 5-star hotel, but the trip was cancelled because of COVID. She then tried to motivate the team by buying us chocolate instead.',
      },
      {
        title: 'Three and three',
        text: 'We wrote down three emotions we like feeling and three we don’t, with the reasons for each, and handed in feedback for Mrs. Joshi before we left.',
      },
    ],
    learned: [
      'The “don’t be a people pleaser” comment actually hit different for me, since I think I lean toward agreeing with people just to avoid conflict. Hearing that empathy and people-pleasing aren’t the same thing was really useful.',
      'I also liked the cognitive reappraisal idea, like reframing someone being late as “they don’t respect time” instead of “they don’t respect me”, since I tend to take things personally most of the time. Frankly, I never really thought about emotional reactions that way before.',
    ],
    application: {
      verdict: 'Not yet, but planned',
      text: [
        'Not yet, though I’ll be applying it in daily life by being straightforward about what I want while still respecting others, without being a people pleaser.',
        'I learned that being empathetic doesn’t mean I always have to please other people. So in group projects, when it’s time to decide, I will give my opinions too, instead of just listening to what others say. It’s a group project, after all. That’s the main reason I highlighted the empathy part in what I learned.',
      ],
    },
    evidence: [
      img(
        'ch06-slide-ei-title.jpg', 503, 808, ['lectures'],
        'The opening slide of the emotional intelligence lecture.',
        'A projected title slide reading Emotional Intelligence, with an illustration of a head containing a heart.',
      ),
      img(
        'ch06-slide-what-is-ei.jpg', 626, 894, ['lectures'],
        'Slide with Salovey and Mayer’s definition of emotional intelligence.',
        'A projected slide titled What is Emotional Intelligence, with a quoted definition and an image of a heart and a brain balanced on a scale.',
      ),
      img(
        'ch06-slide-emotions.jpg', 515, 808, ['lectures'],
        'A slide of emoji faces used while discussing different emotions.',
        'A projected slide showing a grid of emoji faces with different expressions.',
      ),
    ],
    cover: 0,
  },

  /* ------------------------------------------------------------------ */
  {
    n: 7,
    num: '07',
    title: 'Dining Etiquettes',
    summary:
      'Table manners at formal and business meals, a True or False quiz and a Section C worksheet. I put it into practice at dinner with my dad, his friend and his friend’s son.',
    status: 'Completed',
    skills: ['Professional etiquette'],
    overview: [
      'This lecture was about dining etiquette, like how you’re supposed to act at a formal or a business meal.',
      'She did a whole True or False quiz on table manners. Honestly, I have to mention that in my opinion using a fork and knife for French fries sounds so extra. Somehow, she also went through whether we use both hands to squeeze lemon into our tea or not.',
      'There was also a printed worksheet, Section C, specifically about dining etiquette in business settings.',
    ],
    keyLearnings: [
      {
        title: 'Table manners quiz',
        items: [
          'If you only have one knife in your place setting, do you keep it for your entrée after using it for salad?',
          'Is a place plate just there to protect the tablecloth from food droppings?',
          'Are you supposed to use a fork and knife for French fries at a formal event?',
          'Should both hands be used to squeeze lemon into your tea?',
        ],
      },
      {
        title: 'Dining in business settings',
        items: [
          'What to do if you don’t know which fork to use at a formal business dinner.',
          'What to do if your phone gets a notification while it’s on the table during a business meal.',
        ],
      },
    ],
    activities: [
      {
        title: 'True or False: rules for the table',
        text: 'A class quiz testing what we thought we knew about table manners.',
      },
      {
        title: 'Worksheet, Section C: dining etiquette',
        text: 'Multiple-choice business dining situations, from choosing the right fork to handling a phone notification at the table.',
      },
    ],
    learned: [
      'To be frank, I never really thought etiquette went beyond just “don’t talk with your mouth full”. There’s actually a whole system to it.',
      'The phone thing got me specifically, because I feel like most people, including me, would just glance at it real quick if it buzzed. Apparently that’s considered bad etiquette during a business meal, so that’s something I’m actually going to keep in mind from now on.',
    ],
    application: {
      verdict: 'Applied',
      text: [
        'I believe so, because I went out to dinner a couple of times with my dad, his friend and his friend’s son. His friend works in a different profession. It wasn’t very formal, but it still felt a bit more serious than a regular family dinner with them being there, though I know them pretty well.',
        'I kept the phone thing in mind this time and didn’t just leave it out on the table, and I also made sure to use my fork and knife properly instead of doing my own thing like I usually would at home.',
      ],
    },
    evidence: [
      img(
        'ch07-slide-true-or-false.jpg', 952, 1122, ['lectures'],
        'The True or False table manners quiz, projected during the lecture.',
        'A projected document titled True or False, rules for the table, listing statements about knives, place plates, French fries and squeezing lemon into tea.',
      ),
      img(
        'ch07-worksheet-section-c.jpg', 475, 845, ['worksheets'],
        'The printed worksheet, Section C: Dining Etiquette.',
        'A printed worksheet page headed Section C, Dining Etiquette, with multiple-choice questions about forks at a formal dinner and phone notifications.',
      ),
    ],
    cover: 0,
  },

  /* ------------------------------------------------------------------ */
  {
    n: 8,
    num: '08',
    title: 'Ideal Self vs Actual Self',
    summary:
      'How interviewers score candidates on a 1 to 5 rating sheet, and the gap between how we see ourselves and who we could be.',
    status: 'Completed',
    skills: ['Self-awareness', 'Interview skills'],
    overview: [
      'This lecture was mainly about how we come across in interviews and how we see ourselves.',
      'She put up a rating sheet scored from 1 to 5, which is basically what an interviewer would be marking you on.',
      'After that she moved on to self-image. There was a slide on actual versus ideal self-image, which is basically the difference between how you see yourself and who you could actually be.',
    ],
    keyLearnings: [
      {
        title: 'What an interviewer scores (1 to 5)',
        items: [
          'Emphasising your qualifications and pointing out work-related skills.',
          'Avoiding fillers like “um” and “you know”.',
          'Displaying enthusiasm.',
          'Focusing on strengths instead of weaknesses.',
          'Acting politely and staying calm instead of nervous.',
          'Stating your career goals and relating them to the position.',
          'Answering questions promptly, but without rushing them.',
        ],
      },
      {
        title: 'Actual self vs ideal self',
        text: 'The difference between how you see yourself and who you could actually be.',
      },
    ],
    activities: [
      {
        title: 'The interview rating sheet',
        text: 'We went through the rating sheet together on screen, criterion by criterion.',
      },
      {
        title: 'The cat and the lion',
        text: 'A slide showing a cat looking into a mirror. In one version it sees itself as a cat, in the other it sees a lion.',
      },
    ],
    learned: [
      'Honestly, I didn’t realise how many tiny things get scored in an interview, like even the “um” and “you know” thing, which I definitely do without noticing.',
      'The cat and lion picture stuck with me too, because it made me think about how much of how I come across depends on how I see myself first.',
    ],
    application: {
      verdict: 'Not yet',
      text: [
        'I would say not yet, but I am planning to apply this in the mock interview we have as a part of this module.',
      ],
    },
    evidence: [
      img(
        'ch08-interview-rating-sheet.jpg', 906, 680, ['lectures'],
        'The lecture on the interview rating sheet, with the criteria projected on screen.',
        'A lecturer stands at the front of the class beside a whiteboard while a projected table lists interview criteria with scores from 1 to 5.',
      ),
      img(
        'ch08-slide-cat-and-lion.jpg', 620, 652, ['lectures'],
        'The cat and lion slide on actual and ideal self-image.',
        'A projected slide with two images of a cat looking into a mirror. In one it sees a white kitten, in the other a lion.',
      ),
    ],
    cover: 1,
  },
]

export const week09 = {
  num: '09',
  title: 'Session not attended',
  text: 'I did not attend the Week 09 session, so there is no chapter, reflection or evidence for this week.',
}

export const chapterByNum = (num: string | undefined) => chapters.find((c) => c.num === num)
