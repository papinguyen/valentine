document.title = config.pageTitle;

const app = document.getElementById("app");
app.innerHTML = `
  <h1>Will you be my Valentine, ${config.valentineName}? ❤️</h1>
`;
