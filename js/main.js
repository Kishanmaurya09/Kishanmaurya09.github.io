(function () {
  "use strict";

  const d = PORTFOLIO;

  /* ---------- helpers ---------- */
  const $ = (id) => document.getElementById(id);

  // Build an element safely (textContent, never innerHTML, for your data)
  function el(tag, props, children) {
    const node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach((k) => {
        if (k === "text") node.textContent = props[k];
        else if (k === "class") node.className = props[k];
        else node.setAttribute(k, props[k]);
      });
    }
    (children || []).forEach((c) => node.appendChild(c));
    return node;
  }

  function externalLink(label, href) {
    return el("a", { text: label, href: href, target: "_blank", rel: "noopener" });
  }

  /* ---------- page title, brand, hero ---------- */
  document.title = d.name + " — " + d.role;
  $("brand").textContent = d.name;
  $("heroName").textContent = d.name;
  $("heroTagline").textContent = d.tagline;
  $("footName").textContent = d.name;
  $("year").textContent = new Date().getFullYear();

  const resumeBtn = $("resumeBtn");
  resumeBtn.setAttribute("href", d.resume);
  resumeBtn.setAttribute("download", "");

  /* ---------- about ---------- */
  d.about.forEach((text) => $("aboutText").appendChild(el("p", { text: text })));
  d.facts.forEach((f) => {
    $("facts").appendChild(
      el("li", null, [el("span", { text: f.label }), el("span", { text: f.value })])
    );
  });

  /* ---------- projects ---------- */
  d.projects.forEach((p, i) => {
    const summary = el("summary", null, [
      el("h3", { text: p.name }),
      el("span", { class: "toggle", "aria-hidden": "true", text: "+" }),
      el("p", { class: "sum", text: p.description }),
    ]);

    const tags = el("ul", { class: "tags" });
    p.tech.forEach((t) => tags.appendChild(el("li", { text: t })));

    const links = el("div", { class: "links" });
    if (p.github) links.appendChild(externalLink("GitHub repository", p.github));
    if (p.demo) links.appendChild(externalLink("Live demo", p.demo));

    const more = el("div", { class: "more" }, [el("p", { text: p.details }), tags, links]);
    const details = el("details", { class: "project" }, [summary, more]);
    if (i === 0) details.setAttribute("open", "");
    $("projectList").appendChild(details);
  });
  $("allRepos").setAttribute("href", d.github);

  /* ---------- skills ---------- */
  Object.keys(d.skills).forEach((group) => {
    const list = el("ul");
    d.skills[group].forEach((s) => list.appendChild(el("li", { text: s })));
    $("skillList").appendChild(el("div", { class: "skill" }, [el("h3", { text: group }), list]));
  });

  /* ---------- education ---------- */
  d.education.forEach((item) => {
    const points = el("ul");
    item.points.forEach((pt) => points.appendChild(el("li", { text: pt })));
    $("timeline").appendChild(
      el("li", null, [
        el("span", { class: "when", text: item.period }),
        el("h3", { text: item.title }),
        el("span", { class: "org", text: item.org }),
        points,
      ])
    );
  });

  /* ---------- certificates & extras ---------- */
  d.certificates.forEach((c) => $("certList").appendChild(el("li", { text: c })));
  $("moreInfo").textContent =
    "Activities: " + d.activities + " Tools: " + d.otherSkills + ".";

  /* ---------- contact links ---------- */
  const reach = $("reach");
  reach.appendChild(el("a", { text: d.email, href: "mailto:" + d.email }));
  reach.appendChild(externalLink("GitHub", d.github));
  reach.appendChild(externalLink("LinkedIn", d.linkedin));

  /* ---------- contact form (opens the visitor's email app) ---------- */
  $("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const f = e.target;
    const note = $("formNote");
    const name = f.name.value.trim();
    const email = f.email.value.trim();
    const msg = f.message.value.trim();

    if (!name || !email || !msg) {
      note.textContent = "Please fill in your name, email, and message.";
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      note.textContent = "Enter a valid email address, like name@example.com.";
      return;
    }
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:" + d.email + "?subject=" + subject + "&body=" + body;
    note.textContent = "Opening your email app to send the message.";
  });

  /* ---------- highlight the current section in the nav ---------- */
  const links = document.querySelectorAll(".nav .link");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("main .block").forEach((s) => io.observe(s));
  }

  /* ---------- hero: profile typed out once ---------- */
  const esc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const str = (s) => '<span class="tk-s">"' + esc(s) + '"</span>';

  const stack = [];
  Object.keys(d.skills).forEach((g) => stack.push(d.skills[g][0].split(",")[0]));

  const html = [
    '<span class="tk-c">// who I am</span>',
    '<span class="tk-k">const</span> <span class="tk-p">developer</span> = {',
    "  name: " + str(d.name) + ",",
    "  role: " + str(d.role) + ",",
    "  location: " + str(d.location) + ",",
    "  stack: [" + stack.map(str).join(", ") + "],",
    "  openToWork: <span class=\"tk-k\">" + (d.openToWork ? "true" : "false") + "</span>,",
    "};",
  ].join("\n");

  const typed = $("typed");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const caret = '<span class="caret"></span>';

  if (reduce) {
    typed.innerHTML = html + caret;
  } else {
    let i = 0;
    let out = "";
    let inTag = false;
    (function step() {
      let shown = 0;
      while (i < html.length && shown < 2) {
        const ch = html[i];
        out += ch;
        if (ch === "<") inTag = true;
        if (ch === ">") inTag = false;
        i++;
        if (!inTag) shown++;
      }
      typed.innerHTML = out + caret;
      if (i < html.length) setTimeout(step, 18);
    })();
  }
})();
