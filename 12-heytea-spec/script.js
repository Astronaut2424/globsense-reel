/* HEYTEA · Soho — pairing engine
   ---------------------------------------------------
   Four prompts → three-drink reading, hand-written voice.
*/

const READINGS = {
  coffee: {
    essay: `You like the weight of a flat white — the way it sits, dark and unargued. So we start where coffee ends: <em>Phoenix Single-Origin</em>, served neat, no milk, no sugar, just the leaf. It has the same Sunday gravity. Then <em>Pu-erh, Aged 7</em>, because you already trust bitterness as a friend. We finish with <em>Cheese Foam Oolong</em>, our small concession to pleasure — the cream cap is the croissant in the morning you didn't plan on.`,
    items: [
      { num: "i.",   en: "Phoenix Single-Origin", cn: "鳳凰單欉",       why: "The flat-white slot. Honey-orchid dancong, no milk." },
      { num: "ii.",  en: "Pu-erh, Aged 7",        cn: "七年熟普",       why: "If you already love bitter, meet its older brother." },
      { num: "iii.", en: "Cheese Foam Oolong",    cn: "芝士烏龍",       why: "The croissant of the set. We allow it." },
    ],
  },
  aperol: {
    essay: `Aperol is a permission slip — bright, slightly bitter, never serious. We answer in kind. <em>Osmanthus Sour</em> first, because it reads like a spritz with the alcohol switched out for memory. Then <em>Strawberry Boom</em>, a louder gesture, the one you order for the table. We close with <em>Many Many Mango</em> — late afternoon, golden hour, a touch unserious. None of these are drinks you sip alone.`,
    items: [
      { num: "i.",   en: "Osmanthus Sour",  cn: "桂花酸柑",     why: "Spritz-shaped: yuzu, osmanthus, soda finish." },
      { num: "ii.",  en: "Strawberry Boom", cn: "芝芝莓莓",     why: "The table-pleaser. Order two." },
      { num: "iii.", en: "Many Many Mango", cn: "多肉芒芒甘露", why: "Golden hour in a cup." },
    ],
  },
  jasmine: {
    essay: `You already know the room. Jasmine at home is a quiet ritual, and we trust that. So we don't try to convert you — we just widen the menu. Start with <em>Jasmine Green, Cold</em>: same plant, longer draw, different season. Then <em>Cheese Foam Oolong</em>, because oolong is jasmine's louder cousin and you should meet them. Finally <em>Osmanthus Sour</em> — for the night the kitchen is closed and you want company.`,
    items: [
      { num: "i.",   en: "Jasmine Green, Cold", cn: "茉莉冷萃", why: "Your home tea, in a longer dress." },
      { num: "ii.",  en: "Cheese Foam Oolong",  cn: "芝士烏龍", why: "The louder cousin. Meet on a Tuesday." },
      { num: "iii.", en: "Osmanthus Sour",      cn: "桂花酸柑", why: "For the evening jasmine can't carry alone." },
    ],
  },
  builder: {
    essay: `Builder's tea is honest tea — strong, milky, no fuss. We don't fight it; we extend it. <em>Brown Sugar Boba Milk</em> is the easy lane — same warmth, same sweetness, slightly more dressed. <em>Cheese Foam Oolong</em> is the converter — milk on top instead of stirred in, oolong instead of breakfast leaf, but the shape of the cup is the same in your hand. End on <em>Pu-erh, Aged 7</em> when you're ready: no milk, no sugar, all body. That's where we live.`,
    items: [
      { num: "i.",   en: "Brown Sugar Boba Milk", cn: "波波黑糖鮮奶", why: "The on-ramp. Sweet, milky, familiar." },
      { num: "ii.",  en: "Cheese Foam Oolong",    cn: "芝士烏龍",     why: "Milk on top, oolong below. The pivot." },
      { num: "iii.", en: "Pu-erh, Aged 7",        cn: "七年熟普",     why: "When you're ready to drop the milk." },
    ],
  },
};

const promptsEl  = document.getElementById("prompts");
const resultEl   = document.getElementById("pairResult");
const carouselEl = document.getElementById("pairCarousel");
const essayEl    = document.getElementById("pairEssay");
const resetBtn   = document.getElementById("pairReset");

promptsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".prompt");
  if (!btn) return;
  const key = btn.dataset.p;
  const reading = READINGS[key];
  if (!reading) return;

  carouselEl.innerHTML = reading.items
    .map(
      (it) => `
      <div class="pair__item">
        <span class="num">${it.num}</span>
        <span class="en">${it.en}</span>
        <span class="cn">${it.cn}</span>
        <span class="why">${it.why}</span>
      </div>`
    )
    .join("");
  essayEl.innerHTML = reading.essay;

  resultEl.hidden = false;
  promptsEl.style.opacity = "0.35";
  promptsEl.style.pointerEvents = "none";

  // smooth scroll
  setTimeout(() => {
    resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
});

resetBtn.addEventListener("click", () => {
  resultEl.hidden = true;
  promptsEl.style.opacity = "";
  promptsEl.style.pointerEvents = "";
  promptsEl.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* set today's date as default */
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  dateInput.value = t.toISOString().split("T")[0];
  dateInput.min = new Date().toISOString().split("T")[0];
}
