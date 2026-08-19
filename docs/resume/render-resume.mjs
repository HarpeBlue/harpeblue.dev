import { execFileSync } from "node:child_process";
import { closeSync, mkdtempSync, openSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const resumeVariants = ["en", "es"].map((locale) => ({
  sourcePath: fileURLToPath(new URL(`./harold-penaloza-resume-${locale}.html`, import.meta.url)),
  outputPath: fileURLToPath(
    new URL(`../../public/resume/harold-penaloza-resume-${locale}.pdf`, import.meta.url),
  ),
}));

const decodeHtml = (value) =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

const escapeGroff = (value) => {
  const escaped = value.replace(/\\/g, "\\e");
  return /^[.']/.test(escaped) ? `\\&${escaped}` : escaped;
};

const renderResume = ({ sourcePath, outputPath }) => {
  const html = readFileSync(sourcePath, "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const blocks = [];
  const blockPattern = /<(h1|h2|h3|p|li|a|span)([^>]*)>([\s\S]*?)<\/\1>/gi;

  for (const match of body.matchAll(blockPattern)) {
    const [, tag, attributes, rawContent] = match;
    const text = decodeHtml(rawContent);
    if (!text) continue;

    const className = attributes.match(/class="([^"]+)"/i)?.[1] ?? "";
    blocks.push({ tag: tag.toLowerCase(), className, text: escapeGroff(text) });
  }

  const lines = [
    ".po 0.55i",
    ".ll 7.4i",
    ".lt 7.4i",
    ".pl 10.45i",
    ".ps 9.1",
    ".vs 11.4p",
    ".nh",
    ".ad l",
    ".kern 0",
    ".lg 0",
    ".defcolor brand rgb #3778ff",
    ".defcolor muted rgb #536078",
    ".ft HR",
  ];

  for (const block of blocks) {
    const { tag, className, text } = block;

    if (tag === "h1") {
      lines.push(".sp 0", ".ft HB", ".ps 23", ".vs 25p", text, ".br", ".ps 9.1", ".vs 11.4p");
      continue;
    }

    if (tag === "h2") {
      lines.push(
        ".sp 8p",
        ".ft HB",
        ".ps 8.8",
        "\\m[brand]" + text.toUpperCase() + "\\m[]",
        ".br",
        ".ps 9.1",
        ".ft HR",
        ".sp 2p",
      );
      continue;
    }

    if (tag === "h3") {
      lines.push(".sp 2.5p", ".ft HB", ".ps 10.2", text, ".br", ".ps 9.1", ".ft HR");
      continue;
    }

    if (tag === "li") {
      lines.push(
        ".sp 1.5p",
        ".in 0.18i",
        ".ti -0.13i",
        "\\m[brand]\\(bu\\m[]  " + text,
        ".br",
        ".in 0",
      );
      continue;
    }

    if (tag === "a") {
      lines.push(".br", ".ps 8.5", "\\m[muted]" + text + "\\m[]", ".br", ".ps 9.1");
      continue;
    }

    if (className.includes("role")) {
      lines.push(".ft HB", ".ps 11", "\\m[brand]" + text + "\\m[]", ".br", ".ps 9.1", ".ft HR");
      continue;
    }

    if (className.includes("location") || className.includes("entry-meta")) {
      lines.push(".br", ".ps 8.5", "\\m[muted]" + text + "\\m[]", ".br", ".ps 9.1");
      continue;
    }

    if (className.includes("project-links")) {
      lines.push(".sp 1.5p", ".ps 8.4", "\\m[brand]" + text + "\\m[]", ".br", ".ps 9.1");
      continue;
    }

    lines.push(".sp 2.5p", text, ".br");
  }

  const temporaryDirectory = mkdtempSync(join(tmpdir(), "harpeblue-resume-"));
  const roffPath = join(temporaryDirectory, "resume.roff");
  const postscriptPath = join(temporaryDirectory, "resume.ps");
  const pdfPath = join(temporaryDirectory, "resume.pdf");

  try {
    writeFileSync(roffPath, `${lines.join("\n")}\n`);

    const postscriptDescriptor = openSync(postscriptPath, "w");
    try {
      execFileSync("groff", ["-Kutf8", "-Tps", "-P-pletter", roffPath], {
        stdio: ["ignore", postscriptDescriptor, "inherit"],
      });
    } finally {
      closeSync(postscriptDescriptor);
    }

    execFileSync(
      "gs",
      [
        "-q",
        "-dBATCH",
        "-dNOPAUSE",
        "-sDEVICE=pdfwrite",
        "-dCompatibilityLevel=1.4",
        "-dFIXEDMEDIA",
        "-sPAPERSIZE=letter",
        `-sOutputFile=${pdfPath}`,
        postscriptPath,
      ],
      { stdio: "inherit" },
    );

    writeFileSync(outputPath, readFileSync(pdfPath));
    console.log(`Rendered ${outputPath}`);
  } finally {
    rmSync(temporaryDirectory, { force: true, recursive: true });
  }
};

for (const resume of resumeVariants) {
  renderResume(resume);
}
