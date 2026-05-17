const germanMarkers =
  /\b(ich|du|Sie|Ihre|mein|meine|mir|mich|der|die|das|den|dem|ein|eine|einen|ist|bin|sind|habe|haben|kann|können|könnten|muss|möchte|nicht|bitte|weil|dass|wenn|woher|wie|guten|danke|leider)\b/i;

export function isLikelyGermanText(text: string) {
  return /[ÄÖÜäöüß]/.test(text) || germanMarkers.test(text);
}
