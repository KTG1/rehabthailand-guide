const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.rehab-card');

const questionTopics = [
  { id: 'alcohol', label: 'Alcohol rehab', intro: 'For people comparing residential alcohol treatment and medically supported withdrawal.', questions: [
    ['Do I need medical detox before therapy?', 'Possibly. Alcohol withdrawal can become dangerous. A qualified clinician should assess your drinking history, previous withdrawal, health and medications before admission.'],
    ['What should an alcohol programme include?', 'Look for withdrawal assessment, individual and group therapy, relapse prevention, medication review, family work and a written continuing-care plan.'],
    ['How long is alcohol rehab?', 'Many stays begin at 28 days, but complex withdrawal, repeated relapse or co-occurring mental health needs may justify longer treatment.'],
    ['Can the centre prescribe anti-craving medication?', 'Ask whether a licensed physician can assess medications such as naltrexone or acamprosate and how prescriptions will continue after you return home.'],
    ['What happens if I relapse after treatment?', 'The centre should explain its relapse-response process, follow-up therapy, local referrals and whether any return-to-treatment arrangement has conditions.']
  ]},
  { id: 'drugs', label: 'Drug rehab', intro: 'For comparing care for opioids, stimulants, cannabis, prescription drugs and polysubstance use.', questions: [
    ['Does the centre treat my specific substance?', 'Name every substance, including prescriptions and supplements. Experience with one addiction does not automatically mean expertise with another.'],
    ['Is medication-assisted treatment supported?', 'For opioid use, ask whether evidence-based medications are available or continued. Confirm this before travel because centre policies vary.'],
    ['How are cravings and triggers treated?', 'A credible programme should combine skills-based therapy, individual formulation, coping practice and planning for the environment you will return to.'],
    ['Will I receive drug testing?', 'Ask when testing is used, how consent and privacy are handled, and whether results guide clinical care rather than punishment.'],
    ['Can the centre treat multiple addictions?', 'Many people use more than one substance or have behavioural addictions. Ask how the treatment plan prioritises overlapping risks.']
  ]},
  { id: 'detox', label: 'Medical detox', intro: 'For anyone who may face withdrawal or needs medication and overnight observation.', questions: [
    ['Who performs the pre-admission assessment?', 'It should be completed or reviewed by an appropriately qualified medical professional—not only an admissions salesperson.'],
    ['Is medical cover available overnight?', 'Ask whether a nurse or doctor is physically on site, on call, or available through a partner hospital, and what response times are expected.'],
    ['Which withdrawals can be managed on site?', 'Alcohol, benzodiazepine and opioid withdrawal require different capabilities. Get written confirmation that the centre can safely manage your situation.'],
    ['Where would I go in an emergency?', 'Request the name of the receiving hospital, transfer procedure, travel time and who pays for ambulance or hospital treatment.'],
    ['Are detox costs included?', 'Confirm assessments, medication, laboratory tests, nursing, hospital transfers and extra detox days in the written quote.']
  ]},
  { id: 'dual', label: 'Dual diagnosis', intro: 'For addiction alongside depression, anxiety, bipolar disorder, ADHD or another diagnosis.', questions: [
    ['What does “dual diagnosis” mean here?', 'Ask which conditions the centre treats, which it excludes and whether treatment is genuinely integrated rather than simply offering occasional counselling.'],
    ['Will I see a psychiatrist?', 'Confirm whether the psychiatrist is on staff or visiting, how often appointments occur and whether additional sessions cost extra.'],
    ['Can my current medication continue?', 'Provide a complete medication list before booking. Ask about controlled medications, refills, monitoring and the plan for your return home.'],
    ['What if my symptoms worsen?', 'The centre should explain observation levels, crisis support, hospital transfer criteria and communication with your nominated support person.'],
    ['How is my discharge plan coordinated?', 'Look for medication continuity, a clinical summary, appointments with home providers and a specific plan for early warning signs.']
  ]},
  { id: 'trauma', label: 'Trauma & PTSD', intro: 'For people seeking trauma-informed addiction treatment without being pushed too quickly.', questions: [
    ['Are therapists trained in trauma treatment?', 'Ask for practitioner names, credentials and supervised experience with the specific therapy being offered.'],
    ['Will I have to describe traumatic events in groups?', 'Trauma-informed programmes should respect consent, pacing and privacy. You should understand what is shared, with whom and why.'],
    ['Which trauma therapies are used?', 'Ask how EMDR, somatic work, trauma-focused CBT or other methods are selected and when stabilisation happens before processing.'],
    ['How do you prevent retraumatisation?', 'Look for choice, predictable routines, collaborative plans, staff training and clear responses to dissociation, panic or self-harm risk.'],
    ['Can trauma work continue after discharge?', 'Deep trauma treatment often exceeds one residential stay. Ask how the centre hands care to a qualified therapist at home.']
  ]},
  { id: 'private', label: 'Private & luxury', intro: 'For executives, public figures or anyone prioritising confidentiality and a quieter setting.', questions: [
    ['What does “private” actually guarantee?', 'Clarify room type, client numbers, group participation, staff access to records, photography policies and visitor arrangements.'],
    ['Can I work during treatment?', 'Ask whether devices are allowed, when they can be used and whether work would undermine the recommended treatment schedule.'],
    ['How is confidentiality protected?', 'Request the privacy policy, record-sharing rules and circumstances where safety or law requires disclosure.'],
    ['Does luxury reduce clinical intensity?', 'Comfort can support recovery, but it should not replace therapy. Compare clinician time, programme hours and medical cover—not amenities alone.'],
    ['Can family or security staff accompany me?', 'Ask about nearby accommodation, visits, confidentiality boundaries and whether companions can enter clinical areas.']
  ]},
  { id: 'affordable', label: 'Affordable care', intro: 'For comparing lower-cost options without compromising essential medical safety.', questions: [
    ['What is the true total cost?', 'Request an itemised quote including detox, medication, tests, therapy, transfers, visa extensions and possible additional weeks.'],
    ['Are shared rooms available?', 'Shared accommodation can lower cost, but ask about roommate matching, quiet hours, safeguarding and private space for therapy.'],
    ['Are scholarships or payment plans offered?', 'Some centres offer limited assistance. Get all repayment, refund and cancellation conditions in writing before paying.'],
    ['Which services cost extra?', 'Psychiatry, medication, hospital care, specialist trauma sessions and airport transport are common areas to clarify.'],
    ['Is the cheapest option clinically suitable?', 'Low cost is not value if the centre cannot manage your withdrawal or mental health. Establish the required level of care first.']
  ]},
  { id: 'twelve-step', label: '12-step', intro: 'For people seeking fellowship-based recovery or comparing it with secular alternatives.', questions: [
    ['Is the programme entirely 12-step?', 'Ask how much time is dedicated to meetings versus evidence-based individual and group therapy.'],
    ['Do I need to be religious?', 'Many 12-step groups describe spirituality broadly, but comfort varies. Ask how the centre supports secular clients and different faiths.'],
    ['Are alternatives available?', 'If 12-step is not a fit, ask about SMART Recovery, CBT, motivational interviewing and other secular approaches.'],
    ['Will I attend community meetings?', 'Clarify whether meetings are on site or off site, in English, mixed with the public and supported after discharge.'],
    ['How is sponsorship handled?', 'Ask whether sponsors are independent community members, how boundaries are managed and how you will find support at home.']
  ]},
  { id: 'family', label: 'Family support', intro: 'For partners and relatives who want structured involvement without taking over treatment.', questions: [
    ['When can family participate?', 'Ask whether involvement begins during assessment, after stabilisation or near discharge and whether sessions are online or in person.'],
    ['Is family therapy included?', 'Confirm who facilitates it, how many sessions are included and whether it is therapy, education or a general update call.'],
    ['What information will the centre share?', 'The client controls most clinical information. Agree on consent, emergency contact and communication expectations early.'],
    ['Is support available for family members?', 'Look for education about addiction, boundaries, enabling, safety and independent support groups for relatives.'],
    ['Can couples attend together?', 'Some centres accept couples but may separate treatment plans. Ask how conflict, confidentiality and discharge risks are managed.']
  ]},
  { id: 'aftercare', label: 'Aftercare abroad', intro: 'For international clients planning a safe transition from Thailand back home.', questions: [
    ['When does aftercare planning begin?', 'Planning should start during treatment—not on the last day—and reflect your housing, work, relationships and local services.'],
    ['Will the centre coordinate with my therapist?', 'With consent, ask for a clinical handover, medication summary, risk plan and a scheduled appointment before you travel home.'],
    ['Are online sessions included?', 'Confirm the number, length, provider, time-zone availability and price after any included period ends.'],
    ['How will I find meetings or peer support?', 'The plan should identify specific local or online options and help you make contact before discharge.'],
    ['What if I relapse overseas?', 'Ask for an explicit response plan: who to call, how quickly the centre responds and when local emergency or medical care takes priority.']
  ]}
];

