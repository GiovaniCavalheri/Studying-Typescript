// ==> Exercicio 1
const myName: string = "Giovani Cavalheri";
const idade: Number = 19;
const matricula: boolean = true;

// ==> Exercicio 2

const nota1: number = 10;
const nota2: number = 5;
const media = (nota1 + nota2) / 2;

// ==> Exercicio 3;

const soma = (nota1: number, nota2: number): number => {
  return nota1 + nota2;
};

// ==> Exercicio 04;
const somaIdade = (idade: number): number => {
  if (idade >= 18) {
    console.log("Maior de idade;");
  } else console.log("Menor de idade");

  return idade;
};

// ==> Exercicio 6 ;

interface Usuario {
  name: string;
  email: string;
  idade: number;
}

// instancia
const newUser: Usuario = {
  name: "Giovani",
  email: "developer.cavalheri@gmail.com",
  idade: 20,
};

// ==> Exercicio 08
const usuarios: Usuario[] = [
  {
    name: "GUI FICHER VIADO",
    email: "guificherdaocu@gmail.com",
    idade: 20,
  },

  {
    name: "SAMUEL GAY DA MUITO ORABO",
    email: "SamuelfeioGAy@gmail.com",
    idade: 42,
  },
  {
    name: "gigi",
    email: "gigiemail@gmail.com",
    idade: 1,
  },
];

const maiores = usuarios.filter((user) => user.idade >= 18);
console.log(maiores);

// ================= EXERCÍCIO 09 =================
interface Aluno {
  nome: string;
  nota1: number;
  nota2: number;
}

const verificarSituacao = (aluno: Aluno): string => {
  const media: number = (aluno.nota1 + aluno.nota2) / 2;
  return media >= 7 ? "Aprovado" : "Reprovado";
};

const novoAluno: Aluno = {
  nome: "Tiago",
  nota1: 8.5,
  nota2: 6.0,
};

// ================= PROJETO REAL =================
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

let tasks: Tarefa[] = [];

// Adicionar tarefa
const addTask = (titulo: string): Tarefa => {
  const novaTarefa: Tarefa = {
    id: Math.floor(Math.random() * 100000),
    titulo,
    concluida: false,
  };

  tasks.push(novaTarefa);
  return novaTarefa;
};

// Listar tarefas
const listTasks = (): void => {
  tasks.forEach((task) => {
    console.log(
      `ID: ${task.id} | Tarefa: ${task.titulo} | Concluída: ${task.concluida}`
    );
  });
};

// Remover tarefa
const removeTask = (id: number): void => {
  tasks = tasks.filter((task) => task.id !== id);
};

// Marcar tarefa como concluída
const completeTask = (id: number): void => {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.concluida = true;
  }
};
