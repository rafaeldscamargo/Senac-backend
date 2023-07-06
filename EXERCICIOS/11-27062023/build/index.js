"use strict";
var sectors;
(function (sectors) {
    sectors["mkt"] = "marketing";
    sectors["ven"] = "vendas";
    sectors["fin"] = "financeiro";
})(sectors || (sectors = {}));
let employees = [
    { name: "Marcos", payroll: 2500, sector: sectors.mkt, presencial: true },
    { name: "Maria", payroll: 1500, sector: sectors.ven, presencial: false },
    { name: "Salete", payroll: 2200, sector: sectors.fin, presencial: true },
    { name: "João", payroll: 2800, sector: sectors.mkt, presencial: false },
    { name: "Josué", payroll: 5500, sector: sectors.fin, presencial: true },
    { name: "Natalia", payroll: 4700, sector: sectors.ven, presencial: true },
    { name: "Paola", payroll: 3500, sector: sectors.mkt, presencial: true }
];
function filterEmployes(employers) {
    return employers.filter(people => people.sector === sectors.mkt && people.presencial);
}
console.table(filterEmployes(employees));
//# sourceMappingURL=index.js.map