const labelRail = document.querySelector('.label-rail');
const qaPanel = document.querySelector('.qa-panel');

function renderTopic(topic, focusPanel = false) {
  document.querySelectorAll('.topic-label').forEach((button) => {
    const active = button.dataset.topic === topic.id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });
  qaPanel.innerHTML = `<div class="qa-panel-head"><span>${topic.label}</span><p>${topic.intro}</p></div><div class="qa-list">${topic.questions.map(([question, answer], index) => `<details ${index === 0 ? 'open' : ''}><summary><b>${String(index + 1).padStart(2, '0')}</b>${question}<span></span></summary><p>${answer}</p></details>`).join('')}</div>`;
  if (focusPanel) qaPanel.focus({ preventScroll: true });
}

questionTopics.forEach((topic, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `topic-label${index === 0 ? ' active' : ''}`;
  button.dataset.topic = topic.id;
  button.role = 'tab';
  button.setAttribute('aria-selected', String(index === 0));
  button.tabIndex = index === 0 ? 0 : -1;
  button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${topic.label}`;
  button.addEventListener('click', () => renderTopic(topic));
  labelRail.appendChild(button);
});
labelRail.addEventListener('keydown', (event) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const labels = [...labelRail.querySelectorAll('.topic-label')];
  const current = labels.indexOf(document.activeElement);
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? labels.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + labels.length) % labels.length;
  labels[next].focus();
  labels[next].click();
});
qaPanel.tabIndex = -1;
renderTopic(questionTopics[0]);

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    const filter = button.dataset.filter;
    cards.forEach((card) => { card.hidden = filter !== 'all' && !card.dataset.tags.includes(filter); });
  });
});

document.querySelector('.menu-button').addEventListener('click', (event) => {
  const header = document.querySelector('.site-header');
  const open = header.classList.toggle('mobile-open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
});

document.querySelector('#fit-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const choice = new FormData(event.currentTarget).get('priority');
  const target = document.querySelector(`[data-filter="${choice}"]`);
  target.click();
  document.querySelector('#list').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
});

const observed = document.querySelectorAll('.rehab-card, .question-list li, .accordion details');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  observed.forEach((item) => item.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  observed.forEach((item) => observer.observe(item));
}
