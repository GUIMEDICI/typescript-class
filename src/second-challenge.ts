type person = {
    nome: string,
    idade: number,
    profissao: Work,
}

enum Work {
    Atriz,
    Padeiro
}

let pessoa1: person = {
    nome: "maria",
    idade: 29,
    profissao: Work.Atriz
};

let pessoa2: person = {
    nome: "roberto",
    idade: 19,
    profissao: Work.Padeiro
};

let pessoa3: person = {
    nome: "laura",
    idade: 32,
    profissao: Work.Atriz
};

let pessoa4: person = {
    nome: "Carlos",
    idade: 19,
    profissao: Work.Padeiro
};