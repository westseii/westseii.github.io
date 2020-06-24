const date = new Date();
const dateOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const project = {
  name: "Playground",
  version: "a.1.2",
  userName: "UncannyToucan ( * ph )",
  date: date.toLocaleDateString("en-US", dateOptions),
};

const legalHTML = `
<p>&copy; 2020 ${project.name}, scoot.</p>
<p>
  "The sign of doom is written on your brows—how long will ye kick against the
  pin-pricks? But there is one conquest and one crown, one redemption and one
  solution. Know yourselves—be infertile and let the earth be silent after ye."
  — Peter Wessel Zapffe
</p>
<p>${project.version}</p>
`;

export default project;
export { legalHTML };
