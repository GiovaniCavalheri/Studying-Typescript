interface GithubUserResponse {
    id: number 
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    message?: 'Not Found' // Caso o usuário não seja encontrado, retorna a message
}

// ==> Interface responsável pela resposta a requisção dos respositórios.
interface GithubRepoResponse {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

// ==> Array de Usuários: 
const users: GithubUserResponse[] = []

async function fetchUser(username:string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user: GithubUserResponse = await response.json() // ==> Se retorna Promisse, então usamos await

    if(user.message) {
        console.log('Usuário não foi encontrado.')
    } else {
        users.push(user)

        console.log(`O usuário ${user.login} foi salvo.\n` +
      `\nid: ${user.id}` +
      `\nlogin: ${user.login}` +
      `\nNome: ${user.name}` +
      `\nBio: ${user.bio}` +
      `\nRepositórios públicos: ${user.public_repos}`)
    }
}
