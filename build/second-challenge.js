"use strict";
var Work;
(function (Work) {
    Work[Work["Atriz"] = 0] = "Atriz";
    Work[Work["Padeiro"] = 1] = "Padeiro";
})(Work || (Work = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Work.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Work.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Work.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Work.Padeiro
};
