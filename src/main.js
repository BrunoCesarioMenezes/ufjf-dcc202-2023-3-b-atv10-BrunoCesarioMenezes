import { getMaria, getJoao, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao } from "./joaoEMaria.js";

setJoao(1);
setMaria(2);

deJoaoParaMaria();

console.log(getJoao());
console.log(getMaria());

