export type ResourceKind = "official" | "exam" | "self-study" | "tool";

export type OfficialResource = {
  id: string;
  title: string;
  owner: string;
  kind: ResourceKind;
  url: string;
  description: string;
};

export const resources: OfficialResource[] = [
  {
    id: "bamf-naturalisation",
    title: "Naturalisation in Germany",
    owner: "BAMF",
    kind: "official",
    url: "https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung-node.html",
    description: "Official guidance for citizenship-related requirements and the naturalisation process.",
  },
  {
    id: "bamf-integration-final",
    title: "Final examination in the integration course",
    owner: "BAMF",
    kind: "official",
    url: "https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html",
    description: "Official integration-course examination information, including DTZ and Life in Germany context.",
  },
  {
    id: "bamf-test-centre",
    title: "Online test centre",
    owner: "BAMF",
    kind: "official",
    url: "https://oet.bamf.de/ords/oetut/f?p=514:1:0",
    description: "Official practice environment for the naturalisation and Life in Germany question pool.",
  },
  {
    id: "goethe-a1",
    title: "Goethe-Zertifikat A1: Start Deutsch 1",
    owner: "Goethe-Institut",
    kind: "exam",
    url: "https://www.goethe.de/ins/us/en/sta/bos/prf/gzsd1.cfm",
    description: "Official Goethe A1 exam page with sections, durations, requirements, and preparation links.",
  },
  {
    id: "goethe-a1-practice",
    title: "Goethe A1 exam training",
    owner: "Goethe-Institut",
    kind: "exam",
    url: "https://www.goethe.de/en/spr/prf/ueb/pa1.html",
    description: "Official A1 practice materials with PDFs, listening audio, accessible digital training, and vocabulary list.",
  },
  {
    id: "goethe-b1",
    title: "Goethe-Zertifikat B1",
    owner: "Goethe-Institut",
    kind: "exam",
    url: "https://www.goethe.de/en/spr/prf/gzb1.cfm",
    description: "Official Goethe B1 exam page with module information and practice links.",
  },
  {
    id: "telc-a1",
    title: "Start Deutsch 1 / telc Deutsch A1",
    owner: "telc",
    kind: "exam",
    url: "https://www.telc.net/en/language-examinations/certificate-exams/german/start-german1-telc-german-a1/",
    description: "Official telc A1 exam overview and mock-examination entry point.",
  },
  {
    id: "telc-b1",
    title: "telc Deutsch B1",
    owner: "telc",
    kind: "exam",
    url: "https://www.telc.net/en/language-examinations/certificate-exams/german/telc-deutsch-b1/",
    description: "Official telc B1 exam information.",
  },
  {
    id: "osd-b1",
    title: "ÖSD Zertifikat B1",
    owner: "ÖSD",
    kind: "exam",
    url: "https://www.osd.at/en/exams/osd-exams/osd-zertifikat-b1-zb1/",
    description: "Official ÖSD B1 exam page and preparation downloads.",
  },
  {
    id: "vhs-lernportal",
    title: "vhs-Lernportal",
    owner: "DVV / BAMF-supported learning portal",
    kind: "self-study",
    url: "https://www.vhs-lernportal.de/",
    description: "Free German self-study courses that can complement the module path.",
  },
  {
    id: "anki",
    title: "Anki",
    owner: "Anki",
    kind: "tool",
    url: "https://apps.ankiweb.net/",
    description: "Spaced-repetition flashcard app for future deck export workflows.",
  },
];

export function getResourcesByIds(ids: string[]) {
  return ids
    .map((id) => resources.find((resource) => resource.id === id))
    .filter((resource): resource is OfficialResource => Boolean(resource));
}
