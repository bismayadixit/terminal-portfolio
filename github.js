async function loadGitHub() {
  const res = await fetch("https://api.github.com/users/bismayadixit");
  const data = await res.json();
  output.innerHTML += `
    <div>Repos: ${data.public_repos}</div>
    <div>Followers: ${data.followers}</div>
  `;
}
function loadGitHub() {
  print("📊 GitHub Activity:");

  output.innerHTML += `
    <img 
      src="https://github-readme-activity-graph.vercel.app/graph?username=bismayadixit&theme=github-compact"
      style="width:100%; margin-top:10px;"
    />
  `;
}
