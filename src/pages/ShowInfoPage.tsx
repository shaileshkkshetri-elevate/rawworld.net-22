import React, { useState } from 'react';
import { Page } from '../types';
import { Info, Send, CheckCircle2, ShieldCheck, Tv, Trophy, ArrowRight, BookOpen, Globe2, Award, Calendar } from 'lucide-react';

interface ShowInfoPageProps {
  onNavigate: (page: Page) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const EPISODE_GUIDE = [
  { ep: '1', phase: 'Top 12', title: 'Hunger: The Seed of Agriculture', desc: '24 contestants open the season in the straw arena, split into two groups of 12.' },
  { ep: '2', phase: 'Graduate Task', title: 'Cheetuwa Chaal (Leopard\'s Pace)', desc: 'Grain and crop disease microscopic identification, traditional and mechanical ploughing.' },
  { ep: '3', phase: 'Farmer Task', title: 'Jal, Jameen ra Agni (Water, Land & Fire)', desc: 'Organic composting, Azolla water-fern multiplication, and high-temperature biochar production.' },
  { ep: '4', phase: 'Team Formation', title: 'Mauri Nach (The Bee Dance)', desc: 'Contestants perform communication gestures; farmers select their graduate science partners.' },
  { ep: '5', phase: 'Graduate Task', title: 'Jungle — Botanical Classification', desc: 'Deep-forest indigenous item identification and nutritional presentation.' },
  { ep: '6', phase: 'Farmer Task', title: 'Bajaar (The Rural Market)', desc: 'Zero-energy evaporative clay tomato cooler construction, product value-addition, and pitching.' },
  { ep: '7–8', phase: 'Battle for Top 6', title: 'Collaborative Defense Rounds', desc: 'Group A and Group B face off under timed technical cross-examinations by judges.' },
  { ep: '9', phase: 'Top 6', title: 'Art & Agrarian Culture', desc: 'Teams promote native farming heritage and food sovereignty through dramatic performance and defense.' },
  { ep: '10', phase: 'Wild Card', title: 'The Second Chance', desc: 'Three eliminated graduates return to compete in a high-pressure sudden-death challenge.' },
  { ep: '11', phase: 'Farm Round I', title: 'On-Farm Management Audit', desc: 'Judges travel directly to working contestant farms to grade real-world soil practices and animal housing.' },
  { ep: '12–14', phase: 'Gharkhet', title: 'Farmer\'s Battle for Top 3', desc: 'Intense on-farm evaluation, family farm defense, and decisive agronomic questions from Dr. Karki.' },
  { ep: '15', phase: 'Graduates', title: 'Graduates\' Battle for Top 3', desc: 'Commercial dairy and goat management, milk fat calculation, and herd health intervention.' },
  { ep: '16', phase: 'Top 3', title: 'Finale Duo Re-Pairing', desc: 'The Top 3 farmers select new graduate partners ahead of the multi-district finale campaigns.' },
  { ep: '17', phase: 'Live Session', title: 'The Reflection with Rajesh Hamal', desc: 'Contestants join Maha-Host Rajesh Hamal in an emotional review of their two-year transformation.' },
  { ep: '18', phase: 'Campaigns Begin', title: 'Agricultural Revolution in Schools', desc: 'Scored task: Finalists visit 103+ schools and engage 15,000+ students on the dignity of agriculture.' },
  { ep: '19', phase: 'International Round', title: 'Madhubani, Bihar Delegation', desc: 'Contestants travel across the border to present Nepal\'s agrarian innovations before 27 international delegates.' },
  { ep: '20', phase: 'Policy Campaign', title: 'Gen Z Movement to Agri Movement', desc: 'Contestants present the "Samriddhi Ka Lagi Naya Drishti" vision book to over 200 state policymakers.' },
  { ep: '21', phase: 'Grand Finale', title: '77-District Soil Coronation', desc: 'RAW BOT voting results revealed; 77-district sacred soil tika applied; Farmer & Graduate Champions crowned.' }
];

const FIRSTS_AND_RECORDS = [
  { title: "World's First Agriculture Game Reality Show", desc: "First reality competition built to capture the entire agricultural value chain—from soil microbiology to national policy—inside a single game format." },
  { title: "World's First Plantation-Based Voting System", desc: "RAW BOT replaced SMS codes and app taps with 289,973 verified, living trees planted directly into open soil." },
  { title: "First Reality Show with Two Distinct Contestant Tiers", desc: "Professional farmers and university agriculture graduates compete separately, then collaborate as high-performing duos." },
  { title: "First Reality Show with a Government Ex-Secretary as Judge", desc: "Former Secretary Dr. Yogendra Kumar Karki embedded national policy credibility and scientific rigor into every deliberation." },
  { title: "First Reality Show to Feature Policy Influence as Scored Task", desc: "Contestants met with 200+ policymakers, handing over the 'New Vision for Prosperity' draft acknowledged by the Finance Minister." },
  { title: "First Reality Show with a School Campaign as Scored Task", desc: "Outreach to 103+ schools and 15,000+ students was an evaluated, scored competition metric, not incidental PR." },
  { title: "Most Votes in a Plantation Voting System", desc: "289,973 verified perennial trees planted in 30 days (>60% fruit and nut varieties), with an international vote from Romania." },
  { title: "Farmer Named Public-Company Brand Ambassador", desc: "Farmer Champion Laxman K.C. was named official brand ambassador of Muktinath Krishi Company Limited." },
  { title: "Longest Production Timeline in Genre History", desc: "730 days—two full years—of continuous, dedicated filming across farms, schools, government ministries, and international sets." }
];

export const ShowInfoPage: React.FC<ShowInfoPageProps> = ({ onNavigate, handleImgError }) => {
  const [formName, setFormName] = useState('');
  const [formOrg, setFormOrg] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formInterest, setFormInterest] = useState('General Inquiry');
  const [formMsg, setFormMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const bodyText = `Name: ${formName}\nEmail: ${formEmail}\nOrganization: ${formOrg}\nCountry: ${formCountry}\nTopic: ${formInterest}\n\nMessage:\n${formMsg}`;
    const mailtoUrl = `mailto:hello@rawworld.net?subject=${encodeURIComponent('RAW Inquiry – ' + formInterest)}&body=${encodeURIComponent(bodyText)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Page Header */}
      <div className="pb-12 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-[#d4a234]/15 rounded-xs text-[#d4a234]">
            <Info className="w-4 h-4" />
          </span>
          <span className="editorial-label text-[#d4a234]">Format Blueprint · Production Records · Syndication</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#1a1a1a] leading-[0.95] tracking-tight">
          Format Architecture & <br />
          Production Records.
        </h1>
        <p className="text-lg text-[#4a4844] mt-6 max-w-3xl font-normal leading-relaxed">
          The verified chronicle of <strong>RAW (Revolutionary Agriculture War)</strong>, produced by <strong>E Square Private Limited</strong> (Govt. Copyright Certificate No. 1531). Discover the 21-episode chronology, 52 world-record claims, and international syndication framework.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] text-[#76726b]">
          <span className="inline-flex items-center gap-1.5 text-[#1a1a1a] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d4a234]"></span>
            730 Days Continuous Filming
          </span>
          <span>·</span>
          <span>1,642 Applicants (77 Districts)</span>
          <span>·</span>
          <span>21 Primetime Episodes</span>
          <span>·</span>
          <span>Himalaya Television HD</span>
        </div>
      </div>

      {/* The 3-Phase Challenge Structure */}
      <div className="space-y-8">
        <div>
          <span className="editorial-label text-[#d4a234] mb-2">Challenge Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a]">
            The Three Arena Test Tiers
          </h2>
          <p className="text-sm text-[#4a4844] mt-2 max-w-2xl leading-relaxed">
            Every episode places contestants inside the circular straw amphitheater in the Gandaki foothills to face rigorous tests graded by the technical jury:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="editorial-card p-8 space-y-4">
            <span className="font-mono text-xs text-[#d4a234] font-bold">TIER 01</span>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">Physical Agrarian Endurance</h3>
            <p className="text-sm text-[#4a4844] leading-relaxed">
              Navigating 10-horsepower modified power tillers across submerged paddy obstacles, stacking dry-stone mountain terraces against simulated torrential monsoons, and manual ox-drawn plowing sprints.
            </p>
          </div>

          <div className="editorial-card p-8 space-y-4">
            <span className="font-mono text-xs text-[#d4a234] font-bold">TIER 02</span>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">Agronomic Science & Chemistry</h3>
            <p className="text-sm text-[#4a4844] leading-relaxed">
              Conducting live field soil pH titrations, identifying 40 indigenous heirloom seed strains, formulating botanical bio-pesticides from neem and cow urine, and calculating gravity drip irrigation water heads.
            </p>
          </div>

          <div className="editorial-card p-8 space-y-4">
            <span className="font-mono text-xs text-[#d4a234] font-bold">TIER 03</span>
            <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">Agro-Enterprise & Policy</h3>
            <p className="text-sm text-[#4a4844] leading-relaxed">
              Constructing zero-energy evaporative clay cold storage, presenting "New Vision for Prosperity" to 200+ policymakers, and engaging 15,000+ students in 103+ schools on food sovereignty.
            </p>
          </div>
        </div>
      </div>

      {/* Official 21-Episode Table (From Pages 11 & 12 of the PDF) */}
      <div className="p-8 sm:p-12 bg-white border border-black/[0.08] rounded-xs space-y-8">
        <div>
          <span className="editorial-label text-[#d4a234] mb-2">The Complete Broadcast Arc</span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1a1a]">
            Season One: Episode-by-Episode Chronology
          </h3>
          <p className="text-sm text-[#4a4844] mt-2 max-w-2xl leading-relaxed">
            From the opening casting call to the 77-district soil coronation—21 episodes across two production years:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b-2 border-black/15 text-[#1a1a1a] uppercase text-[10px] tracking-wider">
                <th className="pb-3 w-16">Ep</th>
                <th className="pb-3 w-40">Phase</th>
                <th className="pb-3 w-64">Challenge Title</th>
                <th className="pb-3">What Happens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06]">
              {EPISODE_GUIDE.map((ep) => (
                <tr key={ep.ep} className="hover:bg-[#f8f7f4] transition-colors">
                  <td className="py-3.5 font-bold text-[#d4a234]">#{ep.ep}</td>
                  <td className="py-3.5 font-semibold text-[#1a1a1a]">{ep.phase}</td>
                  <td className="py-3.5 font-serif font-bold text-sm text-[#1a1a1a]">{ep.title}</td>
                  <td className="py-3.5 text-[#4a4844] text-[11px] leading-relaxed">{ep.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fifty-Two World Record Claims (From Chapter Seven of the PDF) */}
      <div className="space-y-8">
        <div>
          <span className="editorial-label text-[#d4a234] mb-2">Chapter Seven · Firsts & Records</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a]">
            Fifty-Two Claims, and Counting
          </h2>
          <p className="text-sm text-[#4a4844] mt-2 max-w-3xl leading-relaxed">
            The RAW production team has documented more than 52 potential world-record claims arising from the format, and has begun the process of submitting a formal selection for independent review. Here are nine of the strongest candidates:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIRSTS_AND_RECORDS.map((rec, i) => (
            <div key={i} className="editorial-card p-6 flex flex-col justify-between space-y-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4a234] font-bold block mb-1">
                  Record Claim #{i + 1}
                </span>
                <h4 className="font-serif font-bold text-lg text-[#1a1a1a] leading-snug">
                  {rec.title}
                </h4>
                <p className="text-xs text-[#4a4844] mt-2.5 leading-relaxed">
                  {rec.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-black/[0.06] text-[10px] font-mono text-[#76726b] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a234]" />
                <span>Audited Submission Candidate</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Replication: Bihar, India & Future Seasons */}
      <div className="p-8 sm:p-12 bg-[#1a1a1a] text-white rounded-xs space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="editorial-label text-[#d4a234]">What's Next · Global Franchise Replication</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Season One was the proof of concept.
          </h3>
          <p className="text-sm text-white/80 leading-relaxed font-mono">
            RAW was designed from the start as an ongoing global franchise. A franchise season is currently moving forward in the state of <strong>Bihar, India</strong>, and active conversations are underway with several other countries to replicate this repeatable model for food security, climate resilience, and shared prosperity.
          </p>
        </div>
        <div className="pt-2">
          <a 
            href="#inquire" 
            className="btn-gold cursor-pointer inline-flex"
          >
            Inquire for International Territory Licensing →
          </a>
        </div>
      </div>

      {/* Inquiry and Syndication Contact Form */}
      <div id="inquire" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
        <div className="lg:col-span-5 space-y-5">
          <span className="editorial-label text-[#d4a234]">Partnerships & Syndication</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a1a1a] leading-tight">
            Initiate Official Dialogue.
          </h2>
          <p className="text-sm text-[#4a4844] leading-relaxed">
            RAW licenses its format globally, provides ESG carbon offset allotments linked to our tree planting drives, and conducts educational outreach with agronomy universities.
          </p>
          <div className="p-5 bg-white border border-black/[0.08] rounded-xs font-mono text-xs space-y-2">
            <div><strong>Production House:</strong> E Square Private Limited</div>
            <div><strong>Creator & Executive Producer:</strong> Shailesh Kandel Kshetri</div>
            <div><strong>Registered Copyright:</strong> Cert. No. 1531 (Nepal)</div>
            <div><strong>Direct Dispatch:</strong> <a href="mailto:hello@rawworld.net" className="text-[#d4a234] underline">hello@rawworld.net</a></div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="editorial-card p-8 sm:p-10">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-[#d4a234]/15 text-[#d4a234] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">Inquiry Dispatched</h3>
                <p className="text-xs font-mono text-[#76726b] max-w-md mx-auto">
                  Thank you for reaching out. An official RAW executive will review your dossier and connect shortly.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-[#1a1a1a] text-white text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="editorial-label mb-1.5">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Johnathan Vance"
                      className="w-full bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs px-4 py-2.5 text-xs text-[#1a1a1a] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="editorial-label mb-1.5">Official Email</label>
                    <input 
                      type="email" 
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="johnathan@network.com"
                      className="w-full bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs px-4 py-2.5 text-xs text-[#1a1a1a] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="editorial-label mb-1.5">Organization / Entity</label>
                    <input 
                      type="text" 
                      value={formOrg}
                      onChange={(e) => setFormOrg(e.target.value)}
                      placeholder="Broadcast Studio, ESG Fund, University"
                      className="w-full bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs px-4 py-2.5 text-xs text-[#1a1a1a] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="editorial-label mb-1.5">Country / Base</label>
                    <input 
                      type="text" 
                      value={formCountry}
                      onChange={(e) => setFormCountry(e.target.value)}
                      placeholder="Nepal, India, United Kingdom, USA, etc."
                      className="w-full bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs px-4 py-2.5 text-xs text-[#1a1a1a] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="editorial-label mb-1.5">Topic of Engagement</label>
                  <select 
                    value={formInterest}
                    onChange={(e) => setFormInterest(e.target.value)}
                    className="w-full bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs px-4 py-2.5 text-xs text-[#1a1a1a] focus:outline-none transition-colors"
                  >
                    <option value="General Inquiry">General Executive Inquiry</option>
                    <option value="Format Syndication Rights">Format Licensing & International Replication (Bihar/Other Territories)</option>
                    <option value="One Tree One Vote & ESG Allotment">One Tree One Vote & Carbon Program Partnership</option>
                    <option value="University & Academic Collaboration">University & Agricultural Research Collaboration</option>
                    <option value="Sponsorship & Brand Partnership">Sponsorship & Brand Integration</option>
                  </select>
                </div>

                <div>
                  <label className="editorial-label mb-1.5">Detailed Message</label>
                  <textarea 
                    rows={4}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Specify your inquiry, territory, or proposed collaboration..."
                    className="w-full bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs px-4 py-2.5 text-xs text-[#1a1a1a] focus:outline-none transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white btn-gold rounded-xs shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Transmit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
