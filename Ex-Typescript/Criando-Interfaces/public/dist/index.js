// ==> Array de Usuários:
const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json(); // ==> Se retorna Promisse, então usamos await
    if (user.message) {
        console.log("Usuário não foi encontrado.");
    }
    else {
        users.push(user);
        console.log(`O usuário ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`);
    }
}
// ==> Chamada na API para obter os repositórios
async function showUser(username) {
    const user = users.find((user) => user.login === username);
    if (typeof user === "undefined") {
        console.log("Usuário não encontrado.");
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`;
        repos.forEach((repo) => {
            message +=
                `\nNome: ${repo.name}` +
                    `\nDescrição: ${repo.description}` +
                    `\nEstrelas: ${repo.stargazers_count}` +
                    `\nÉ um fork: ${repo.fork ? "Sim" : "Não"}\n`;
        });
        alert(message);
    }
}
// ==> Exibir todos os usuários 
function showAllUsers() {
    let message = 'Usuários:\n ';
    users.forEach(user => {
        message += `\n ${user.login}`;
    });
    console.log(message);
}
// ==> Total repositórios
function showReposTotal() {
    const reposTotal = users.reduce((accumulador, user) => accumulador + user.public_repos, 0);
    console.log(`O grupo possui um total de ${reposTotal} repositórios públicos!`);
}
// ==> Mostrar Top 5
function showTopFive() {
    const topFive = users
        .slice() // Cópia do array 
        .sort((a, b) => b.public_repos - a.public_repos)
        .slice(0, 5);
    let message = "Top 5 usuários com mais repositórios públicos:\n";
    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
    });
    alert(message);
}
