"use strict";
let users = [
    { client: "João", totalBalance: 1000, debit: [100, 200, 300] },
    { client: "Paula", totalBalance: 7500, debit: [200, 1040] },
    { client: "pedro", totalBalance: 10000, debit: [5140, 6100, 100, 2000] },
    { client: "luciano", totalBalance: 100, debit: [100, 200, 1700] },
    { client: "Artur", totalBalance: 1800, debit: [200, 300] },
    { client: "Soter", totalBalance: 1200, debit: [] }
];
function getNegativeAmount(users) {
    calculateDebits();
    return users.filter(clients => {
        return clients.totalBalance < 0;
    });
}
function calculateDebits() {
    return users.map(user => {
        const sumDebits = user.debit.reduce((acumulator, value) => value ? acumulator += value : 0, 0);
        user.totalBalance -= sumDebits;
        user.debit = [];
    });
}
console.log(getNegativeAmount(users));
//# sourceMappingURL=index.js.map