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
  userName: "User",
  date: date.toLocaleDateString("en-US", dateOptions),
};

const legalHTML = `
<p>&copy; 2020 ${project.name}, scoot.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed quisquam perferendis repellat atque, quam accusantium!</p>
<p>${project.version}</p>
`;

export default project;
export { legalHTML };
